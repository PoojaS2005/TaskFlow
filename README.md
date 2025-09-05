# pooja-taskflow

A full-stack **Task Management App** built with the **MERN stack**:  
- **MongoDB Atlas** (Database)  
- **Express.js** (Backend API)  
- **React (Vite)** (Frontend)  
- **Node.js** (Server runtime)  

This app allows users to **create, read, update, and delete tasks (CRUD)** with fields like title, description, status, priority, and due date.  
It also supports **filters** by search query, status, priority, and completion state.

---

## Features
- Add, edit, delete tasks  
- Task fields: `title`, `description`, `status`, `priority`, `dueDate`  
- Filters: by **search title**, **status**, **priority**, and **completed**  
- Highlights **overdue tasks**  
- Clean UI with custom CSS  

---

## Project Structure
```

mern-task-handler/
│── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── taskController.js
│   ├── models/
│   │   └── Task.js
│   ├── routes/
│   │   └── taskRoutes.js
│   ├── middlewares/
│   │   └── errorMiddleware.js
│   ├── server.js
│   └── .env
│
│── frontend/
│   ├── src/
│   │   ├── api.js
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── components/
│   │   │   ├── Filters.jsx
│   │   │   ├── TaskForm.jsx
│   │   │   ├── TaskItem.jsx
│   │   │   └── TaskList.jsx
│   │   └── assets/styles/
│   │       ├── Filters.css
│   │       ├── TaskForm.css
│   │       └── TaskItem.css
│   └── index.html
│
└── README.md

````

---

## Setup Instructions

### Backend Setup
```bash
cd backend
npm install
````

* Create a `.env` file in `backend/`:

```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/taskdb
```

* Start server:

```bash
npm run dev
```

Your backend runs at `http://localhost:5000`.

---

### Frontend Setup

```bash
cd frontend
npm install
```

* Create a `.env` file in `frontend/`:

```env
VITE_API_URL=http://localhost:5000/api
```

* Start frontend:

```bash
npm run dev
```

Your frontend runs at `http://localhost:5173`.

---

## API Endpoints

### Base URL: `/api/tasks`

| Method | Endpoint | Description                  |
| ------ | -------- | ---------------------------- |
| GET    | `/`      | Get all tasks (with filters) |
| POST   | `/`      | Create a task                |
| PUT    | `/:id`   | Update a task                |
| DELETE | `/:id`   | Delete a task                |

---

## Tech Stack

* **Frontend:** React (Vite), Axios
* **Backend:** Node.js, Express.js, Mongoose
* **Database:** MongoDB Atlas

---

## Future Improvements

* User authentication (JWT)
* Sorting by due date / priority
* Pagination for tasks
* Toast notifications for actions

---

## Author

Developed by **Pooja S**
