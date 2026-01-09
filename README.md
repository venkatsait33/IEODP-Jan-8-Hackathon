# **IEODP – Intelligent Enterprise Operations & Decision Platform**

🚀 **Enterprise-grade workflow & decision management platform**
Role-driven. Workflow-enforced. Audit-ready. Production-style architecture.

---

## 📌 Project Overview

**IEODP (Intelligent Enterprise Operations & Decision Platform)** is a unified enterprise system designed to manage:

* Multi-role workflows
* Approval chains
* Operational requests
* Leadership reviews
* Management actions
* Auditor decisions
* Full auditability and governance

This platform simulates **real-world enterprise workflows** and is built with **production patterns**, not demo shortcuts.

---

## 🏗️ Architecture

```
React + Redux Toolkit + RTK Query + DaisyUI
        |
        | REST API
        |
   JSON Server (Mock Backend)
        |
     db.json
```

> Backend design is documented separately for Java / Node.js implementation.

---

## 👥 User Roles

| Role           | Responsibilities                                     |
| -------------- | ---------------------------------------------------- |
| **OPERATIONS** | Raise requests, view all tickets                     |
| **LEADERSHIP** | Review requests, add comments, forward to management |
| **MANAGEMENT** | Take actions on approved requests                    |
| **AUDITORS**   | Final decision & compliance check                    |

---

## 🔁 Ticket Workflow Lifecycle

```
SUBMITTED
   ↓
FORWARDED_TO_MANAGEMENT
   ↓
ACTION_TAKEN
   ↓
CLOSED
```

Each stage is **strictly role-controlled**.

---

## 🧩 Key Features

* 🔐 Role-based authentication & routing
* 📝 Raise Request (Operations)
* 🗣 Leadership Comment & Forward
* 🛠 Management Action
* ⚖ Auditor Final Decision
* 🕒 Full status lifecycle
* 📜 Audit log ready architecture
* 🧪 Selenium test selectors (`data-testid`)
* 🧱 Modular, enterprise folder structure

---

## 🛠 Tech Stack

### Frontend

* React
* Redux Toolkit
* RTK Query
* React Hook Form
* Zod Validation
* DaisyUI (Tailwind CSS)
* React Router

### Backend (Mock)

* JSON Server

---

## 📁 Folder Structure

```
src/
 ├── api/
 │   └── baseApi.js
 ├── auth/
 │   └── Login.jsx
 ├── layout/
 │   ├── MainLayout.jsx
 │   ├── ProtectedRoute.jsx
 │   └── Unauthorized.jsx
 ├── modules/
 │   ├── operations/
 │   ├── leadership/
 │   ├── management/
 │   ├── auditors/
 │   └── tickets/
 │       ├── components/
 │       ├── forms/
 │       ├── pages/
 │       └── validation/
 ├── routes/
 │   └── AppRoutes.jsx
 ├── utils/
 │   ├── roles.js
 │   └── ticketStatus.js
 └── main.jsx
```

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/ieodp.git
cd ieodp
```

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Setup Environment

Create `.env` file in root:

```env
VITE_API_URL=http://localhost:5000
```

---

### 4. Start JSON Server

```bash
npx json-server --watch db.json --port 5000
```

---

### 5. Start Frontend

```bash
npm run dev
```

---

## 🔑 Login (Demo Mode)

Use buttons on login page:

* **Login as Operations**
* **Login as Leadership**
* **Login as Management**
* **Login as Auditor**

No password required (mock authentication).

---

## 🧪 Selenium & Automation Ready

All critical fields have:

```html
id=""
data-testid=""
```

Example:

```html
<textarea data-testid="leadership-comment-textarea" />
```

This enables:

* Selenium
* Cypress
* Playwright automation

---

## 🧭 Routes

### Operations

* `/operations/dashboard`
* `/operations/requests`
* `/operations/workflows`
* `/operations/tasks`

### Leadership

* `/leadership/dashboard`
* `/leadership/reviews`
* `/leadership/insights`

### Management

* `/management/dashboard`
* `/management/actions`
* `/management/approvals`

### Auditors

* `/auditors/logs`
* `/auditors/decisions`

---

## 🔐 Authorization Rules

| Role       | Can Do            |
| ---------- | ----------------- |
| OPERATIONS | Create ticket     |
| LEADERSHIP | Comment & forward |
| MANAGEMENT | Take action       |
| AUDITORS   | Final decision    |

Unauthorized access → redirected to **403 Unauthorized page**

---

## 📊 Workflow Enforcement

This app enforces **real enterprise rules**:

* Auditor **cannot see** tickets until Management acts
* Management **cannot act** before Leadership review
* Leadership **cannot close** ticket
* Operations **cannot skip stages**

---

## 📜 Backend Design

Backend is designed for:

* Java Spring Boot or Node.js
* Role-based access control
* Workflow enforcement
* Audit logging
* AI insights (future)

📄 See: **Backend Architecture Document**

---

## 💡 Why This Project Is Different

This is **not a CRUD demo app**.

This project demonstrates:

* Real enterprise workflows
* Role-based governance
* Production folder structure
* Workflow state machines
* Authorization boundaries
* Audit readiness

This is the level expected in:

* Enterprise systems
* Corporate dashboards
* Banking / compliance tools
* SaaS admin platforms

---

## 🧠 Learning Objectives

This project helps you understand:

* How real enterprise workflows are designed
* How roles control UI + backend logic
* How to structure large React apps
* How to enforce business rules at UI level
* How to think like a **senior frontend engineer**

---

## 📌 Future Enhancements

* Audit log UI
* Status timeline UI
* AI risk insights
* SLA tracking
* Notifications
* WebSockets
* Real backend integration

---

## 🤝 Contribution

This project is part of an **enterprise frontend engineering assessment** and is not open for public contribution.

---

## 📄 License

MIT License

---

## 🏁 Final Note

> This project is intentionally designed as **enterprise-grade**, not tutorial-grade.
> Architecture, workflows, and structure follow **real production patterns**.

---


