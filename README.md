
# MongoDB Assignment 8: Express.js & Mongosh Integration

This project demonstrates proficiency in MongoDB operations using two distinct methods: a structured **Express.js** backend and direct **MongoDB Shell (mongosh)** scripting. It covers schema validation, capped collections, indexing, advanced CRUD operations, and the Aggregation Pipeline.

## 📂 Project Structure

The project follows a modular architecture to ensure scalability and separation of concerns:

```text
MONGODB_ASSIGNMENT_8/
├── src/
│   ├── DB/
│   │   ├── model/           # Schema definitions and MongoDB models
│   │   └── connection.db.js # Database connection logic
│   ├── modules/
│   │   ├── collection/      # Collection management logic
│   │   │   ├── collection.controller.js
│   │   │   ├── collection.service.js
│   │   │   └── index.js     # Route definitions for collections
│   │   ├── book/            # Book CRUD and Aggregation logic
│   │   │   ├── book.controller.js
│   │   │   ├── book.service.js
│   │   │   └── index.js     # Route definitions for books
│   │   └── index.js         # Global module router
│   ├── app.bootstrap.js     # Express app configuration
│   └── main.js              # Server entry point
├── mongosh-solutions.txt    # Solutions for MongoDB Shell tasks
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
* **Node.js** (v16+ recommended)
* **MongoDB** (Local instance or Atlas)
* **Postman** (for testing API endpoints)

### Installation
1. Clone the repository and navigate to the root folder.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure your environment variables in a `.env` file (if applicable) or ensure `connection.db.js` points to your local MongoDB:
   ```env
   PORT=3000
   MONGO_URI=mongodb://127.0.0.1:27017/assignment8
   ```
4. Start the server:
   ```bash
    npm run start:dev
   ```

---

## 🛠 Features Covered

### 1. Express.js API
The API is organized into modular routes. All logic is handled within the `service` layer and orchestrated by the `controller`.
* **Collection Management**: Explicit creation with JSON schema validation, capped collections, and manual indexing.
* **Advanced CRUD**: Batch inserts, filtered updates, and complex deletions.
* **Aggregation Pipeline**: Utilizing `$match`, `$sort`, `$project`, `$unwind`, and `$lookup` (Joins).

### 2. MongoDB Shell (`mongosh-solutions.txt`)
A standalone text file containing the exact queries used to achieve the assignment tasks directly within the MongoDB terminal.

---

## 📡 API Endpoints Summary

| Method | URL | Description |
| :--- | :--- | :--- |
| **POST** | `/collection/books` | Create "books" collection with validation |
| **POST** | `/collection/logs/capped` | Create 1MB capped collection |
| **POST** | `/books/batch` | Insert multiple book records |
| **GET** | `/books/year` | Find books between specific years |
| **GET** | `/books/aggregate4` | Join Books and Logs collections |

---

## 🧪 Testing
You can use the provided URLs in the assignment document to test the functionality via Postman. Ensure the server is running on `localhost:3000` (or your configured port) before sending requests.

---

