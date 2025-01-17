# Library System

A full-stack Library Management System that consists of a **React frontend** and a **Node.js backend**. This system allows users to add, remove, view, borrow, books.

## Table of Contents
1. [Technologies Used](#technologies-used)
2. [Features](#features)
3. [Project Setup](#project-setup)
   - [Frontend Setup](#frontend-setup)
   - [Backend Setup](#backend-setup)
4. [API Documentation](#api-documentation)
5. [Folder Structure](#folder-structure)


---

## Technologies Used

- **Frontend**:
  - React
  - Axios (for API calls)
  - MUI (for styling)

- **Backend**:
  - Node.js
  - Express
  - cors

---

## Features

  - View all books in the library (book title, author, description, read status).
  - Add and remove book.
  

---

## Project Setup

### Prerequisites:
    Node.js (v18 or above)

### Clone the repository:
 - Clone git repository:

    ```bash
    git clone https://github.com/ajaygargdev/library-system.git


### Frontend Setup

1. Navigate to the `front-end` folder:

   ```bash
   cd front-end

2. Install the required dependencies:

   ```bash
   npm install

3. Start the React frontend:

   ```bash
   npm start

The Frontend app will be running at http://localhost:3000.

### Backend Setup

1. Navigate to the `back-end` folder:

   ```bash
   cd back-end

2. Install the required dependencies:

   ```bash
   npm install

3. Set up environment variables:
    - Navigate to .env file in the back-end directory and add the following variables:

   ```env
   PORT=8000

4. Start the Node.js backend:

   ```bash
   npm start

The Backend app will be running at http://localhost:8000.

## API Documentation

1. POST /api/books
    - Description: Add new book.
    - Request Body:

        ```json
        { 
            "title": "nodejs", 
            "author": "john doe", 
            "description": "node tutorial" 
        }

    - Response Body:
        - success:
            ```json
            {
                "id": 1,
                "title": "nodejs", 
                "author": "john doe", 
                "description": "node tutorial", 
                "status": "unread",
                "createdOn": 1736395724051,
                "updatedOn": 1736395724051
            }
        - error:
            - if book id not passed error code: 400

            ```json
            {
                "message": "bad request"
            }
2. PUT /api/books/:Id
    - Description: Change book read status.
    - Request Url (Add book id in url):
        ```json
        /api/books/1

    - Response Body:
        - success:
            ```json
            {
                "id": 1,
                "title": "nodejs", 
                "author": "john doe", 
                "description": "node tutorial", 
                "status": "read",
                "createdOn": 1736395724051,
                "updatedOn": 1736395724051
            }

        - error:
            - if book id not passed error code: 400

                ```json
                {
                    "message": "Bad request"
                }
            
            - if wrong book id error code: 404

                ```json
                {
                    "message": "Book not exist"
                }
3. DELETE /api/books/:Id
    - Description: Delete the book.
    - Request Url (Add book id in url):
        ```json
        /api/books/1

    - Response Body:
        - success:
            ```json
            {
                "id": 1,
                "title": "nodejs", 
                "author": "john doe", 
                "description": "node tutorial", 
                "status": "read",
                "createdOn": 1736395724051,
                "updatedOn": 1736395724051
            }

        - error:
            - if book id not passed error code: 400

                ```json
                {
                    "message": "Bad request"
                }
            
            - if wrong book id error code: 404

                ```json
                {
                    "message": "Book not exist"
                }
4. GET /api/books
    - Description: Get all the book including filter based on **title** and *auther* and status(**read/unread**) . 
    - Request Url (search and status are optional):
        ```json
        api/books?search=<title or auther>&status=<read/unread>

    - Response Body:
        - success:
            ```json
            [
                {
                    "id": 1,
                    "title": "nodejs", 
                    "author": "john doe", 
                    "description": "node tutorial", 
                    "status": "read",
                    "createdOn": 1736395724051,
                    "updatedOn": 1736395724051
                },
                {
                    "id": 2,
                    "title": "reactjs", 
                    "author": "john doe", 
                    "description": "node tutorial", 
                    "status": "read",
                    "createdOn": 1736395724051,
                    "updatedOn": 1736395724051
                }
            ]

        - error:       
            - if books not exist code: 404

                ```json
                {
                    "message": "Book not exist"
                }

5. GET /api/books/:Id
    - Description: get book detail on bases of book id.
    - Request Url (Add book id in url):
        ```json
        /api/books/1

    - Response Body:
        - success:
            ```json
            {
                "id": 1,
                "title": "nodejs", 
                "author": "john doe", 
                "description": "node tutorial", 
                "status": "read",
                "createdOn": 1736395724051,
                "updatedOn": 1736395724051
            }

        - error:
            - if book id not passed error code: 400

                ```json
                {
                    "message": "Bad request"
                }
            
            - if wrong book id error code: 404

                ```json
                {
                    "message": "Book not exist"
                }

## Folder Structure

        /library-system
        ├── /front-end
        │   ├── /public
        │   ├── /src
        │   │   ├── /Components
        │   │   ├── /Config
        │   │   ├── /Constents
        │   │   ├── /Services
        │   │   └── App.js
        │   ├── /node_modules
        │   └── package.json
        ├── /back-end
        │   ├── /src
        │   │   ├── /controller
        │   │   ├── /logger
        │   │   ├── /router
        │   │   ├── data.json
        │   │   ├── index.js
        │   │   └── server.js
        │   ├── /node_modules
        │   ├── index.js
        │   ├── package.json
        │   └── .env
        └── /README.md
