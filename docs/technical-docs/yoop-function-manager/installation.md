---
sidebar_position: 1
---

# Installation

There's two ways to install the Function Manager and run it. You can either use the Docker Compose file provided in the [yoop-platform](https://github.com/Yoop-Platform/yoop-platform) repository, and you'll be able to bootstrap the required third-party vendor services, or you can run the Function Manager as a standalone service, directly from its own [repository](https://github.com/Yoop-Platform/yoop-function-manager).

## Standalone Installation

First, you need to clone the repository:

```bash
git clone https://github.com/Yoop-Platform/yoop-function-manager.git
```

Then, you need to install the dependencies:

```bash
cd yoop-function-manager
npm install
```

After that, you can run the Function Manager:

```bash
npm start
```

## Docker Compose Installation

First, you need to clone the repository:

```bash
git clone https://github.com/Yoop-Platform/yoop-platform.git
```

Then, you need to navigate to the `yoop-platform` directory and run the Docker Compose file:

```bash
cd yoop-platform
docker-compose build --build-arg NPM_TOKEN=<YOUR_NPM_TOKEN_HERE> // See GitHub Token section below
docker-compose up
```

This will start the Function Manager and all the required third-party vendor services.

## Configuration

The Docker Compose file already has ENV configuration for the Function Manager and it should also have ENV configuration for third-party services.

If you're running the Function Manager as a standalone service, you can create a `.env` file in the root directory of the repository and add the following configuration:

```bash
FUNCTION_MANAGER_URL=127.0.0.1:3101
ENV=local
SERVICE_NAME=function-manager
CASSANDRA_CONTACT_POINT=127.0.0.1
CASSANDRA_PORT=9042
CASSANDRA_KEYSPACE=yoop_platform
CASSANDRA_DATACENTER=myDC
DB_HOST=a
DB_PORT=b
DB_USERNAME=c
DB_PASSWORD=d
DB_DATABASE=e
```

Note: The `DB_HOST`, `DB_PORT`, `DB_USERNAME`, `DB_PASSWORD`, and `DB_DATABASE` are temporary ENV variables that MIGHT be removed in the future. The database used is currently Cassandra.

## GitHub Token

The Function Manager requires a GitHub token to be able to interact with the GitHub API. You can create a GitHub token by following the instructions [here](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token).

After you've created the token, you need to pass it to the Docker Compose file as a build argument. You can do this by running the following command:

```bash
docker-compose build --build-arg NPM_TOKEN=<YOUR_NPM_TOKEN_HERE>
```

After that you can run the Docker Compose file:

```bash
docker-compose up
```
