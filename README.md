# 🚀 Mini SaaS Task Management System

A full-stack task management application where users can securely manage their own tasks with authentication and CRUD operations.

## 📌 Features

- 🔐 User Authentication (Signup & Login)
- 🔑 JWT-based Authorization
- 🛡️ Protected Routes
- ✅ Create, Read, Update, Delete Tasks
- 👤 User-specific tasks (No global access)
- 🔄 Task status toggle (Pending → Completed)
- 🎨 Clean and responsive UI
- ⚡ Real-time updates after actions

## 🛠️ Tech Stack

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

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

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
