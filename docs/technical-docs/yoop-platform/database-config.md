---
sidebar_position: 2
---

# Database Configuration

To configure the Database, currently there's no automated way to do it. You need to manually create the keyspace and tables in the Cassandra database.

To do so, go to the Docker container, into the Exec tab, and run:

```bash
cqlsh
```

If you want to use a terminal of your choice and not go into the Exec tab, you can run:

```bash
docker exec -it cassandra_container cqlsh
```

First, you need to create the keyspace:

```sql
CREATE KEYSPACE IF NOT EXISTS yoop_platform WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : 1 };
```

Use the keyspace `yoop_platform` for the Function Manager.

```sql
USE yoop_platform;
```

Then, you need to create the tables:

```sql
CREATE TABLE yoop_platform.function_configuration (
    id TEXT PRIMARY KEY,
    name TEXT,
    body TEXT,
    created_at TIMESTAMP,
    last_bootstrapped_at TIMESTAMP,
    updated_at TIMESTAMP,
    user TEXT
);
```
