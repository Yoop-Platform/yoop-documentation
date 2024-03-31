---
sidebar_position: 1
---

# Installation

You can bootstrap the platform using the Docker Compose file provided in the repository.

Use the following steps to install the platform:

## Clone the Repository

First, you need to clone the repository:

```bash
git clone https://github.com/Yoop-Platform/yoop-platform.git
```

## Navigate to the Directory

Then, you need to navigate to the `yoop-platform` directory:

```bash
cd yoop-platform
```

## Build the Docker Compose File

After that, you need to build the Docker Compose file:

```bash
docker-compose build --build-arg GITHUB_TOKEN=<YOUR_GITHUB_TOKEN_HERE>
```

## Run the Docker Compose File

Finally, you can run the Docker Compose file:

```bash
docker-compose up
```

This will start the platform and all the required services.
