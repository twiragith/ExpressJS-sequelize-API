
# Book Management REST API

This is a simple REST API for managing a collection of books, built with ExpressJS and Sequelize using SQLite as the database.

## Table of Contents

- [Technologies](#technologies)
- [Initial Setup](#initial-setup)
- [Model Creation](#model-creation)
- [Seeder Creation](#seeder-creation)
- [API Endpoints](#api-endpoints)
- [Testing the API](#testing-the-api)
- [Git Workflow](#git-workflow)

## Technologies

- Node.js
- ExpressJS
- Sequelize (ORM)
- SQLite (Database)
- Git (Version Control)

## Initial Setup

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install Dependencies**
   - Run the following command to install all required packages:
   ```bash
   npm install
   ```

3. **Initialize Sequelize**
   - Run the following command to set up Sequelize:
   ```bash
   npx sequelize-cli init
   ```

4. **Configure Database**
   - Update the `config/config.json` file to set up your database connection. For SQLite, it may look like this:
   ```json
   {
     "development": {
       "dialect": "sqlite",
       "storage": "database.sqlite"
     }
   }
   ```

## Model Creation

1. **Generate Book Model**
   - Create a new model for the `Book` using Sequelize CLI:
   ```bash
   npx sequelize-cli model:generate --name Book --attributes title:string,author:string,year:integer
   ```

2. **Run Migration**
   - Apply the migration to create the `Books` table:
   ```bash
   npx sequelize-cli db:migrate
   ```

## Seeder Creation

1. **Generate Seeder**
   - Create a new seeder for the `Book` model:
   ```bash
   npx sequelize-cli seed:generate --name demo-book
   ```

2. **Update Seeder File**
   - Open the generated file in the `seeders` folder and update it to add demo data:
   ```javascript
   'use strict';

   module.exports = {
     up: async (queryInterface, Sequelize) => {
       await queryInterface.bulkInsert('Books', [
         {
           title: 'The Great Gatsby',
           author: 'F. Scott Fitzgerald',
           year: 1925,
           createdAt: new Date(),
           updatedAt: new Date()
         },
         {
           title: 'To Kill a Mockingbird',
           author: 'Harper Lee',
           year: 1960,
           createdAt: new Date(),
           updatedAt: new Date()
         },
         {
           title: '1984',
           author: 'George Orwell',
           year: 1949,
           createdAt: new Date(),
           updatedAt: new Date()
         }
       ]);
     },

     down: async (queryInterface, Sequelize) => {
       await queryInterface.bulkDelete('Books', null, {});
     }
   };
   ```

3. **Run Seeder**
   - Apply the seeder to populate the database with demo data:
   ```bash
   npx sequelize-cli db:seed:all
   ```

## API Endpoints

- **GET /books**
  - Retrieve a list of all books.

- **POST /books**
  - Create a new book.
  - Request Body:
    ```json
    {
      "title": "Book Title",
      "author": "Author Name",
      "year": 2023
    }
    ```

- **PUT /books/:id**
  - Update a book by ID.
  - Request Body:
    ```json
    {
      "title": "Updated Book Title",
      "author": "Updated Author Name",
      "year": 2024
    }
    ```

- **DELETE /books/:id**
  - Delete a book by ID.

## Testing the API

1. **Run the Server**
   - Start the Express server:
   ```bash
   node index.js
   ```

2. **Test the Endpoints**
   - Use Postman or `curl` to test the API endpoints as described in the API Endpoints section.

## Git Workflow

1. **Create a Branch**
   - Create a new branch for your feature:
   ```bash
   git checkout -b feature/book-crud
   ```

2. **Commit Your Changes**
   - After making changes, commit them:
   ```bash
   git add .
   git commit -m "Implemented CRUD operations for Book API"
   ```

3. **Push the Branch**
   - Push your changes to the remote repository:
   ```bash
   git push origin feature/book-crud
   ```

4. **Merge to Main**
   - Switch to the `main` branch and merge your feature branch:
   ```bash
   git checkout main
   git merge feature/book-crud
   ```

---

This README provides a comprehensive guide for setting up and working with the Book Management REST API. Happy coding!
```