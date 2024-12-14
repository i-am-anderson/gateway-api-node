# API Gateway Project

## Overview

This project consists of three main APIs:

1. **Gateway API**: Acts as the entry point for routing requests to the other APIs.
2. **Products API**: Handles requests related to product information.
3. **Users API**: Manages requests related to user information.

The Gateway API forwards requests to the appropriate API based on the route, allowing centralized access to the system.

---

## Project Structure

The project is organized as follows:

```
src/
├── gateway-api/     # Gateway API implementation
├── products-api/    # Products API implementation
└── users-api/       # Users API implementation
```

---

## Features

### Gateway API

- Serves as the main access point for the system.
- Routes requests to:
  - **Products API**: `/products`
  - **Products API by ID**: `/products/:id`
  - **Users API**: `/users`
  - **Users API by ID**: `/users/:id`
  - **Users API Create**: `/users/create/:qty`
- Handles undefined routes with a proper 404 response.

### Products API

- Retrieves product text.
- Endpoint: `/products`

- Retrieves product information by ID.
- Endpoint: `/products/:id`

### Users API

- Retrieves user text.
- Endpoint: `/users`

- Retrieves user information by ID.
- Endpoint: `/users/:id`

- Create user(s).
- Endpoint: `/users/create/:qty`

---

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [Yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/i-am-anderson/gateway-api-node.git
cd gateway-api-node
```

2. Install dependencies for each API:

```bash
yarn install:all
```

-- Or --

```bash
cd src/gateway-api && yarn install
cd ../products-api && yarn install
cd ../users-api && yarn install
```

### Running the Project

0. Start the **ALL**:

```bash
yarn start:all
```

-- Or --

1. Start the **Users API**:

```bash
cd /users-api
yarn start
```

2. Start the **Products API**:

```bash
cd /products-api
yarn start
```

3. Start the **Gateway API**:

```bash
cd /gateway-api
yarn start
```

The APIs will start on the following ports by default:

- **Users API**: `http://localhost:3302`
- **Products API**: `http://localhost:3301`
- **Gateway API**: `http://localhost:3300`

### Example Requests

1. Retrieve a user text:

```bash
curl http://localhost:3300/users
```

2. Retrieve a user by ID:

```bash
curl http://localhost:3300/users/5
```

3. Create user(s):

```bash
curl http://localhost:3300/users/create/3
```

4. Retrieve a product text:

```bash
curl http://localhost:3300/products
```

5. Retrieve a product by ID:

```bash
curl http://localhost:3300/products/10
```

### Handling Undefined Routes

The Gateway API will respond with:

```json
{
  "error": "Route not found!"
}
```

for any undefined routes.

---

## Technologies Used

- **Node.js**: Backend runtime.
- **Express.js**: Web framework for building APIs.
- **Yarn**: Package manager.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
