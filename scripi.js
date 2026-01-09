const { DESTRUCTION } = require("node:dns")
const { REPL_MODE_SLOPPY } = require("node:repl")



data Storage
 aise kuchh jaha par hum apna data store kar sakte hain
 DatabaseSync

  TYPES OF DESTRUCTION
  sql | nosql

  sql data ko ek roop mein rakhna - tables
  {
    nosql data ko alag alag roop mein rakhna - document based (mongoDB0)
}

  what and why
    sql - relational database management system (RDBMS)
    nosql - non relational or distributed database system

  examples
    sql - MySQL, PostgreSQL, SQLite, Microsoft SQL Server
    nosql - MongoDB, Cassandra, Redis, CouchDB

  terminologise - collections, documents, schemas, keys, models 
    connection with database
    CRUD operations - create, read, update, delete
    data validation and modeling
    indexing and querying
    relationships and population
    aggregation and data processing
    integration with web frameworks
    mongoose - popular ODM (Object Data Modeling) library for MongoDB and Node.js
    sequelize - promise-based Node.js ORM for SQL databases like MySQL, PostgreSQL, SQLite, and MSSQL
    TypeORM - ORM that supports both SQL and NoSQL databases with TypeScript support

    backednt  pe  do sarvar ho ta hai ek hota hai database server aur dusra hota hai application server
    database server - data ko store karne aur manage karne ke liye responsible hota hai
    application server - application logic ko handle karta hai aur database server ke sath interact karta hai