# Secure Notes API

A RESTful Notes API built with **Node.js, Express, MongoDB, JWT Authentication, and bcrypt**.
This API allows users to register, login, and manage their personal notes securely.

---

## 🚀 Features

* User Registration
* User Login with JWT Authentication
* Secure Password Hashing using bcrypt
* Create Notes
* Get All Notes
* Update Notes
* Delete Notes
* Protected Routes with Middleware

---

## 🛠 Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT (jsonwebtoken)
* bcrypt
* Postman (API Testing)

---

## 📂 Project Structure

```
project-folder
│
├── controllers
│   ├── user.controller.js
│   └── notes.controller.js
│
├── models
│   ├── user.model.js
│   └── note.model.js
│
├── middleware
│   └── notes.middleware.js
│
├── routes
│   ├── user.routes.js
│   └── notes.routes.js
│
├── db
│   └── db.js
│
├── server.js
└── package.json
```

---

## ⚙️ Installation

Clone the repository

```
git clone https://github.com/dikumardi/secure-notes-api.git
```

Go to project folder

```
cd secure-notes-api
```

Install dependencies

```
npm install
```

Create `.env` file

```
PORT=3000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
```

Run the server

```
npm start
```

---

## 📌 API Endpoints

### Authentication

| Method | Endpoint      | Description   |
| ------ | ------------- | ------------- |
| POST   | /api/register | Register user |
| POST   | /api/login    | Login user    |
| POST   | /api/logout   | Logout user   |

### Notes

| Method | Endpoint          | Description   |
| ------ | ----------------- | ------------- |
| POST   | /api/notes/create | Create note   |
| GET    | /api/notes        | Get all notes |
| PATCH  | /api/notes/:id    | Update note   |
| DELETE | /api/notes/:id    | Delete note   |

---

## 🔒 Authentication

Protected routes require JWT token stored in cookies.

Middleware verifies the user before accessing notes routes.

---

## 🧪 Testing

You can test APIs using **Postman**.

---


