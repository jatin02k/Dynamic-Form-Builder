# Dynamic Airtable-Connected Form Builder

## MERN Stack Interview Task

This project is a full-stack application built with the **MERN stack** that allows users to create custom forms from their Airtable bases, apply conditional logic, and save responses directly into Airtable as new records.

The task was completed as a technical interview assignment.

## 🚀 Core Features

- **Airtable OAuth Login**: Implements a secure user authentication flow via Airtable's OAuth 2.0.
- **Dynamic Form Builder**: Allows users to select a base and table from their Airtable account to dynamically build a custom form using available fields.
- **Conditional Logic**: Questions can be configured to appear or hide based on the answers to previous questions.
- **Form Viewer**: A separate, public-facing view where the form can be filled out.
- **Response Submission**: Saves form responses directly as new records in the selected Airtable table.

## 🛠️ Tech Stack

**Frontend (Client)**
- React
- Vite
- Axios
- Tailwind CSS
- Zustand
- React Router DOM

**Backend (Server)**
- Node.js
- Express
- MongoDB
- Mongoose
- Axios
- dotenv
- cookie-parser
- crypto

## ⚙️ Setup Instructions

### Backend (Server)

1. Navigate to the `/server` directory.
2. Install dependencies:
   ```bash
   npm install express cors mongoose dotenv axios cookie-parser
