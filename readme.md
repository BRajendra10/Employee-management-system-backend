# Employee Management System Backend

A simple and clean **Employee Management System Backend** built using **Node.js**, **Express**, and **MongoDB (Atlas)**. This backend provides full CRUD functionality for managing employees.

---

## 🚀 Features

* Add Employee
* Get All Employees
* Update Employee Details
* Delete Employee
* Centralized MongoDB connection
* Reusable database instance using middleware
* Clean folder structure with modular routes & controllers

---

## 🛠️ Tech Stack

* **Node.js**
* **Express.js**
* **MongoDB (Atlas)**
* **dotenv** for environment variables
* **CORS** for handling cross-origin requests
* **Nodemon** for development

---

## 📁 Project Structure

```
📦 employee-management-system-backend
├── 📁 src
│   ├── 📁 controllers
│   │   └── employee.controller.js
│   ├── 📁 routes
│   │   └── employee.route.js
│   ├── 📁 db
│   │   └── index.js
│   └── index.js
├── .env
├── package.json
└── README.md
```

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/BRajendra10/Employee-management-system-backend.git
cd Employee-management-system-backend
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Create a `.env` File

Add your MongoDB Atlas connection string:

```
MONGODB_URI=your_mongodb_connection_string
CORS_ORIGIN=*
```

### 4️⃣ Start the Server

```bash
npm run dev
```

Server will run at:

```
http://localhost:4000
```

---

## 📡 API Endpoints

### ➤ **Get All Employees**

```
GET /api/v1/employees/
```

### ➤ **Add Employee**

```
POST /api/v1/employees/add
```

Body:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "department": "HR",
  "position": "Manager",
  "salary": "50000"
}
```

### ➤ **Update Employee**

```
PUT /api/v1/employees/update/:employeeId
```

### ➤ **Delete Employee**

```
DELETE /api/v1/employees/delete/:employeeId
```

---

## 📬 Response Example (Success)

```json
{
  "message": "Employee updated successfully",
  "updatedEmployee": {
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "1234567890",
    "department": "Finance",
    "position": "Senior Manager",
    "salary": "65000"
  }
}
```

## Additional API Endpoints (Filters)

### 🔍 Filter Employees by Department

**GET** `/api/v1/employees/filter?department=DEPARTMENT_NAME`

### 🎯 Filter Employees by Position

**GET** `/api/v1/employees/position?position=POSITION_NAME`

### 🧑‍🔎 Search Employee by Name

**GET** `/api/v1/employees/search?name=EMPLOYEE_NAME`


---

## 🧑‍💻 Author

**Rajendra Behera**
GitHub: [https://github.com/BRajendra10](https://github.com/BRajendra10)

---

## ⭐ Support

If you like this project, consider giving it a **star ⭐ on GitHub**!