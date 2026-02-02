const bcrypt = require("bcrypt");
const prisma = require("../prisma-client");
const express = require("express");
const router = express.Router();

// Salt rounds for bcrypt (10 is a good balance between security and performance)
const SALT_ROUNDS = 10;

// Register/Create new admin
router.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Validation
        if (!name || !email || !password) {
            return res.status(400).json({ error: "Name, email, and password are required" });
        }

        if (password.length < 8) {
            return res.status(400).json({ error: "Password must be at least 8 characters long" });
        }

        // Check if admin already exists
        const existingAdmin = await prisma.admin.findUnique({
            where: { email }
        });

        if (existingAdmin) {
            return res.status(409).json({ error: "Admin with this email already exists" });
        }

        // Hash password with salt (bcrypt automatically generates and includes salt)
        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

        // Create admin
        const admin = await prisma.admin.create({
            data: {
                name,
                email,
                password: hashedPassword
            },
            select: {
                id: true,
                name: true,
                email: true,
                createdAt: true
                // Don't return password
            }
        });

        res.status(201).json({
            message: "Admin created successfully",
            admin
        });
    } catch (error) {
        console.error("Error creating admin:", error);
        res.status(500).json({ error: "Failed to create admin" });
    }
});

// Login admin
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validation
        if (!email || !password) {
            return res.status(400).json({ error: "Email and password are required" });
        }

        // Find admin by email
        const admin = await prisma.admin.findUnique({
            where: { email }
        });

        if (!admin) {
            // Don't reveal whether user exists or not (security best practice)
            return res.status(401).json({ error: "Invalid email or password" });
        }

        // Compare password (bcrypt.compare automatically handles the salt)
        const isPasswordValid = await bcrypt.compare(password, admin.password);

        if (!isPasswordValid) {
            return res.status(401).json({ error: "Invalid email or password" });
        }

        // Return admin info (without password)
        res.json({
            message: "Login successful",
            admin: {
                id: admin.id,
                name: admin.name,
                email: admin.email
            }
        });
    } catch (error) {
        console.error("Error logging in:", error);
        res.status(500).json({ error: "Failed to login" });
    }
});

// Get all admins (for admin management)
router.get("/", async (req, res) => {
    try {
        const admins = await prisma.admin.findMany({
            select: {
                id: true,
                name: true,
                email: true,
                createdAt: true,
                updatedAt: true
                // Don't return passwords
            }
        });
        res.json(admins);
    } catch (error) {
        console.error("Error fetching admins:", error);
        res.status(500).json({ error: "Failed to fetch admins" });
    }
});

// Update admin password
router.put("/change-password/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { currentPassword, newPassword } = req.body;

        // Validation
        if (!currentPassword || !newPassword) {
            return res.status(400).json({ error: "Current password and new password are required" });
        }

        if (newPassword.length < 8) {
            return res.status(400).json({ error: "New password must be at least 8 characters long" });
        }

        // Find admin
        const admin = await prisma.admin.findUnique({
            where: { id }
        });

        if (!admin) {
            return res.status(404).json({ error: "Admin not found" });
        }

        // Verify current password
        const isPasswordValid = await bcrypt.compare(currentPassword, admin.password);

        if (!isPasswordValid) {
            return res.status(401).json({ error: "Current password is incorrect" });
        }

        // Hash new password
        const hashedPassword = await bcrypt.hash(newPassword, SALT_ROUNDS);

        // Update password
        await prisma.admin.update({
            where: { id },
            data: { password: hashedPassword }
        });

        res.json({ message: "Password updated successfully" });
    } catch (error) {
        console.error("Error updating password:", error);
        res.status(500).json({ error: "Failed to update password" });
    }
});

module.exports = router; 