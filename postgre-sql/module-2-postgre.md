# Module 2: PostgreSQL

## Reference

## Libraries

## Table of Content

- [Session 1](#session-1-20240601)

### Session 1 20240601

[Jump up &#x21e7;](#table-of-content)

#### 1. Introduction Course Output [&#x21e7;](#session-1-20240601)

- Having a proper mindset about database
- Having the most effective method to work with database (query, index)

#### 2. Data [&#x21e7;](#session-1-20240601)

- Data in could be in various kind:

  - Text
  - Image
  - Sound
  - ...

- There are many DBs and each DB has a specific purpose of storing some kind of data. A product might contain many projects and each project might have different DBs, which utilize some specific pros of each DBs.

- Database Optimization:

  - **Optimize in using**: This is the content of the course
  - Optimize in hardware (server resources): role DBA - Database Admin will implement this way.

- SQL and NoSQL:

  - NoSQL:
    - Organizing non relative entities
    - Organizing in 1 document
  - SQL:
    - Organizing relative entities
    - Organizing in tables
    - When query, the DB will travel to all entities' relationship and take all that data send to user
  - NoSQL might access faster and SQL but SQL has a more proper data storing - which make SQL more scalable

#### 3. Relational databases [&#x21e7;](#session-1-20240601)

- Relational databases

  - ACID:
    - Atomicity
    - Consistency
    - Isolation
    - Durability
  - Flexibility
  - Ease of use
  - Collaboration
  - Built-in security
  - Database Normalization: the method of processing raw data - make the data accessing faster

- What is SQL: SQL (Structured Query Language) is a programming language used by nearly all relational databases to query, manipulate, and define data, and to provide access control

- PostgreSQL and MySQL: [Reference](https://aws.amazon.com/compare/the-difference-between-mysql-vs-postgresql/?nc1=h_ls)
  => PostgreSQL inherit MySQL and have more modern features

- PostgreSQL structure:
  - Data is stored into schemas
    - Schema separate into tables
    - Tables have relation with each others
  - Pgadmin: a portal with UI to interact with PostgreSQL
