
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model event_items
 * 
 */
export type event_items = $Result.DefaultSelection<Prisma.$event_itemsPayload>
/**
 * Model booking_requests
 * 
 */
export type booking_requests = $Result.DefaultSelection<Prisma.$booking_requestsPayload>
/**
 * Model contact_messages
 * 
 */
export type contact_messages = $Result.DefaultSelection<Prisma.$contact_messagesPayload>
/**
 * Model admin
 * 
 */
export type admin = $Result.DefaultSelection<Prisma.$adminPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Event_items
 * const event_items = await prisma.event_items.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Event_items
   * const event_items = await prisma.event_items.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.event_items`: Exposes CRUD operations for the **event_items** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Event_items
    * const event_items = await prisma.event_items.findMany()
    * ```
    */
  get event_items(): Prisma.event_itemsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booking_requests`: Exposes CRUD operations for the **booking_requests** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Booking_requests
    * const booking_requests = await prisma.booking_requests.findMany()
    * ```
    */
  get booking_requests(): Prisma.booking_requestsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contact_messages`: Exposes CRUD operations for the **contact_messages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contact_messages
    * const contact_messages = await prisma.contact_messages.findMany()
    * ```
    */
  get contact_messages(): Prisma.contact_messagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.adminDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    event_items: 'event_items',
    booking_requests: 'booking_requests',
    contact_messages: 'contact_messages',
    admin: 'admin'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "event_items" | "booking_requests" | "contact_messages" | "admin"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      event_items: {
        payload: Prisma.$event_itemsPayload<ExtArgs>
        fields: Prisma.event_itemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.event_itemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$event_itemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.event_itemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$event_itemsPayload>
          }
          findFirst: {
            args: Prisma.event_itemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$event_itemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.event_itemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$event_itemsPayload>
          }
          findMany: {
            args: Prisma.event_itemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$event_itemsPayload>[]
          }
          create: {
            args: Prisma.event_itemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$event_itemsPayload>
          }
          createMany: {
            args: Prisma.event_itemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.event_itemsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$event_itemsPayload>[]
          }
          delete: {
            args: Prisma.event_itemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$event_itemsPayload>
          }
          update: {
            args: Prisma.event_itemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$event_itemsPayload>
          }
          deleteMany: {
            args: Prisma.event_itemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.event_itemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.event_itemsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$event_itemsPayload>[]
          }
          upsert: {
            args: Prisma.event_itemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$event_itemsPayload>
          }
          aggregate: {
            args: Prisma.Event_itemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent_items>
          }
          groupBy: {
            args: Prisma.event_itemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Event_itemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.event_itemsCountArgs<ExtArgs>
            result: $Utils.Optional<Event_itemsCountAggregateOutputType> | number
          }
        }
      }
      booking_requests: {
        payload: Prisma.$booking_requestsPayload<ExtArgs>
        fields: Prisma.booking_requestsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.booking_requestsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$booking_requestsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.booking_requestsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$booking_requestsPayload>
          }
          findFirst: {
            args: Prisma.booking_requestsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$booking_requestsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.booking_requestsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$booking_requestsPayload>
          }
          findMany: {
            args: Prisma.booking_requestsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$booking_requestsPayload>[]
          }
          create: {
            args: Prisma.booking_requestsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$booking_requestsPayload>
          }
          createMany: {
            args: Prisma.booking_requestsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.booking_requestsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$booking_requestsPayload>[]
          }
          delete: {
            args: Prisma.booking_requestsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$booking_requestsPayload>
          }
          update: {
            args: Prisma.booking_requestsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$booking_requestsPayload>
          }
          deleteMany: {
            args: Prisma.booking_requestsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.booking_requestsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.booking_requestsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$booking_requestsPayload>[]
          }
          upsert: {
            args: Prisma.booking_requestsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$booking_requestsPayload>
          }
          aggregate: {
            args: Prisma.Booking_requestsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking_requests>
          }
          groupBy: {
            args: Prisma.booking_requestsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Booking_requestsGroupByOutputType>[]
          }
          count: {
            args: Prisma.booking_requestsCountArgs<ExtArgs>
            result: $Utils.Optional<Booking_requestsCountAggregateOutputType> | number
          }
        }
      }
      contact_messages: {
        payload: Prisma.$contact_messagesPayload<ExtArgs>
        fields: Prisma.contact_messagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.contact_messagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contact_messagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.contact_messagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contact_messagesPayload>
          }
          findFirst: {
            args: Prisma.contact_messagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contact_messagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.contact_messagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contact_messagesPayload>
          }
          findMany: {
            args: Prisma.contact_messagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contact_messagesPayload>[]
          }
          create: {
            args: Prisma.contact_messagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contact_messagesPayload>
          }
          createMany: {
            args: Prisma.contact_messagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.contact_messagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contact_messagesPayload>[]
          }
          delete: {
            args: Prisma.contact_messagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contact_messagesPayload>
          }
          update: {
            args: Prisma.contact_messagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contact_messagesPayload>
          }
          deleteMany: {
            args: Prisma.contact_messagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.contact_messagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.contact_messagesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contact_messagesPayload>[]
          }
          upsert: {
            args: Prisma.contact_messagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contact_messagesPayload>
          }
          aggregate: {
            args: Prisma.Contact_messagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContact_messages>
          }
          groupBy: {
            args: Prisma.contact_messagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Contact_messagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.contact_messagesCountArgs<ExtArgs>
            result: $Utils.Optional<Contact_messagesCountAggregateOutputType> | number
          }
        }
      }
      admin: {
        payload: Prisma.$adminPayload<ExtArgs>
        fields: Prisma.adminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.adminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.adminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          findFirst: {
            args: Prisma.adminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.adminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          findMany: {
            args: Prisma.adminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>[]
          }
          create: {
            args: Prisma.adminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          createMany: {
            args: Prisma.adminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.adminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>[]
          }
          delete: {
            args: Prisma.adminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          update: {
            args: Prisma.adminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          deleteMany: {
            args: Prisma.adminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.adminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.adminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>[]
          }
          upsert: {
            args: Prisma.adminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.adminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.adminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    event_items?: event_itemsOmit
    booking_requests?: booking_requestsOmit
    contact_messages?: contact_messagesOmit
    admin?: adminOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model event_items
   */

  export type AggregateEvent_items = {
    _count: Event_itemsCountAggregateOutputType | null
    _min: Event_itemsMinAggregateOutputType | null
    _max: Event_itemsMaxAggregateOutputType | null
  }

  export type Event_itemsMinAggregateOutputType = {
    id: string | null
    title: string | null
    date: string | null
    image: string | null
    category: string | null
    description: string | null
    price: string | null
    registration_link: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Event_itemsMaxAggregateOutputType = {
    id: string | null
    title: string | null
    date: string | null
    image: string | null
    category: string | null
    description: string | null
    price: string | null
    registration_link: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Event_itemsCountAggregateOutputType = {
    id: number
    title: number
    date: number
    image: number
    category: number
    description: number
    price: number
    registration_link: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Event_itemsMinAggregateInputType = {
    id?: true
    title?: true
    date?: true
    image?: true
    category?: true
    description?: true
    price?: true
    registration_link?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Event_itemsMaxAggregateInputType = {
    id?: true
    title?: true
    date?: true
    image?: true
    category?: true
    description?: true
    price?: true
    registration_link?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Event_itemsCountAggregateInputType = {
    id?: true
    title?: true
    date?: true
    image?: true
    category?: true
    description?: true
    price?: true
    registration_link?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Event_itemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which event_items to aggregate.
     */
    where?: event_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of event_items to fetch.
     */
    orderBy?: event_itemsOrderByWithRelationInput | event_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: event_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` event_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` event_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned event_items
    **/
    _count?: true | Event_itemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Event_itemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Event_itemsMaxAggregateInputType
  }

  export type GetEvent_itemsAggregateType<T extends Event_itemsAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent_items]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent_items[P]>
      : GetScalarType<T[P], AggregateEvent_items[P]>
  }




  export type event_itemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: event_itemsWhereInput
    orderBy?: event_itemsOrderByWithAggregationInput | event_itemsOrderByWithAggregationInput[]
    by: Event_itemsScalarFieldEnum[] | Event_itemsScalarFieldEnum
    having?: event_itemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Event_itemsCountAggregateInputType | true
    _min?: Event_itemsMinAggregateInputType
    _max?: Event_itemsMaxAggregateInputType
  }

  export type Event_itemsGroupByOutputType = {
    id: string
    title: string
    date: string
    image: string
    category: string
    description: string
    price: string | null
    registration_link: string | null
    createdAt: Date
    updatedAt: Date
    _count: Event_itemsCountAggregateOutputType | null
    _min: Event_itemsMinAggregateOutputType | null
    _max: Event_itemsMaxAggregateOutputType | null
  }

  type GetEvent_itemsGroupByPayload<T extends event_itemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Event_itemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Event_itemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Event_itemsGroupByOutputType[P]>
            : GetScalarType<T[P], Event_itemsGroupByOutputType[P]>
        }
      >
    >


  export type event_itemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    date?: boolean
    image?: boolean
    category?: boolean
    description?: boolean
    price?: boolean
    registration_link?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["event_items"]>

  export type event_itemsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    date?: boolean
    image?: boolean
    category?: boolean
    description?: boolean
    price?: boolean
    registration_link?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["event_items"]>

  export type event_itemsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    date?: boolean
    image?: boolean
    category?: boolean
    description?: boolean
    price?: boolean
    registration_link?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["event_items"]>

  export type event_itemsSelectScalar = {
    id?: boolean
    title?: boolean
    date?: boolean
    image?: boolean
    category?: boolean
    description?: boolean
    price?: boolean
    registration_link?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type event_itemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "date" | "image" | "category" | "description" | "price" | "registration_link" | "createdAt" | "updatedAt", ExtArgs["result"]["event_items"]>

  export type $event_itemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "event_items"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      date: string
      image: string
      category: string
      description: string
      price: string | null
      registration_link: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["event_items"]>
    composites: {}
  }

  type event_itemsGetPayload<S extends boolean | null | undefined | event_itemsDefaultArgs> = $Result.GetResult<Prisma.$event_itemsPayload, S>

  type event_itemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<event_itemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Event_itemsCountAggregateInputType | true
    }

  export interface event_itemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['event_items'], meta: { name: 'event_items' } }
    /**
     * Find zero or one Event_items that matches the filter.
     * @param {event_itemsFindUniqueArgs} args - Arguments to find a Event_items
     * @example
     * // Get one Event_items
     * const event_items = await prisma.event_items.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends event_itemsFindUniqueArgs>(args: SelectSubset<T, event_itemsFindUniqueArgs<ExtArgs>>): Prisma__event_itemsClient<$Result.GetResult<Prisma.$event_itemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event_items that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {event_itemsFindUniqueOrThrowArgs} args - Arguments to find a Event_items
     * @example
     * // Get one Event_items
     * const event_items = await prisma.event_items.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends event_itemsFindUniqueOrThrowArgs>(args: SelectSubset<T, event_itemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__event_itemsClient<$Result.GetResult<Prisma.$event_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {event_itemsFindFirstArgs} args - Arguments to find a Event_items
     * @example
     * // Get one Event_items
     * const event_items = await prisma.event_items.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends event_itemsFindFirstArgs>(args?: SelectSubset<T, event_itemsFindFirstArgs<ExtArgs>>): Prisma__event_itemsClient<$Result.GetResult<Prisma.$event_itemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event_items that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {event_itemsFindFirstOrThrowArgs} args - Arguments to find a Event_items
     * @example
     * // Get one Event_items
     * const event_items = await prisma.event_items.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends event_itemsFindFirstOrThrowArgs>(args?: SelectSubset<T, event_itemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__event_itemsClient<$Result.GetResult<Prisma.$event_itemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Event_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {event_itemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Event_items
     * const event_items = await prisma.event_items.findMany()
     * 
     * // Get first 10 Event_items
     * const event_items = await prisma.event_items.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const event_itemsWithIdOnly = await prisma.event_items.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends event_itemsFindManyArgs>(args?: SelectSubset<T, event_itemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$event_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event_items.
     * @param {event_itemsCreateArgs} args - Arguments to create a Event_items.
     * @example
     * // Create one Event_items
     * const Event_items = await prisma.event_items.create({
     *   data: {
     *     // ... data to create a Event_items
     *   }
     * })
     * 
     */
    create<T extends event_itemsCreateArgs>(args: SelectSubset<T, event_itemsCreateArgs<ExtArgs>>): Prisma__event_itemsClient<$Result.GetResult<Prisma.$event_itemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Event_items.
     * @param {event_itemsCreateManyArgs} args - Arguments to create many Event_items.
     * @example
     * // Create many Event_items
     * const event_items = await prisma.event_items.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends event_itemsCreateManyArgs>(args?: SelectSubset<T, event_itemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Event_items and returns the data saved in the database.
     * @param {event_itemsCreateManyAndReturnArgs} args - Arguments to create many Event_items.
     * @example
     * // Create many Event_items
     * const event_items = await prisma.event_items.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Event_items and only return the `id`
     * const event_itemsWithIdOnly = await prisma.event_items.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends event_itemsCreateManyAndReturnArgs>(args?: SelectSubset<T, event_itemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$event_itemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Event_items.
     * @param {event_itemsDeleteArgs} args - Arguments to delete one Event_items.
     * @example
     * // Delete one Event_items
     * const Event_items = await prisma.event_items.delete({
     *   where: {
     *     // ... filter to delete one Event_items
     *   }
     * })
     * 
     */
    delete<T extends event_itemsDeleteArgs>(args: SelectSubset<T, event_itemsDeleteArgs<ExtArgs>>): Prisma__event_itemsClient<$Result.GetResult<Prisma.$event_itemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event_items.
     * @param {event_itemsUpdateArgs} args - Arguments to update one Event_items.
     * @example
     * // Update one Event_items
     * const event_items = await prisma.event_items.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends event_itemsUpdateArgs>(args: SelectSubset<T, event_itemsUpdateArgs<ExtArgs>>): Prisma__event_itemsClient<$Result.GetResult<Prisma.$event_itemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Event_items.
     * @param {event_itemsDeleteManyArgs} args - Arguments to filter Event_items to delete.
     * @example
     * // Delete a few Event_items
     * const { count } = await prisma.event_items.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends event_itemsDeleteManyArgs>(args?: SelectSubset<T, event_itemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Event_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {event_itemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Event_items
     * const event_items = await prisma.event_items.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends event_itemsUpdateManyArgs>(args: SelectSubset<T, event_itemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Event_items and returns the data updated in the database.
     * @param {event_itemsUpdateManyAndReturnArgs} args - Arguments to update many Event_items.
     * @example
     * // Update many Event_items
     * const event_items = await prisma.event_items.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Event_items and only return the `id`
     * const event_itemsWithIdOnly = await prisma.event_items.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends event_itemsUpdateManyAndReturnArgs>(args: SelectSubset<T, event_itemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$event_itemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Event_items.
     * @param {event_itemsUpsertArgs} args - Arguments to update or create a Event_items.
     * @example
     * // Update or create a Event_items
     * const event_items = await prisma.event_items.upsert({
     *   create: {
     *     // ... data to create a Event_items
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event_items we want to update
     *   }
     * })
     */
    upsert<T extends event_itemsUpsertArgs>(args: SelectSubset<T, event_itemsUpsertArgs<ExtArgs>>): Prisma__event_itemsClient<$Result.GetResult<Prisma.$event_itemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Event_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {event_itemsCountArgs} args - Arguments to filter Event_items to count.
     * @example
     * // Count the number of Event_items
     * const count = await prisma.event_items.count({
     *   where: {
     *     // ... the filter for the Event_items we want to count
     *   }
     * })
    **/
    count<T extends event_itemsCountArgs>(
      args?: Subset<T, event_itemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Event_itemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Event_itemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Event_itemsAggregateArgs>(args: Subset<T, Event_itemsAggregateArgs>): Prisma.PrismaPromise<GetEvent_itemsAggregateType<T>>

    /**
     * Group by Event_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {event_itemsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends event_itemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: event_itemsGroupByArgs['orderBy'] }
        : { orderBy?: event_itemsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, event_itemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEvent_itemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the event_items model
   */
  readonly fields: event_itemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for event_items.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__event_itemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the event_items model
   */
  interface event_itemsFieldRefs {
    readonly id: FieldRef<"event_items", 'String'>
    readonly title: FieldRef<"event_items", 'String'>
    readonly date: FieldRef<"event_items", 'String'>
    readonly image: FieldRef<"event_items", 'String'>
    readonly category: FieldRef<"event_items", 'String'>
    readonly description: FieldRef<"event_items", 'String'>
    readonly price: FieldRef<"event_items", 'String'>
    readonly registration_link: FieldRef<"event_items", 'String'>
    readonly createdAt: FieldRef<"event_items", 'DateTime'>
    readonly updatedAt: FieldRef<"event_items", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * event_items findUnique
   */
  export type event_itemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_items
     */
    select?: event_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the event_items
     */
    omit?: event_itemsOmit<ExtArgs> | null
    /**
     * Filter, which event_items to fetch.
     */
    where: event_itemsWhereUniqueInput
  }

  /**
   * event_items findUniqueOrThrow
   */
  export type event_itemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_items
     */
    select?: event_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the event_items
     */
    omit?: event_itemsOmit<ExtArgs> | null
    /**
     * Filter, which event_items to fetch.
     */
    where: event_itemsWhereUniqueInput
  }

  /**
   * event_items findFirst
   */
  export type event_itemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_items
     */
    select?: event_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the event_items
     */
    omit?: event_itemsOmit<ExtArgs> | null
    /**
     * Filter, which event_items to fetch.
     */
    where?: event_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of event_items to fetch.
     */
    orderBy?: event_itemsOrderByWithRelationInput | event_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for event_items.
     */
    cursor?: event_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` event_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` event_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of event_items.
     */
    distinct?: Event_itemsScalarFieldEnum | Event_itemsScalarFieldEnum[]
  }

  /**
   * event_items findFirstOrThrow
   */
  export type event_itemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_items
     */
    select?: event_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the event_items
     */
    omit?: event_itemsOmit<ExtArgs> | null
    /**
     * Filter, which event_items to fetch.
     */
    where?: event_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of event_items to fetch.
     */
    orderBy?: event_itemsOrderByWithRelationInput | event_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for event_items.
     */
    cursor?: event_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` event_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` event_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of event_items.
     */
    distinct?: Event_itemsScalarFieldEnum | Event_itemsScalarFieldEnum[]
  }

  /**
   * event_items findMany
   */
  export type event_itemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_items
     */
    select?: event_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the event_items
     */
    omit?: event_itemsOmit<ExtArgs> | null
    /**
     * Filter, which event_items to fetch.
     */
    where?: event_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of event_items to fetch.
     */
    orderBy?: event_itemsOrderByWithRelationInput | event_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing event_items.
     */
    cursor?: event_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` event_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` event_items.
     */
    skip?: number
    distinct?: Event_itemsScalarFieldEnum | Event_itemsScalarFieldEnum[]
  }

  /**
   * event_items create
   */
  export type event_itemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_items
     */
    select?: event_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the event_items
     */
    omit?: event_itemsOmit<ExtArgs> | null
    /**
     * The data needed to create a event_items.
     */
    data: XOR<event_itemsCreateInput, event_itemsUncheckedCreateInput>
  }

  /**
   * event_items createMany
   */
  export type event_itemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many event_items.
     */
    data: event_itemsCreateManyInput | event_itemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * event_items createManyAndReturn
   */
  export type event_itemsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_items
     */
    select?: event_itemsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the event_items
     */
    omit?: event_itemsOmit<ExtArgs> | null
    /**
     * The data used to create many event_items.
     */
    data: event_itemsCreateManyInput | event_itemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * event_items update
   */
  export type event_itemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_items
     */
    select?: event_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the event_items
     */
    omit?: event_itemsOmit<ExtArgs> | null
    /**
     * The data needed to update a event_items.
     */
    data: XOR<event_itemsUpdateInput, event_itemsUncheckedUpdateInput>
    /**
     * Choose, which event_items to update.
     */
    where: event_itemsWhereUniqueInput
  }

  /**
   * event_items updateMany
   */
  export type event_itemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update event_items.
     */
    data: XOR<event_itemsUpdateManyMutationInput, event_itemsUncheckedUpdateManyInput>
    /**
     * Filter which event_items to update
     */
    where?: event_itemsWhereInput
    /**
     * Limit how many event_items to update.
     */
    limit?: number
  }

  /**
   * event_items updateManyAndReturn
   */
  export type event_itemsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_items
     */
    select?: event_itemsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the event_items
     */
    omit?: event_itemsOmit<ExtArgs> | null
    /**
     * The data used to update event_items.
     */
    data: XOR<event_itemsUpdateManyMutationInput, event_itemsUncheckedUpdateManyInput>
    /**
     * Filter which event_items to update
     */
    where?: event_itemsWhereInput
    /**
     * Limit how many event_items to update.
     */
    limit?: number
  }

  /**
   * event_items upsert
   */
  export type event_itemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_items
     */
    select?: event_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the event_items
     */
    omit?: event_itemsOmit<ExtArgs> | null
    /**
     * The filter to search for the event_items to update in case it exists.
     */
    where: event_itemsWhereUniqueInput
    /**
     * In case the event_items found by the `where` argument doesn't exist, create a new event_items with this data.
     */
    create: XOR<event_itemsCreateInput, event_itemsUncheckedCreateInput>
    /**
     * In case the event_items was found with the provided `where` argument, update it with this data.
     */
    update: XOR<event_itemsUpdateInput, event_itemsUncheckedUpdateInput>
  }

  /**
   * event_items delete
   */
  export type event_itemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_items
     */
    select?: event_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the event_items
     */
    omit?: event_itemsOmit<ExtArgs> | null
    /**
     * Filter which event_items to delete.
     */
    where: event_itemsWhereUniqueInput
  }

  /**
   * event_items deleteMany
   */
  export type event_itemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which event_items to delete
     */
    where?: event_itemsWhereInput
    /**
     * Limit how many event_items to delete.
     */
    limit?: number
  }

  /**
   * event_items without action
   */
  export type event_itemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_items
     */
    select?: event_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the event_items
     */
    omit?: event_itemsOmit<ExtArgs> | null
  }


  /**
   * Model booking_requests
   */

  export type AggregateBooking_requests = {
    _count: Booking_requestsCountAggregateOutputType | null
    _avg: Booking_requestsAvgAggregateOutputType | null
    _sum: Booking_requestsSumAggregateOutputType | null
    _min: Booking_requestsMinAggregateOutputType | null
    _max: Booking_requestsMaxAggregateOutputType | null
  }

  export type Booking_requestsAvgAggregateOutputType = {
    guests: number | null
  }

  export type Booking_requestsSumAggregateOutputType = {
    guests: number | null
  }

  export type Booking_requestsMinAggregateOutputType = {
    id: string | null
    eventType: string | null
    customEventType: string | null
    date: string | null
    guests: number | null
    name: string | null
    email: string | null
    phone: string | null
    notes: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Booking_requestsMaxAggregateOutputType = {
    id: string | null
    eventType: string | null
    customEventType: string | null
    date: string | null
    guests: number | null
    name: string | null
    email: string | null
    phone: string | null
    notes: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Booking_requestsCountAggregateOutputType = {
    id: number
    eventType: number
    customEventType: number
    date: number
    guests: number
    name: number
    email: number
    phone: number
    notes: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Booking_requestsAvgAggregateInputType = {
    guests?: true
  }

  export type Booking_requestsSumAggregateInputType = {
    guests?: true
  }

  export type Booking_requestsMinAggregateInputType = {
    id?: true
    eventType?: true
    customEventType?: true
    date?: true
    guests?: true
    name?: true
    email?: true
    phone?: true
    notes?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Booking_requestsMaxAggregateInputType = {
    id?: true
    eventType?: true
    customEventType?: true
    date?: true
    guests?: true
    name?: true
    email?: true
    phone?: true
    notes?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Booking_requestsCountAggregateInputType = {
    id?: true
    eventType?: true
    customEventType?: true
    date?: true
    guests?: true
    name?: true
    email?: true
    phone?: true
    notes?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Booking_requestsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which booking_requests to aggregate.
     */
    where?: booking_requestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of booking_requests to fetch.
     */
    orderBy?: booking_requestsOrderByWithRelationInput | booking_requestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: booking_requestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` booking_requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` booking_requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned booking_requests
    **/
    _count?: true | Booking_requestsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Booking_requestsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Booking_requestsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Booking_requestsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Booking_requestsMaxAggregateInputType
  }

  export type GetBooking_requestsAggregateType<T extends Booking_requestsAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking_requests]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking_requests[P]>
      : GetScalarType<T[P], AggregateBooking_requests[P]>
  }




  export type booking_requestsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: booking_requestsWhereInput
    orderBy?: booking_requestsOrderByWithAggregationInput | booking_requestsOrderByWithAggregationInput[]
    by: Booking_requestsScalarFieldEnum[] | Booking_requestsScalarFieldEnum
    having?: booking_requestsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Booking_requestsCountAggregateInputType | true
    _avg?: Booking_requestsAvgAggregateInputType
    _sum?: Booking_requestsSumAggregateInputType
    _min?: Booking_requestsMinAggregateInputType
    _max?: Booking_requestsMaxAggregateInputType
  }

  export type Booking_requestsGroupByOutputType = {
    id: string
    eventType: string
    customEventType: string | null
    date: string
    guests: number
    name: string
    email: string
    phone: string
    notes: string | null
    status: string
    createdAt: Date
    updatedAt: Date
    _count: Booking_requestsCountAggregateOutputType | null
    _avg: Booking_requestsAvgAggregateOutputType | null
    _sum: Booking_requestsSumAggregateOutputType | null
    _min: Booking_requestsMinAggregateOutputType | null
    _max: Booking_requestsMaxAggregateOutputType | null
  }

  type GetBooking_requestsGroupByPayload<T extends booking_requestsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Booking_requestsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Booking_requestsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Booking_requestsGroupByOutputType[P]>
            : GetScalarType<T[P], Booking_requestsGroupByOutputType[P]>
        }
      >
    >


  export type booking_requestsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventType?: boolean
    customEventType?: boolean
    date?: boolean
    guests?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    notes?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["booking_requests"]>

  export type booking_requestsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventType?: boolean
    customEventType?: boolean
    date?: boolean
    guests?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    notes?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["booking_requests"]>

  export type booking_requestsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventType?: boolean
    customEventType?: boolean
    date?: boolean
    guests?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    notes?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["booking_requests"]>

  export type booking_requestsSelectScalar = {
    id?: boolean
    eventType?: boolean
    customEventType?: boolean
    date?: boolean
    guests?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    notes?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type booking_requestsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventType" | "customEventType" | "date" | "guests" | "name" | "email" | "phone" | "notes" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["booking_requests"]>

  export type $booking_requestsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "booking_requests"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eventType: string
      customEventType: string | null
      date: string
      guests: number
      name: string
      email: string
      phone: string
      notes: string | null
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["booking_requests"]>
    composites: {}
  }

  type booking_requestsGetPayload<S extends boolean | null | undefined | booking_requestsDefaultArgs> = $Result.GetResult<Prisma.$booking_requestsPayload, S>

  type booking_requestsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<booking_requestsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Booking_requestsCountAggregateInputType | true
    }

  export interface booking_requestsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['booking_requests'], meta: { name: 'booking_requests' } }
    /**
     * Find zero or one Booking_requests that matches the filter.
     * @param {booking_requestsFindUniqueArgs} args - Arguments to find a Booking_requests
     * @example
     * // Get one Booking_requests
     * const booking_requests = await prisma.booking_requests.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends booking_requestsFindUniqueArgs>(args: SelectSubset<T, booking_requestsFindUniqueArgs<ExtArgs>>): Prisma__booking_requestsClient<$Result.GetResult<Prisma.$booking_requestsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booking_requests that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {booking_requestsFindUniqueOrThrowArgs} args - Arguments to find a Booking_requests
     * @example
     * // Get one Booking_requests
     * const booking_requests = await prisma.booking_requests.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends booking_requestsFindUniqueOrThrowArgs>(args: SelectSubset<T, booking_requestsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__booking_requestsClient<$Result.GetResult<Prisma.$booking_requestsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking_requests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {booking_requestsFindFirstArgs} args - Arguments to find a Booking_requests
     * @example
     * // Get one Booking_requests
     * const booking_requests = await prisma.booking_requests.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends booking_requestsFindFirstArgs>(args?: SelectSubset<T, booking_requestsFindFirstArgs<ExtArgs>>): Prisma__booking_requestsClient<$Result.GetResult<Prisma.$booking_requestsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking_requests that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {booking_requestsFindFirstOrThrowArgs} args - Arguments to find a Booking_requests
     * @example
     * // Get one Booking_requests
     * const booking_requests = await prisma.booking_requests.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends booking_requestsFindFirstOrThrowArgs>(args?: SelectSubset<T, booking_requestsFindFirstOrThrowArgs<ExtArgs>>): Prisma__booking_requestsClient<$Result.GetResult<Prisma.$booking_requestsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Booking_requests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {booking_requestsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Booking_requests
     * const booking_requests = await prisma.booking_requests.findMany()
     * 
     * // Get first 10 Booking_requests
     * const booking_requests = await prisma.booking_requests.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const booking_requestsWithIdOnly = await prisma.booking_requests.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends booking_requestsFindManyArgs>(args?: SelectSubset<T, booking_requestsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$booking_requestsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booking_requests.
     * @param {booking_requestsCreateArgs} args - Arguments to create a Booking_requests.
     * @example
     * // Create one Booking_requests
     * const Booking_requests = await prisma.booking_requests.create({
     *   data: {
     *     // ... data to create a Booking_requests
     *   }
     * })
     * 
     */
    create<T extends booking_requestsCreateArgs>(args: SelectSubset<T, booking_requestsCreateArgs<ExtArgs>>): Prisma__booking_requestsClient<$Result.GetResult<Prisma.$booking_requestsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Booking_requests.
     * @param {booking_requestsCreateManyArgs} args - Arguments to create many Booking_requests.
     * @example
     * // Create many Booking_requests
     * const booking_requests = await prisma.booking_requests.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends booking_requestsCreateManyArgs>(args?: SelectSubset<T, booking_requestsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Booking_requests and returns the data saved in the database.
     * @param {booking_requestsCreateManyAndReturnArgs} args - Arguments to create many Booking_requests.
     * @example
     * // Create many Booking_requests
     * const booking_requests = await prisma.booking_requests.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Booking_requests and only return the `id`
     * const booking_requestsWithIdOnly = await prisma.booking_requests.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends booking_requestsCreateManyAndReturnArgs>(args?: SelectSubset<T, booking_requestsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$booking_requestsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Booking_requests.
     * @param {booking_requestsDeleteArgs} args - Arguments to delete one Booking_requests.
     * @example
     * // Delete one Booking_requests
     * const Booking_requests = await prisma.booking_requests.delete({
     *   where: {
     *     // ... filter to delete one Booking_requests
     *   }
     * })
     * 
     */
    delete<T extends booking_requestsDeleteArgs>(args: SelectSubset<T, booking_requestsDeleteArgs<ExtArgs>>): Prisma__booking_requestsClient<$Result.GetResult<Prisma.$booking_requestsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booking_requests.
     * @param {booking_requestsUpdateArgs} args - Arguments to update one Booking_requests.
     * @example
     * // Update one Booking_requests
     * const booking_requests = await prisma.booking_requests.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends booking_requestsUpdateArgs>(args: SelectSubset<T, booking_requestsUpdateArgs<ExtArgs>>): Prisma__booking_requestsClient<$Result.GetResult<Prisma.$booking_requestsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Booking_requests.
     * @param {booking_requestsDeleteManyArgs} args - Arguments to filter Booking_requests to delete.
     * @example
     * // Delete a few Booking_requests
     * const { count } = await prisma.booking_requests.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends booking_requestsDeleteManyArgs>(args?: SelectSubset<T, booking_requestsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Booking_requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {booking_requestsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Booking_requests
     * const booking_requests = await prisma.booking_requests.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends booking_requestsUpdateManyArgs>(args: SelectSubset<T, booking_requestsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Booking_requests and returns the data updated in the database.
     * @param {booking_requestsUpdateManyAndReturnArgs} args - Arguments to update many Booking_requests.
     * @example
     * // Update many Booking_requests
     * const booking_requests = await prisma.booking_requests.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Booking_requests and only return the `id`
     * const booking_requestsWithIdOnly = await prisma.booking_requests.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends booking_requestsUpdateManyAndReturnArgs>(args: SelectSubset<T, booking_requestsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$booking_requestsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Booking_requests.
     * @param {booking_requestsUpsertArgs} args - Arguments to update or create a Booking_requests.
     * @example
     * // Update or create a Booking_requests
     * const booking_requests = await prisma.booking_requests.upsert({
     *   create: {
     *     // ... data to create a Booking_requests
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking_requests we want to update
     *   }
     * })
     */
    upsert<T extends booking_requestsUpsertArgs>(args: SelectSubset<T, booking_requestsUpsertArgs<ExtArgs>>): Prisma__booking_requestsClient<$Result.GetResult<Prisma.$booking_requestsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Booking_requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {booking_requestsCountArgs} args - Arguments to filter Booking_requests to count.
     * @example
     * // Count the number of Booking_requests
     * const count = await prisma.booking_requests.count({
     *   where: {
     *     // ... the filter for the Booking_requests we want to count
     *   }
     * })
    **/
    count<T extends booking_requestsCountArgs>(
      args?: Subset<T, booking_requestsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Booking_requestsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking_requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Booking_requestsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Booking_requestsAggregateArgs>(args: Subset<T, Booking_requestsAggregateArgs>): Prisma.PrismaPromise<GetBooking_requestsAggregateType<T>>

    /**
     * Group by Booking_requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {booking_requestsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends booking_requestsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: booking_requestsGroupByArgs['orderBy'] }
        : { orderBy?: booking_requestsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, booking_requestsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBooking_requestsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the booking_requests model
   */
  readonly fields: booking_requestsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for booking_requests.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__booking_requestsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the booking_requests model
   */
  interface booking_requestsFieldRefs {
    readonly id: FieldRef<"booking_requests", 'String'>
    readonly eventType: FieldRef<"booking_requests", 'String'>
    readonly customEventType: FieldRef<"booking_requests", 'String'>
    readonly date: FieldRef<"booking_requests", 'String'>
    readonly guests: FieldRef<"booking_requests", 'Int'>
    readonly name: FieldRef<"booking_requests", 'String'>
    readonly email: FieldRef<"booking_requests", 'String'>
    readonly phone: FieldRef<"booking_requests", 'String'>
    readonly notes: FieldRef<"booking_requests", 'String'>
    readonly status: FieldRef<"booking_requests", 'String'>
    readonly createdAt: FieldRef<"booking_requests", 'DateTime'>
    readonly updatedAt: FieldRef<"booking_requests", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * booking_requests findUnique
   */
  export type booking_requestsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking_requests
     */
    select?: booking_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking_requests
     */
    omit?: booking_requestsOmit<ExtArgs> | null
    /**
     * Filter, which booking_requests to fetch.
     */
    where: booking_requestsWhereUniqueInput
  }

  /**
   * booking_requests findUniqueOrThrow
   */
  export type booking_requestsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking_requests
     */
    select?: booking_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking_requests
     */
    omit?: booking_requestsOmit<ExtArgs> | null
    /**
     * Filter, which booking_requests to fetch.
     */
    where: booking_requestsWhereUniqueInput
  }

  /**
   * booking_requests findFirst
   */
  export type booking_requestsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking_requests
     */
    select?: booking_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking_requests
     */
    omit?: booking_requestsOmit<ExtArgs> | null
    /**
     * Filter, which booking_requests to fetch.
     */
    where?: booking_requestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of booking_requests to fetch.
     */
    orderBy?: booking_requestsOrderByWithRelationInput | booking_requestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for booking_requests.
     */
    cursor?: booking_requestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` booking_requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` booking_requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of booking_requests.
     */
    distinct?: Booking_requestsScalarFieldEnum | Booking_requestsScalarFieldEnum[]
  }

  /**
   * booking_requests findFirstOrThrow
   */
  export type booking_requestsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking_requests
     */
    select?: booking_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking_requests
     */
    omit?: booking_requestsOmit<ExtArgs> | null
    /**
     * Filter, which booking_requests to fetch.
     */
    where?: booking_requestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of booking_requests to fetch.
     */
    orderBy?: booking_requestsOrderByWithRelationInput | booking_requestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for booking_requests.
     */
    cursor?: booking_requestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` booking_requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` booking_requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of booking_requests.
     */
    distinct?: Booking_requestsScalarFieldEnum | Booking_requestsScalarFieldEnum[]
  }

  /**
   * booking_requests findMany
   */
  export type booking_requestsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking_requests
     */
    select?: booking_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking_requests
     */
    omit?: booking_requestsOmit<ExtArgs> | null
    /**
     * Filter, which booking_requests to fetch.
     */
    where?: booking_requestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of booking_requests to fetch.
     */
    orderBy?: booking_requestsOrderByWithRelationInput | booking_requestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing booking_requests.
     */
    cursor?: booking_requestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` booking_requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` booking_requests.
     */
    skip?: number
    distinct?: Booking_requestsScalarFieldEnum | Booking_requestsScalarFieldEnum[]
  }

  /**
   * booking_requests create
   */
  export type booking_requestsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking_requests
     */
    select?: booking_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking_requests
     */
    omit?: booking_requestsOmit<ExtArgs> | null
    /**
     * The data needed to create a booking_requests.
     */
    data: XOR<booking_requestsCreateInput, booking_requestsUncheckedCreateInput>
  }

  /**
   * booking_requests createMany
   */
  export type booking_requestsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many booking_requests.
     */
    data: booking_requestsCreateManyInput | booking_requestsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * booking_requests createManyAndReturn
   */
  export type booking_requestsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking_requests
     */
    select?: booking_requestsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the booking_requests
     */
    omit?: booking_requestsOmit<ExtArgs> | null
    /**
     * The data used to create many booking_requests.
     */
    data: booking_requestsCreateManyInput | booking_requestsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * booking_requests update
   */
  export type booking_requestsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking_requests
     */
    select?: booking_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking_requests
     */
    omit?: booking_requestsOmit<ExtArgs> | null
    /**
     * The data needed to update a booking_requests.
     */
    data: XOR<booking_requestsUpdateInput, booking_requestsUncheckedUpdateInput>
    /**
     * Choose, which booking_requests to update.
     */
    where: booking_requestsWhereUniqueInput
  }

  /**
   * booking_requests updateMany
   */
  export type booking_requestsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update booking_requests.
     */
    data: XOR<booking_requestsUpdateManyMutationInput, booking_requestsUncheckedUpdateManyInput>
    /**
     * Filter which booking_requests to update
     */
    where?: booking_requestsWhereInput
    /**
     * Limit how many booking_requests to update.
     */
    limit?: number
  }

  /**
   * booking_requests updateManyAndReturn
   */
  export type booking_requestsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking_requests
     */
    select?: booking_requestsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the booking_requests
     */
    omit?: booking_requestsOmit<ExtArgs> | null
    /**
     * The data used to update booking_requests.
     */
    data: XOR<booking_requestsUpdateManyMutationInput, booking_requestsUncheckedUpdateManyInput>
    /**
     * Filter which booking_requests to update
     */
    where?: booking_requestsWhereInput
    /**
     * Limit how many booking_requests to update.
     */
    limit?: number
  }

  /**
   * booking_requests upsert
   */
  export type booking_requestsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking_requests
     */
    select?: booking_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking_requests
     */
    omit?: booking_requestsOmit<ExtArgs> | null
    /**
     * The filter to search for the booking_requests to update in case it exists.
     */
    where: booking_requestsWhereUniqueInput
    /**
     * In case the booking_requests found by the `where` argument doesn't exist, create a new booking_requests with this data.
     */
    create: XOR<booking_requestsCreateInput, booking_requestsUncheckedCreateInput>
    /**
     * In case the booking_requests was found with the provided `where` argument, update it with this data.
     */
    update: XOR<booking_requestsUpdateInput, booking_requestsUncheckedUpdateInput>
  }

  /**
   * booking_requests delete
   */
  export type booking_requestsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking_requests
     */
    select?: booking_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking_requests
     */
    omit?: booking_requestsOmit<ExtArgs> | null
    /**
     * Filter which booking_requests to delete.
     */
    where: booking_requestsWhereUniqueInput
  }

  /**
   * booking_requests deleteMany
   */
  export type booking_requestsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which booking_requests to delete
     */
    where?: booking_requestsWhereInput
    /**
     * Limit how many booking_requests to delete.
     */
    limit?: number
  }

  /**
   * booking_requests without action
   */
  export type booking_requestsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the booking_requests
     */
    select?: booking_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the booking_requests
     */
    omit?: booking_requestsOmit<ExtArgs> | null
  }


  /**
   * Model contact_messages
   */

  export type AggregateContact_messages = {
    _count: Contact_messagesCountAggregateOutputType | null
    _min: Contact_messagesMinAggregateOutputType | null
    _max: Contact_messagesMaxAggregateOutputType | null
  }

  export type Contact_messagesMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    message: string | null
    date: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Contact_messagesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    message: string | null
    date: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Contact_messagesCountAggregateOutputType = {
    id: number
    name: number
    email: number
    message: number
    date: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Contact_messagesMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    message?: true
    date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Contact_messagesMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    message?: true
    date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Contact_messagesCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    message?: true
    date?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Contact_messagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which contact_messages to aggregate.
     */
    where?: contact_messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contact_messages to fetch.
     */
    orderBy?: contact_messagesOrderByWithRelationInput | contact_messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: contact_messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contact_messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contact_messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned contact_messages
    **/
    _count?: true | Contact_messagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Contact_messagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Contact_messagesMaxAggregateInputType
  }

  export type GetContact_messagesAggregateType<T extends Contact_messagesAggregateArgs> = {
        [P in keyof T & keyof AggregateContact_messages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContact_messages[P]>
      : GetScalarType<T[P], AggregateContact_messages[P]>
  }




  export type contact_messagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: contact_messagesWhereInput
    orderBy?: contact_messagesOrderByWithAggregationInput | contact_messagesOrderByWithAggregationInput[]
    by: Contact_messagesScalarFieldEnum[] | Contact_messagesScalarFieldEnum
    having?: contact_messagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Contact_messagesCountAggregateInputType | true
    _min?: Contact_messagesMinAggregateInputType
    _max?: Contact_messagesMaxAggregateInputType
  }

  export type Contact_messagesGroupByOutputType = {
    id: string
    name: string
    email: string
    message: string
    date: string
    createdAt: Date
    updatedAt: Date
    _count: Contact_messagesCountAggregateOutputType | null
    _min: Contact_messagesMinAggregateOutputType | null
    _max: Contact_messagesMaxAggregateOutputType | null
  }

  type GetContact_messagesGroupByPayload<T extends contact_messagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Contact_messagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Contact_messagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Contact_messagesGroupByOutputType[P]>
            : GetScalarType<T[P], Contact_messagesGroupByOutputType[P]>
        }
      >
    >


  export type contact_messagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    message?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contact_messages"]>

  export type contact_messagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    message?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contact_messages"]>

  export type contact_messagesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    message?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contact_messages"]>

  export type contact_messagesSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    message?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type contact_messagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "message" | "date" | "createdAt" | "updatedAt", ExtArgs["result"]["contact_messages"]>

  export type $contact_messagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "contact_messages"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      message: string
      date: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contact_messages"]>
    composites: {}
  }

  type contact_messagesGetPayload<S extends boolean | null | undefined | contact_messagesDefaultArgs> = $Result.GetResult<Prisma.$contact_messagesPayload, S>

  type contact_messagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<contact_messagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Contact_messagesCountAggregateInputType | true
    }

  export interface contact_messagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['contact_messages'], meta: { name: 'contact_messages' } }
    /**
     * Find zero or one Contact_messages that matches the filter.
     * @param {contact_messagesFindUniqueArgs} args - Arguments to find a Contact_messages
     * @example
     * // Get one Contact_messages
     * const contact_messages = await prisma.contact_messages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends contact_messagesFindUniqueArgs>(args: SelectSubset<T, contact_messagesFindUniqueArgs<ExtArgs>>): Prisma__contact_messagesClient<$Result.GetResult<Prisma.$contact_messagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contact_messages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {contact_messagesFindUniqueOrThrowArgs} args - Arguments to find a Contact_messages
     * @example
     * // Get one Contact_messages
     * const contact_messages = await prisma.contact_messages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends contact_messagesFindUniqueOrThrowArgs>(args: SelectSubset<T, contact_messagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__contact_messagesClient<$Result.GetResult<Prisma.$contact_messagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contact_messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contact_messagesFindFirstArgs} args - Arguments to find a Contact_messages
     * @example
     * // Get one Contact_messages
     * const contact_messages = await prisma.contact_messages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends contact_messagesFindFirstArgs>(args?: SelectSubset<T, contact_messagesFindFirstArgs<ExtArgs>>): Prisma__contact_messagesClient<$Result.GetResult<Prisma.$contact_messagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contact_messages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contact_messagesFindFirstOrThrowArgs} args - Arguments to find a Contact_messages
     * @example
     * // Get one Contact_messages
     * const contact_messages = await prisma.contact_messages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends contact_messagesFindFirstOrThrowArgs>(args?: SelectSubset<T, contact_messagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__contact_messagesClient<$Result.GetResult<Prisma.$contact_messagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contact_messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contact_messagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contact_messages
     * const contact_messages = await prisma.contact_messages.findMany()
     * 
     * // Get first 10 Contact_messages
     * const contact_messages = await prisma.contact_messages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contact_messagesWithIdOnly = await prisma.contact_messages.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends contact_messagesFindManyArgs>(args?: SelectSubset<T, contact_messagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contact_messagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contact_messages.
     * @param {contact_messagesCreateArgs} args - Arguments to create a Contact_messages.
     * @example
     * // Create one Contact_messages
     * const Contact_messages = await prisma.contact_messages.create({
     *   data: {
     *     // ... data to create a Contact_messages
     *   }
     * })
     * 
     */
    create<T extends contact_messagesCreateArgs>(args: SelectSubset<T, contact_messagesCreateArgs<ExtArgs>>): Prisma__contact_messagesClient<$Result.GetResult<Prisma.$contact_messagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contact_messages.
     * @param {contact_messagesCreateManyArgs} args - Arguments to create many Contact_messages.
     * @example
     * // Create many Contact_messages
     * const contact_messages = await prisma.contact_messages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends contact_messagesCreateManyArgs>(args?: SelectSubset<T, contact_messagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contact_messages and returns the data saved in the database.
     * @param {contact_messagesCreateManyAndReturnArgs} args - Arguments to create many Contact_messages.
     * @example
     * // Create many Contact_messages
     * const contact_messages = await prisma.contact_messages.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contact_messages and only return the `id`
     * const contact_messagesWithIdOnly = await prisma.contact_messages.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends contact_messagesCreateManyAndReturnArgs>(args?: SelectSubset<T, contact_messagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contact_messagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contact_messages.
     * @param {contact_messagesDeleteArgs} args - Arguments to delete one Contact_messages.
     * @example
     * // Delete one Contact_messages
     * const Contact_messages = await prisma.contact_messages.delete({
     *   where: {
     *     // ... filter to delete one Contact_messages
     *   }
     * })
     * 
     */
    delete<T extends contact_messagesDeleteArgs>(args: SelectSubset<T, contact_messagesDeleteArgs<ExtArgs>>): Prisma__contact_messagesClient<$Result.GetResult<Prisma.$contact_messagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contact_messages.
     * @param {contact_messagesUpdateArgs} args - Arguments to update one Contact_messages.
     * @example
     * // Update one Contact_messages
     * const contact_messages = await prisma.contact_messages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends contact_messagesUpdateArgs>(args: SelectSubset<T, contact_messagesUpdateArgs<ExtArgs>>): Prisma__contact_messagesClient<$Result.GetResult<Prisma.$contact_messagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contact_messages.
     * @param {contact_messagesDeleteManyArgs} args - Arguments to filter Contact_messages to delete.
     * @example
     * // Delete a few Contact_messages
     * const { count } = await prisma.contact_messages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends contact_messagesDeleteManyArgs>(args?: SelectSubset<T, contact_messagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contact_messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contact_messagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contact_messages
     * const contact_messages = await prisma.contact_messages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends contact_messagesUpdateManyArgs>(args: SelectSubset<T, contact_messagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contact_messages and returns the data updated in the database.
     * @param {contact_messagesUpdateManyAndReturnArgs} args - Arguments to update many Contact_messages.
     * @example
     * // Update many Contact_messages
     * const contact_messages = await prisma.contact_messages.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contact_messages and only return the `id`
     * const contact_messagesWithIdOnly = await prisma.contact_messages.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends contact_messagesUpdateManyAndReturnArgs>(args: SelectSubset<T, contact_messagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contact_messagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contact_messages.
     * @param {contact_messagesUpsertArgs} args - Arguments to update or create a Contact_messages.
     * @example
     * // Update or create a Contact_messages
     * const contact_messages = await prisma.contact_messages.upsert({
     *   create: {
     *     // ... data to create a Contact_messages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contact_messages we want to update
     *   }
     * })
     */
    upsert<T extends contact_messagesUpsertArgs>(args: SelectSubset<T, contact_messagesUpsertArgs<ExtArgs>>): Prisma__contact_messagesClient<$Result.GetResult<Prisma.$contact_messagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contact_messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contact_messagesCountArgs} args - Arguments to filter Contact_messages to count.
     * @example
     * // Count the number of Contact_messages
     * const count = await prisma.contact_messages.count({
     *   where: {
     *     // ... the filter for the Contact_messages we want to count
     *   }
     * })
    **/
    count<T extends contact_messagesCountArgs>(
      args?: Subset<T, contact_messagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Contact_messagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contact_messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Contact_messagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Contact_messagesAggregateArgs>(args: Subset<T, Contact_messagesAggregateArgs>): Prisma.PrismaPromise<GetContact_messagesAggregateType<T>>

    /**
     * Group by Contact_messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contact_messagesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends contact_messagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: contact_messagesGroupByArgs['orderBy'] }
        : { orderBy?: contact_messagesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, contact_messagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContact_messagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the contact_messages model
   */
  readonly fields: contact_messagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for contact_messages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__contact_messagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the contact_messages model
   */
  interface contact_messagesFieldRefs {
    readonly id: FieldRef<"contact_messages", 'String'>
    readonly name: FieldRef<"contact_messages", 'String'>
    readonly email: FieldRef<"contact_messages", 'String'>
    readonly message: FieldRef<"contact_messages", 'String'>
    readonly date: FieldRef<"contact_messages", 'String'>
    readonly createdAt: FieldRef<"contact_messages", 'DateTime'>
    readonly updatedAt: FieldRef<"contact_messages", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * contact_messages findUnique
   */
  export type contact_messagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact_messages
     */
    select?: contact_messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contact_messages
     */
    omit?: contact_messagesOmit<ExtArgs> | null
    /**
     * Filter, which contact_messages to fetch.
     */
    where: contact_messagesWhereUniqueInput
  }

  /**
   * contact_messages findUniqueOrThrow
   */
  export type contact_messagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact_messages
     */
    select?: contact_messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contact_messages
     */
    omit?: contact_messagesOmit<ExtArgs> | null
    /**
     * Filter, which contact_messages to fetch.
     */
    where: contact_messagesWhereUniqueInput
  }

  /**
   * contact_messages findFirst
   */
  export type contact_messagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact_messages
     */
    select?: contact_messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contact_messages
     */
    omit?: contact_messagesOmit<ExtArgs> | null
    /**
     * Filter, which contact_messages to fetch.
     */
    where?: contact_messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contact_messages to fetch.
     */
    orderBy?: contact_messagesOrderByWithRelationInput | contact_messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for contact_messages.
     */
    cursor?: contact_messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contact_messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contact_messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of contact_messages.
     */
    distinct?: Contact_messagesScalarFieldEnum | Contact_messagesScalarFieldEnum[]
  }

  /**
   * contact_messages findFirstOrThrow
   */
  export type contact_messagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact_messages
     */
    select?: contact_messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contact_messages
     */
    omit?: contact_messagesOmit<ExtArgs> | null
    /**
     * Filter, which contact_messages to fetch.
     */
    where?: contact_messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contact_messages to fetch.
     */
    orderBy?: contact_messagesOrderByWithRelationInput | contact_messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for contact_messages.
     */
    cursor?: contact_messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contact_messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contact_messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of contact_messages.
     */
    distinct?: Contact_messagesScalarFieldEnum | Contact_messagesScalarFieldEnum[]
  }

  /**
   * contact_messages findMany
   */
  export type contact_messagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact_messages
     */
    select?: contact_messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contact_messages
     */
    omit?: contact_messagesOmit<ExtArgs> | null
    /**
     * Filter, which contact_messages to fetch.
     */
    where?: contact_messagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contact_messages to fetch.
     */
    orderBy?: contact_messagesOrderByWithRelationInput | contact_messagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing contact_messages.
     */
    cursor?: contact_messagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contact_messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contact_messages.
     */
    skip?: number
    distinct?: Contact_messagesScalarFieldEnum | Contact_messagesScalarFieldEnum[]
  }

  /**
   * contact_messages create
   */
  export type contact_messagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact_messages
     */
    select?: contact_messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contact_messages
     */
    omit?: contact_messagesOmit<ExtArgs> | null
    /**
     * The data needed to create a contact_messages.
     */
    data: XOR<contact_messagesCreateInput, contact_messagesUncheckedCreateInput>
  }

  /**
   * contact_messages createMany
   */
  export type contact_messagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many contact_messages.
     */
    data: contact_messagesCreateManyInput | contact_messagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * contact_messages createManyAndReturn
   */
  export type contact_messagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact_messages
     */
    select?: contact_messagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the contact_messages
     */
    omit?: contact_messagesOmit<ExtArgs> | null
    /**
     * The data used to create many contact_messages.
     */
    data: contact_messagesCreateManyInput | contact_messagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * contact_messages update
   */
  export type contact_messagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact_messages
     */
    select?: contact_messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contact_messages
     */
    omit?: contact_messagesOmit<ExtArgs> | null
    /**
     * The data needed to update a contact_messages.
     */
    data: XOR<contact_messagesUpdateInput, contact_messagesUncheckedUpdateInput>
    /**
     * Choose, which contact_messages to update.
     */
    where: contact_messagesWhereUniqueInput
  }

  /**
   * contact_messages updateMany
   */
  export type contact_messagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update contact_messages.
     */
    data: XOR<contact_messagesUpdateManyMutationInput, contact_messagesUncheckedUpdateManyInput>
    /**
     * Filter which contact_messages to update
     */
    where?: contact_messagesWhereInput
    /**
     * Limit how many contact_messages to update.
     */
    limit?: number
  }

  /**
   * contact_messages updateManyAndReturn
   */
  export type contact_messagesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact_messages
     */
    select?: contact_messagesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the contact_messages
     */
    omit?: contact_messagesOmit<ExtArgs> | null
    /**
     * The data used to update contact_messages.
     */
    data: XOR<contact_messagesUpdateManyMutationInput, contact_messagesUncheckedUpdateManyInput>
    /**
     * Filter which contact_messages to update
     */
    where?: contact_messagesWhereInput
    /**
     * Limit how many contact_messages to update.
     */
    limit?: number
  }

  /**
   * contact_messages upsert
   */
  export type contact_messagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact_messages
     */
    select?: contact_messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contact_messages
     */
    omit?: contact_messagesOmit<ExtArgs> | null
    /**
     * The filter to search for the contact_messages to update in case it exists.
     */
    where: contact_messagesWhereUniqueInput
    /**
     * In case the contact_messages found by the `where` argument doesn't exist, create a new contact_messages with this data.
     */
    create: XOR<contact_messagesCreateInput, contact_messagesUncheckedCreateInput>
    /**
     * In case the contact_messages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<contact_messagesUpdateInput, contact_messagesUncheckedUpdateInput>
  }

  /**
   * contact_messages delete
   */
  export type contact_messagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact_messages
     */
    select?: contact_messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contact_messages
     */
    omit?: contact_messagesOmit<ExtArgs> | null
    /**
     * Filter which contact_messages to delete.
     */
    where: contact_messagesWhereUniqueInput
  }

  /**
   * contact_messages deleteMany
   */
  export type contact_messagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which contact_messages to delete
     */
    where?: contact_messagesWhereInput
    /**
     * Limit how many contact_messages to delete.
     */
    limit?: number
  }

  /**
   * contact_messages without action
   */
  export type contact_messagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact_messages
     */
    select?: contact_messagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contact_messages
     */
    omit?: contact_messagesOmit<ExtArgs> | null
  }


  /**
   * Model admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admin to aggregate.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type adminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: adminWhereInput
    orderBy?: adminOrderByWithAggregationInput | adminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: adminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends adminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type adminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type adminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type adminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type adminSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type adminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["admin"]>

  export type $adminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type adminGetPayload<S extends boolean | null | undefined | adminDefaultArgs> = $Result.GetResult<Prisma.$adminPayload, S>

  type adminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<adminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface adminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['admin'], meta: { name: 'admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {adminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends adminFindUniqueArgs>(args: SelectSubset<T, adminFindUniqueArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {adminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends adminFindUniqueOrThrowArgs>(args: SelectSubset<T, adminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends adminFindFirstArgs>(args?: SelectSubset<T, adminFindFirstArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends adminFindFirstOrThrowArgs>(args?: SelectSubset<T, adminFindFirstOrThrowArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends adminFindManyArgs>(args?: SelectSubset<T, adminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {adminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends adminCreateArgs>(args: SelectSubset<T, adminCreateArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {adminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends adminCreateManyArgs>(args?: SelectSubset<T, adminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {adminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends adminCreateManyAndReturnArgs>(args?: SelectSubset<T, adminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin.
     * @param {adminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends adminDeleteArgs>(args: SelectSubset<T, adminDeleteArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {adminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends adminUpdateArgs>(args: SelectSubset<T, adminUpdateArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {adminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends adminDeleteManyArgs>(args?: SelectSubset<T, adminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends adminUpdateManyArgs>(args: SelectSubset<T, adminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {adminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends adminUpdateManyAndReturnArgs>(args: SelectSubset<T, adminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin.
     * @param {adminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends adminUpsertArgs>(args: SelectSubset<T, adminUpsertArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends adminCountArgs>(
      args?: Subset<T, adminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends adminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: adminGroupByArgs['orderBy'] }
        : { orderBy?: adminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, adminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the admin model
   */
  readonly fields: adminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__adminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the admin model
   */
  interface adminFieldRefs {
    readonly id: FieldRef<"admin", 'String'>
    readonly name: FieldRef<"admin", 'String'>
    readonly email: FieldRef<"admin", 'String'>
    readonly password: FieldRef<"admin", 'String'>
    readonly createdAt: FieldRef<"admin", 'DateTime'>
    readonly updatedAt: FieldRef<"admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * admin findUnique
   */
  export type adminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin findUniqueOrThrow
   */
  export type adminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin findFirst
   */
  export type adminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin findFirstOrThrow
   */
  export type adminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin findMany
   */
  export type adminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter, which admins to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin create
   */
  export type adminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * The data needed to create a admin.
     */
    data: XOR<adminCreateInput, adminUncheckedCreateInput>
  }

  /**
   * admin createMany
   */
  export type adminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many admins.
     */
    data: adminCreateManyInput | adminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * admin createManyAndReturn
   */
  export type adminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * The data used to create many admins.
     */
    data: adminCreateManyInput | adminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * admin update
   */
  export type adminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * The data needed to update a admin.
     */
    data: XOR<adminUpdateInput, adminUncheckedUpdateInput>
    /**
     * Choose, which admin to update.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin updateMany
   */
  export type adminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update admins.
     */
    data: XOR<adminUpdateManyMutationInput, adminUncheckedUpdateManyInput>
    /**
     * Filter which admins to update
     */
    where?: adminWhereInput
    /**
     * Limit how many admins to update.
     */
    limit?: number
  }

  /**
   * admin updateManyAndReturn
   */
  export type adminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * The data used to update admins.
     */
    data: XOR<adminUpdateManyMutationInput, adminUncheckedUpdateManyInput>
    /**
     * Filter which admins to update
     */
    where?: adminWhereInput
    /**
     * Limit how many admins to update.
     */
    limit?: number
  }

  /**
   * admin upsert
   */
  export type adminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * The filter to search for the admin to update in case it exists.
     */
    where: adminWhereUniqueInput
    /**
     * In case the admin found by the `where` argument doesn't exist, create a new admin with this data.
     */
    create: XOR<adminCreateInput, adminUncheckedCreateInput>
    /**
     * In case the admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<adminUpdateInput, adminUncheckedUpdateInput>
  }

  /**
   * admin delete
   */
  export type adminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Filter which admin to delete.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin deleteMany
   */
  export type adminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admins to delete
     */
    where?: adminWhereInput
    /**
     * Limit how many admins to delete.
     */
    limit?: number
  }

  /**
   * admin without action
   */
  export type adminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Event_itemsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    date: 'date',
    image: 'image',
    category: 'category',
    description: 'description',
    price: 'price',
    registration_link: 'registration_link',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Event_itemsScalarFieldEnum = (typeof Event_itemsScalarFieldEnum)[keyof typeof Event_itemsScalarFieldEnum]


  export const Booking_requestsScalarFieldEnum: {
    id: 'id',
    eventType: 'eventType',
    customEventType: 'customEventType',
    date: 'date',
    guests: 'guests',
    name: 'name',
    email: 'email',
    phone: 'phone',
    notes: 'notes',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Booking_requestsScalarFieldEnum = (typeof Booking_requestsScalarFieldEnum)[keyof typeof Booking_requestsScalarFieldEnum]


  export const Contact_messagesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    message: 'message',
    date: 'date',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Contact_messagesScalarFieldEnum = (typeof Contact_messagesScalarFieldEnum)[keyof typeof Contact_messagesScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type event_itemsWhereInput = {
    AND?: event_itemsWhereInput | event_itemsWhereInput[]
    OR?: event_itemsWhereInput[]
    NOT?: event_itemsWhereInput | event_itemsWhereInput[]
    id?: StringFilter<"event_items"> | string
    title?: StringFilter<"event_items"> | string
    date?: StringFilter<"event_items"> | string
    image?: StringFilter<"event_items"> | string
    category?: StringFilter<"event_items"> | string
    description?: StringFilter<"event_items"> | string
    price?: StringNullableFilter<"event_items"> | string | null
    registration_link?: StringNullableFilter<"event_items"> | string | null
    createdAt?: DateTimeFilter<"event_items"> | Date | string
    updatedAt?: DateTimeFilter<"event_items"> | Date | string
  }

  export type event_itemsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    image?: SortOrder
    category?: SortOrder
    description?: SortOrder
    price?: SortOrderInput | SortOrder
    registration_link?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type event_itemsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: event_itemsWhereInput | event_itemsWhereInput[]
    OR?: event_itemsWhereInput[]
    NOT?: event_itemsWhereInput | event_itemsWhereInput[]
    title?: StringFilter<"event_items"> | string
    date?: StringFilter<"event_items"> | string
    image?: StringFilter<"event_items"> | string
    category?: StringFilter<"event_items"> | string
    description?: StringFilter<"event_items"> | string
    price?: StringNullableFilter<"event_items"> | string | null
    registration_link?: StringNullableFilter<"event_items"> | string | null
    createdAt?: DateTimeFilter<"event_items"> | Date | string
    updatedAt?: DateTimeFilter<"event_items"> | Date | string
  }, "id">

  export type event_itemsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    image?: SortOrder
    category?: SortOrder
    description?: SortOrder
    price?: SortOrderInput | SortOrder
    registration_link?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: event_itemsCountOrderByAggregateInput
    _max?: event_itemsMaxOrderByAggregateInput
    _min?: event_itemsMinOrderByAggregateInput
  }

  export type event_itemsScalarWhereWithAggregatesInput = {
    AND?: event_itemsScalarWhereWithAggregatesInput | event_itemsScalarWhereWithAggregatesInput[]
    OR?: event_itemsScalarWhereWithAggregatesInput[]
    NOT?: event_itemsScalarWhereWithAggregatesInput | event_itemsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"event_items"> | string
    title?: StringWithAggregatesFilter<"event_items"> | string
    date?: StringWithAggregatesFilter<"event_items"> | string
    image?: StringWithAggregatesFilter<"event_items"> | string
    category?: StringWithAggregatesFilter<"event_items"> | string
    description?: StringWithAggregatesFilter<"event_items"> | string
    price?: StringNullableWithAggregatesFilter<"event_items"> | string | null
    registration_link?: StringNullableWithAggregatesFilter<"event_items"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"event_items"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"event_items"> | Date | string
  }

  export type booking_requestsWhereInput = {
    AND?: booking_requestsWhereInput | booking_requestsWhereInput[]
    OR?: booking_requestsWhereInput[]
    NOT?: booking_requestsWhereInput | booking_requestsWhereInput[]
    id?: StringFilter<"booking_requests"> | string
    eventType?: StringFilter<"booking_requests"> | string
    customEventType?: StringNullableFilter<"booking_requests"> | string | null
    date?: StringFilter<"booking_requests"> | string
    guests?: IntFilter<"booking_requests"> | number
    name?: StringFilter<"booking_requests"> | string
    email?: StringFilter<"booking_requests"> | string
    phone?: StringFilter<"booking_requests"> | string
    notes?: StringNullableFilter<"booking_requests"> | string | null
    status?: StringFilter<"booking_requests"> | string
    createdAt?: DateTimeFilter<"booking_requests"> | Date | string
    updatedAt?: DateTimeFilter<"booking_requests"> | Date | string
  }

  export type booking_requestsOrderByWithRelationInput = {
    id?: SortOrder
    eventType?: SortOrder
    customEventType?: SortOrderInput | SortOrder
    date?: SortOrder
    guests?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    notes?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type booking_requestsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: booking_requestsWhereInput | booking_requestsWhereInput[]
    OR?: booking_requestsWhereInput[]
    NOT?: booking_requestsWhereInput | booking_requestsWhereInput[]
    eventType?: StringFilter<"booking_requests"> | string
    customEventType?: StringNullableFilter<"booking_requests"> | string | null
    date?: StringFilter<"booking_requests"> | string
    guests?: IntFilter<"booking_requests"> | number
    name?: StringFilter<"booking_requests"> | string
    email?: StringFilter<"booking_requests"> | string
    phone?: StringFilter<"booking_requests"> | string
    notes?: StringNullableFilter<"booking_requests"> | string | null
    status?: StringFilter<"booking_requests"> | string
    createdAt?: DateTimeFilter<"booking_requests"> | Date | string
    updatedAt?: DateTimeFilter<"booking_requests"> | Date | string
  }, "id">

  export type booking_requestsOrderByWithAggregationInput = {
    id?: SortOrder
    eventType?: SortOrder
    customEventType?: SortOrderInput | SortOrder
    date?: SortOrder
    guests?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    notes?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: booking_requestsCountOrderByAggregateInput
    _avg?: booking_requestsAvgOrderByAggregateInput
    _max?: booking_requestsMaxOrderByAggregateInput
    _min?: booking_requestsMinOrderByAggregateInput
    _sum?: booking_requestsSumOrderByAggregateInput
  }

  export type booking_requestsScalarWhereWithAggregatesInput = {
    AND?: booking_requestsScalarWhereWithAggregatesInput | booking_requestsScalarWhereWithAggregatesInput[]
    OR?: booking_requestsScalarWhereWithAggregatesInput[]
    NOT?: booking_requestsScalarWhereWithAggregatesInput | booking_requestsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"booking_requests"> | string
    eventType?: StringWithAggregatesFilter<"booking_requests"> | string
    customEventType?: StringNullableWithAggregatesFilter<"booking_requests"> | string | null
    date?: StringWithAggregatesFilter<"booking_requests"> | string
    guests?: IntWithAggregatesFilter<"booking_requests"> | number
    name?: StringWithAggregatesFilter<"booking_requests"> | string
    email?: StringWithAggregatesFilter<"booking_requests"> | string
    phone?: StringWithAggregatesFilter<"booking_requests"> | string
    notes?: StringNullableWithAggregatesFilter<"booking_requests"> | string | null
    status?: StringWithAggregatesFilter<"booking_requests"> | string
    createdAt?: DateTimeWithAggregatesFilter<"booking_requests"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"booking_requests"> | Date | string
  }

  export type contact_messagesWhereInput = {
    AND?: contact_messagesWhereInput | contact_messagesWhereInput[]
    OR?: contact_messagesWhereInput[]
    NOT?: contact_messagesWhereInput | contact_messagesWhereInput[]
    id?: StringFilter<"contact_messages"> | string
    name?: StringFilter<"contact_messages"> | string
    email?: StringFilter<"contact_messages"> | string
    message?: StringFilter<"contact_messages"> | string
    date?: StringFilter<"contact_messages"> | string
    createdAt?: DateTimeFilter<"contact_messages"> | Date | string
    updatedAt?: DateTimeFilter<"contact_messages"> | Date | string
  }

  export type contact_messagesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    message?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type contact_messagesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: contact_messagesWhereInput | contact_messagesWhereInput[]
    OR?: contact_messagesWhereInput[]
    NOT?: contact_messagesWhereInput | contact_messagesWhereInput[]
    name?: StringFilter<"contact_messages"> | string
    email?: StringFilter<"contact_messages"> | string
    message?: StringFilter<"contact_messages"> | string
    date?: StringFilter<"contact_messages"> | string
    createdAt?: DateTimeFilter<"contact_messages"> | Date | string
    updatedAt?: DateTimeFilter<"contact_messages"> | Date | string
  }, "id">

  export type contact_messagesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    message?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: contact_messagesCountOrderByAggregateInput
    _max?: contact_messagesMaxOrderByAggregateInput
    _min?: contact_messagesMinOrderByAggregateInput
  }

  export type contact_messagesScalarWhereWithAggregatesInput = {
    AND?: contact_messagesScalarWhereWithAggregatesInput | contact_messagesScalarWhereWithAggregatesInput[]
    OR?: contact_messagesScalarWhereWithAggregatesInput[]
    NOT?: contact_messagesScalarWhereWithAggregatesInput | contact_messagesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"contact_messages"> | string
    name?: StringWithAggregatesFilter<"contact_messages"> | string
    email?: StringWithAggregatesFilter<"contact_messages"> | string
    message?: StringWithAggregatesFilter<"contact_messages"> | string
    date?: StringWithAggregatesFilter<"contact_messages"> | string
    createdAt?: DateTimeWithAggregatesFilter<"contact_messages"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"contact_messages"> | Date | string
  }

  export type adminWhereInput = {
    AND?: adminWhereInput | adminWhereInput[]
    OR?: adminWhereInput[]
    NOT?: adminWhereInput | adminWhereInput[]
    id?: StringFilter<"admin"> | string
    name?: StringFilter<"admin"> | string
    email?: StringFilter<"admin"> | string
    password?: StringFilter<"admin"> | string
    createdAt?: DateTimeFilter<"admin"> | Date | string
    updatedAt?: DateTimeFilter<"admin"> | Date | string
  }

  export type adminOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type adminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: adminWhereInput | adminWhereInput[]
    OR?: adminWhereInput[]
    NOT?: adminWhereInput | adminWhereInput[]
    name?: StringFilter<"admin"> | string
    password?: StringFilter<"admin"> | string
    createdAt?: DateTimeFilter<"admin"> | Date | string
    updatedAt?: DateTimeFilter<"admin"> | Date | string
  }, "id" | "email">

  export type adminOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: adminCountOrderByAggregateInput
    _max?: adminMaxOrderByAggregateInput
    _min?: adminMinOrderByAggregateInput
  }

  export type adminScalarWhereWithAggregatesInput = {
    AND?: adminScalarWhereWithAggregatesInput | adminScalarWhereWithAggregatesInput[]
    OR?: adminScalarWhereWithAggregatesInput[]
    NOT?: adminScalarWhereWithAggregatesInput | adminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"admin"> | string
    name?: StringWithAggregatesFilter<"admin"> | string
    email?: StringWithAggregatesFilter<"admin"> | string
    password?: StringWithAggregatesFilter<"admin"> | string
    createdAt?: DateTimeWithAggregatesFilter<"admin"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"admin"> | Date | string
  }

  export type event_itemsCreateInput = {
    id?: string
    title: string
    date: string
    image: string
    category: string
    description: string
    price?: string | null
    registration_link?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type event_itemsUncheckedCreateInput = {
    id?: string
    title: string
    date: string
    image: string
    category: string
    description: string
    price?: string | null
    registration_link?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type event_itemsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: NullableStringFieldUpdateOperationsInput | string | null
    registration_link?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type event_itemsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: NullableStringFieldUpdateOperationsInput | string | null
    registration_link?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type event_itemsCreateManyInput = {
    id?: string
    title: string
    date: string
    image: string
    category: string
    description: string
    price?: string | null
    registration_link?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type event_itemsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: NullableStringFieldUpdateOperationsInput | string | null
    registration_link?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type event_itemsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: NullableStringFieldUpdateOperationsInput | string | null
    registration_link?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type booking_requestsCreateInput = {
    id?: string
    eventType: string
    customEventType?: string | null
    date: string
    guests: number
    name: string
    email: string
    phone: string
    notes?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type booking_requestsUncheckedCreateInput = {
    id?: string
    eventType: string
    customEventType?: string | null
    date: string
    guests: number
    name: string
    email: string
    phone: string
    notes?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type booking_requestsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    customEventType?: NullableStringFieldUpdateOperationsInput | string | null
    date?: StringFieldUpdateOperationsInput | string
    guests?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type booking_requestsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    customEventType?: NullableStringFieldUpdateOperationsInput | string | null
    date?: StringFieldUpdateOperationsInput | string
    guests?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type booking_requestsCreateManyInput = {
    id?: string
    eventType: string
    customEventType?: string | null
    date: string
    guests: number
    name: string
    email: string
    phone: string
    notes?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type booking_requestsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    customEventType?: NullableStringFieldUpdateOperationsInput | string | null
    date?: StringFieldUpdateOperationsInput | string
    guests?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type booking_requestsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    customEventType?: NullableStringFieldUpdateOperationsInput | string | null
    date?: StringFieldUpdateOperationsInput | string
    guests?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type contact_messagesCreateInput = {
    id?: string
    name: string
    email: string
    message: string
    date: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type contact_messagesUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    message: string
    date: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type contact_messagesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type contact_messagesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type contact_messagesCreateManyInput = {
    id?: string
    name: string
    email: string
    message: string
    date: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type contact_messagesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type contact_messagesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type adminCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type adminUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type adminUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type adminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type adminCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type adminUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type adminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type event_itemsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    image?: SortOrder
    category?: SortOrder
    description?: SortOrder
    price?: SortOrder
    registration_link?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type event_itemsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    image?: SortOrder
    category?: SortOrder
    description?: SortOrder
    price?: SortOrder
    registration_link?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type event_itemsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    image?: SortOrder
    category?: SortOrder
    description?: SortOrder
    price?: SortOrder
    registration_link?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type booking_requestsCountOrderByAggregateInput = {
    id?: SortOrder
    eventType?: SortOrder
    customEventType?: SortOrder
    date?: SortOrder
    guests?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type booking_requestsAvgOrderByAggregateInput = {
    guests?: SortOrder
  }

  export type booking_requestsMaxOrderByAggregateInput = {
    id?: SortOrder
    eventType?: SortOrder
    customEventType?: SortOrder
    date?: SortOrder
    guests?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type booking_requestsMinOrderByAggregateInput = {
    id?: SortOrder
    eventType?: SortOrder
    customEventType?: SortOrder
    date?: SortOrder
    guests?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type booking_requestsSumOrderByAggregateInput = {
    guests?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type contact_messagesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    message?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type contact_messagesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    message?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type contact_messagesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    message?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type adminCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type adminMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type adminMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}