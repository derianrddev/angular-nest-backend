# Authentication App

## Overview

This project is the backend for an authentication application, designed to handle user authentication and authorization.

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- [Docker Desktop](https://www.docker.com/get-started/)
- [Mongo Compass](https://www.mongodb.com/try/download/compass)

### Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/derianrddev/angular-nest-backend.git
   cd angular-nest-backend
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Copy and Configure Environment Variables**

    Copy the .env.template file and rename it to .env:
   ```bash
   cp .env.template .env
   ```
    Edit the .env file to configure your environment variables as needed.

4. **Start the Application**

    Use Docker Compose to build and start the application in detached mode:

   ```bash
   docker compose up -d
   ```

    Alternatively, you can start the application in development mode using npm:

   ```bash
   npm run start:dev
   ```
