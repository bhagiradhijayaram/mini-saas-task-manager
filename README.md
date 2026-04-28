# Mini SaaS Task Management System

A full-stack task management application where users can securely manage their own tasks with authentication and CRUD operations.

## Features

- User Authentication (Signup & Login)
- JWT-based Authorization
- Protected Routes
- Create, Read, Update, Delete Tasks
- User-specific tasks (No global access)
- Task status toggle (Pending → Completed)
- Clean and responsive UI
- Real-time updates after actions

## Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- React Router DOM
- Fetch API

### Backend
- Node.js
- Express.js
- MySQL (mysql2/promise)
- JWT (Authentication)
- bcryptjs (Password hashing)

## Setup Instructions

### Project folder structure
```
Mini-SaaS-Task-App/
│
├── backend/                  # Node.js + Express API
│   ├── controllers/          # Functions that handle request logic (e.g., authController.js)
│   ├── middlewares/          # Custom middleware (e.g., verifyToken.js)
│   ├── models/               # Sequelize DB schemas (User.js, Task.js)
│   ├── routes/               # API route definitions (authRoutes.js, taskRoutes.js)
│   ├── .env                  # Secret keys and DB connection strings (Do not push to GitHub!)
│   └── server.js             # Entry point for the backend
│
└── frontend/                 # React UI
    ├── src/
    │   ├── components/       # Reusable UI parts (e.g., TaskItem.jsx, Navbar.jsx)
    │   ├── pages/            # Full page views (e.g., Login.jsx, Dashboard.jsx)
    │   ├── services/         # API call helper functions (e.g., api.js)
    │   ├── App.jsx           # Main React component and Router
    │   └── index.css         # Tailwind imports
    └── package.json
```
### Clone the repository

```bash
git clone https://github.com/your-username/mini-saas-task-manager.git
cd mini-saas-task-manager

### Frontend Setup

cd frontend-saas
npm install
npm run dev

### Backend Setup

cd backend-saas
npm install
npm run dev

```
## Screenshots

<img width="1920" height="912" alt="msaas-1" src="https://github.com/user-attachments/assets/c733e40b-a8d9-4cc1-b273-7024fc17581d" />
<img width="1920" height="912" alt="msaas-2" src="https://github.com/user-attachments/assets/5111ddec-0ee1-4863-84c5-253736f4f03a" />
<img width="1920" height="912" alt="msaas-3" src="https://github.com/user-attachments/assets/5a787a5c-6247-4e47-bc93-b299c014ba9d" />
<img width="1920" height="912" alt="msaas-4" src="https://github.com/user-attachments/assets/ef32bf09-2744-47ba-904e-d6be903e6312" />
<img width="1920" height="1080" alt="Screenshot (337)" src="https://github.com/user-attachments/assets/be600ec9-9ef5-4731-b53e-037cc56aaf32" />
<img width="1920" height="1080" alt="Screenshot (338)" src="https://github.com/user-attachments/assets/24d071de-6524-453c-8b40-6e626f091fda" />

## Screen Recording
URL: https://drive.google.com/file/d/1qKu2CzjCbBGRScYT-wiLFMKbbstw4noU/view?usp=sharing

## Frontend URL
URL: https://mini-saas-task-manager.vercel.app/




