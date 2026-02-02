# Node.js + Prisma + PostgreSQL Setup Guide

A comprehensive guide to setting up a Node.js project with Prisma ORM and PostgreSQL database.

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- PostgreSQL installed locally or access to a PostgreSQL database

## Step 1: Initialize Your Node.js Project

Create a new directory and initialize a Node.js project:

```bash
mkdir my-prisma-app
cd my-prisma-app
npm init -y
```

## Step 2: Install Dependencies

Install Prisma CLI as a dev dependency and Prisma Client:

```bash
npm install prisma --save-dev
npm install @prisma/client
```

If you're using TypeScript (recommended):

```bash
npm install typescript ts-node @types/node --save-dev
npx tsc --init
```

## Step 3: Initialize Prisma

Initialize Prisma in your project:

```bash
npx prisma init
```

This creates:
- `prisma/schema.prisma` - Your Prisma schema file
- `.env` - Environment variables file

## Step 4: Configure Database Connection

Open the `.env` file and update the `DATABASE_URL`:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/mydatabase?schema=public"
```

Replace:
- `username` - Your PostgreSQL username
- `password` - Your PostgreSQL password
- `localhost:5432` - Your database host and port
- `mydatabase` - Your database name

## Step 5: Define Your Schema

Open `prisma/schema.prisma` and define your data models. Here's an example:

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  name      String?
  posts     Post[]
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Post {
  id        Int      @id @default(autoincrement())
  title     String
  content   String?
  published Boolean  @default(false)
  author    User     @relation(fields: [authorId], references: [id])
  authorId  Int
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

## Step 6: Create and Run Migrations

Create your first migration to set up the database schema:

```bash
npx prisma migrate dev --name init
```

This will:
- Create a new migration in `prisma/migrations/`
- Apply the migration to your database
- Generate Prisma Client

## Step 7: Generate Prisma Client

If you need to regenerate the Prisma Client manually:

```bash
npx prisma generate
```

## Step 8: Use Prisma Client in Your Code

Create an `index.js` (or `index.ts`) file:

```javascript
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  // Create a new user
  const user = await prisma.user.create({
    data: {
      email: 'alice@example.com',
      name: 'Alice',
      posts: {
        create: {
          title: 'My first post',
          content: 'Hello World!'
        }
      }
    }
  })
  console.log('Created user:', user)

  // Fetch all users with their posts
  const users = await prisma.user.findMany({
    include: {
      posts: true
    }
  })
  console.log('All users:', JSON.stringify(users, null, 2))
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
```

For TypeScript:

```typescript
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Your database queries here
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
```

## Step 9: Create API Routes with Express

Install Express:

```bash
npm install express
npm install --save-dev @types/express  # If using TypeScript
```

Create a `server.js` (or `server.ts`) file with GET and POST routes:

```javascript
const express = require('express')
const { PrismaClient } = require('@prisma/client')

const app = express()
const prisma = new PrismaClient()
const PORT = process.env.PORT || 3000

// Middleware to parse JSON
app.use(express.json())

// GET: Fetch all users
app.get('/users', async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      include: {
        posts: true
      }
    })
    res.json(users)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' })
  }
})

// GET: Fetch a single user by ID
app.get('/users/:id', async (req, res) => {
  try {
    const { id } = req.params
    const user = await prisma.user.findUnique({
      where: { id: Number(id) },
      include: {
        posts: true
      }
    })
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }
    
    res.json(user)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch user' })
  }
})

// POST: Create a new user
app.post('/users', async (req, res) => {
  try {
    const { email, name } = req.body
    
    // Validation
    if (!email) {
      return res.status(400).json({ error: 'Email is required' })
    }
    
    const user = await prisma.user.create({
      data: {
        email,
        name
      }
    })
    
    res.status(201).json(user)
  } catch (error) {
    // Handle unique constraint violation
    if (error.code === 'P2002') {
      return res.status(409).json({ error: 'Email already exists' })
    }
    res.status(500).json({ error: 'Failed to create user' })
  }
})

// GET: Fetch all posts
app.get('/posts', async (req, res) => {
  try {
    const posts = await prisma.post.findMany({
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true
          }
        }
      }
    })
    res.json(posts)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch posts' })
  }
})

// GET: Fetch published posts only
app.get('/posts/published', async (req, res) => {
  try {
    const posts = await prisma.post.findMany({
      where: { published: true },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true
          }
        }
      }
    })
    res.json(posts)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch published posts' })
  }
})

// POST: Create a new post
app.post('/posts', async (req, res) => {
  try {
    const { title, content, authorId, published } = req.body
    
    // Validation
    if (!title || !authorId) {
      return res.status(400).json({ error: 'Title and authorId are required' })
    }
    
    const post = await prisma.post.create({
      data: {
        title,
        content,
        published: published || false,
        authorId: Number(authorId)
      },
      include: {
        author: true
      }
    })
    
    res.status(201).json(post)
  } catch (error) {
    // Handle foreign key constraint violation
    if (error.code === 'P2003') {
      return res.status(404).json({ error: 'Author not found' })
    }
    res.status(500).json({ error: 'Failed to create post' })
  }
})

// PUT: Update a post
app.put('/posts/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { title, content, published } = req.body
    
    const post = await prisma.post.update({
      where: { id: Number(id) },
      data: {
        ...(title && { title }),
        ...(content !== undefined && { content }),
        ...(published !== undefined && { published })
      }
    })
    
    res.json(post)
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({ error: 'Post not found' })
    }
    res.status(500).json({ error: 'Failed to update post' })
  }
})

// DELETE: Delete a post
app.delete('/posts/:id', async (req, res) => {
  try {
    const { id } = req.params
    
    await prisma.post.delete({
      where: { id: Number(id) }
    })
    
    res.status(204).send()
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({ error: 'Post not found' })
    }
    res.status(500).json({ error: 'Failed to delete post' })
  }
})

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})

// Graceful shutdown
process.on('SIGINT', async () => {
  await prisma.$disconnect()
  process.exit(0)
})
```

For TypeScript version:

```typescript
import express, { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const app = express()
const prisma = new PrismaClient()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.get('/users', async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany({
      include: { posts: true }
    })
    res.json(users)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' })
  }
})

app.post('/users', async (req: Request, res: Response) => {
  try {
    const { email, name } = req.body
    
    if (!email) {
      return res.status(400).json({ error: 'Email is required' })
    }
    
    const user = await prisma.user.create({
      data: { email, name }
    })
    
    res.status(201).json(user)
  } catch (error: any) {
    if (error.code === 'P2002') {
      return res.status(409).json({ error: 'Email already exists' })
    }
    res.status(500).json({ error: 'Failed to create user' })
  }
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
```

## Step 10: Test Your API Routes

Run the server:

```bash
node server.js
```

Or with TypeScript:

```bash
npx ts-node server.ts
```

### Test with cURL:

**Create a user:**
```bash
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","name":"John Doe"}'
```

**Get all users:**
```bash
curl http://localhost:3000/users
```

**Create a post:**
```bash
curl -X POST http://localhost:3000/posts \
  -H "Content-Type: application/json" \
  -d '{"title":"My First Post","content":"This is amazing!","authorId":1,"published":true}'
```

**Get all posts:**
```bash
curl http://localhost:3000/posts
```

**Update a post:**
```bash
curl -X PUT http://localhost:3000/posts/1 \
  -H "Content-Type: application/json" \
  -d '{"published":true}'
```

**Delete a post:**
```bash
curl -X DELETE http://localhost:3000/posts/1
```

## Useful Prisma Commands

- `npx prisma studio` - Open Prisma Studio (database GUI)
- `npx prisma migrate dev` - Create and apply migrations in development
- `npx prisma migrate deploy` - Apply migrations in production
- `npx prisma db push` - Push schema changes without creating migrations
- `npx prisma db pull` - Pull schema from existing database
- `npx prisma generate` - Generate Prisma Client
- `npx prisma format` - Format your Prisma schema

## Best Practices

1. **Always use migrations** - Don't use `db push` in production
2. **One PrismaClient instance** - Create a singleton instance to avoid connection issues
3. **Use environment variables** - Never commit database credentials
4. **Handle disconnection** - Always disconnect Prisma Client when done
5. **Use transactions** - For operations that need to succeed or fail together

### Singleton Pattern for Prisma Client

Create `prisma.js` (or `prisma.ts`):

```javascript
const { PrismaClient } = require('@prisma/client')

const globalForPrisma = global

const prisma = globalForPrisma.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

module.exports = prisma
```

## Troubleshooting

**Error: Can't reach database server**
- Verify PostgreSQL is running
- Check DATABASE_URL in .env
- Ensure database exists

**Error: Migration failed**
- Check for existing data that conflicts with schema changes
- Review migration SQL files in `prisma/migrations/`

**Types not updating**
- Run `npx prisma generate` after schema changes

## Additional Resources

- [Prisma Documentation](https://www.prisma.io/docs)
- [Prisma Schema Reference](https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference)
- [Prisma Client API Reference](https://www.prisma.io/docs/reference/api-reference/prisma-client-reference)

## Next Steps

- Set up authentication
- Implement API routes (Express, Fastify, etc.)
- Add validation and error handling
- Configure logging
- Set up testing with Prisma