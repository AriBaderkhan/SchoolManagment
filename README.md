# RBAC Role-Based Access Control System 🔐

This is a full-stack Node.js project implementing **Role-Based Access Control (RBAC)** with Express.js, PostgreSQL, and vanilla JavaScript frontend.  
Users can **register, log in, and get access to specific pages based on their role**: `admin`, `manager`, `teacher`, or `student`.

---

## 💡 Features

- ✅ Register new users with name, email, password, age, address, and role
- ✅ Login system with JWT token-based authentication
- ✅ Passwords are hashed using `bcrypt`
- ✅ Role-Based Routing using protected endpoints
- ✅ JWT stored in `localStorage` on frontend
- ✅ Dynamic dashboard with personalized greeting
- ✅ Navbar updates automatically based on login state
- ✅ Access to specific role pages like `/admin`, `/teacher`, etc.

---

## 🖼️ Screens

- Login Page
- Register Page
- Dashboard (after login): shows greeting and gives access
- Role pages: `/admin.html`, `/manager.html`, `/teacher.html`, `/student.html`

---

## 🧪 How to Test RBAC Routing

After you register & login, you'll be redirected to the dashboard.  
To test role-based access:

➡️ Open in browser:
http://localhost:PORT/admin.html
http://localhost:PORT/manager.html
http://localhost:PORT/teacher.html
http://localhost:PORT/student.html