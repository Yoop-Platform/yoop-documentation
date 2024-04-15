---
sidebar_position: 3
---

# How to Add Your Service

## Introduction

Yoop Platform is a repository of services that we've built to run the entire platform. Each service contributing to a specific purpose (authentication, function management, bootstrapping, databases, proxies, etc.) is a separate service that should exist in the Yoop Platform repository and it should be configured to run in the docker-compose of the platform.

## Steps to Add a Service

Prerequisites:

- Your service needs to exist in a separate repository in the GitHub org.
- Your service should have a Dockerfile to build the image.
- Your service should use environment variables to configure anything that is configurable (e.g., database connection, port, etc.).

Steps:

1. **Clone the Yoop Platform repository**:
   ```bash
   git clone
   ```
2. **Add your service as a submodule**:
   ```bash
   git submodule add
   ```
3. **Add your service to the docker-compose**:
   ```yaml
   services:
     your_service:
       image: your_service_image
       environment:
         - YOUR_SERVICE_ENV_VAR=value
       depends_on:
         - your_service_dependency
   ```
4. **Add any necessary third-party service (e.g. database containers) to the docker-compose**:
   ```yaml
   services:
     your_service_dependency:
       image: your_service_dependency_image
       environment:
         - YOUR_SERVICE_DEPENDENCY_ENV_VAR=value
   ```

## Updating the Service

If you need to update the service, you can do so by following these steps:

1. **Update the service in the submodule**:

   ```bash
   git submodule update --remote
   ```

2. **Push the changes to the submodule**:
   ```bash
   git add .
   git commit -m "chore: update your_service to commit_hash"
   git push
   ```

You can also navigate in the submodule and checkout to a specific commit hash.

1. **Navigate to the submodule**:

   ```bash
   cd your_service
   ```

2. **Checkout to a specific commit hash**:

   ```bash
    git checkout commit_hash
   ```

3. **Navigate back to the main repository**:
   ```bash
   cd ..
   ```
4. **Update the submodule**:
   ```bash
   git add .
   git commit -m "chore: update your_service to commit_hash"
   git push
   ```
