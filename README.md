Dynamic Airtable-Connected Form Builder
MERN Stack Interview Task
This project is a full-stack application built with the MERN stack that allows users to create custom forms from their Airtable bases and save responses back to Airtable. It was completed as a technical hiring task.

Features Overview 

Airtable OAuth Login: Secure user authentication via Airtable's OAuth 2.0 flow.

Dynamic Form Builder: Allows users to select a base and table from their Airtable account to dynamically build a custom form.


Conditional Logic: Questions can be configured to appear or hide based on the answers to previous questions.

Form Viewer: A separate, public-facing view where the form can be filled out.

Response Submission: Saves form responses directly as new records in the selected Airtable table.

Tech Stack
Frontend: React, Vite, Axios, Tailwind CSS, Zustand, React Router DOM

Backend: Node.js, Express, MongoDB, Mongoose, Axios, dotenv, cookie-parser, crypto

Setup Instructions 

Backend (Server)
Navigate to the /server directory.

Install dependencies: npm install express mongoose dotenv axios cookie-parser crypto

Create a .env file and add your credentials (see Airtable OAuth App Setup below).

Run the server: npm start

Frontend (Client)
Navigate to the /client directory.

Install dependencies: npm install react react-dom react-router-dom axios zustand

Install Tailwind CSS: npm install -D tailwindcss postcss autoprefixer

Run the dev server: npm run dev

Airtable OAuth App Setup Guide 

Go to your Airtable developer dashboard.

Register a new integration with the following details:

Name: A descriptive name like "Dynamic Form Creator".

OAuth redirect URL: https://a2884aa0ce51.ngrok-free.app/api/auth/airtable/callback (Note: You must replace this with your unique ngrok URL every time it changes).

Generate a Client Secret.

Enable the following scopes:

data.records:read

data.records:write

schema.bases:read

user.email:read

Copy your Client ID and Client Secret into your backend's .env file.

Technical Challenges & Learning
This project presented several real-world technical challenges that were successfully debugged and resolved:

OAuth 2.0 Errors: Initial 400 Bad Request and 401 Unauthorized errors were debugged by ensuring the redirect_uri and credentials were a perfect match.

Network Timeouts: The ETIMEDOUT and ERR_BLOCKED_BY_CLIENT errors were diagnosed as local firewall and browser security issues, which were successfully bypassed using an ngrok public tunnel.

PKCE Implementation: The OAuth flow was updated to include PKCE (Proof Key for Code Exchange) to meet Airtable's security requirements, which required adding a code_verifier and code_challenge to the authorization request.

Deliverables
GitHub Repository: Public repository containing all project code.

Live Project Link: A live deployment would require hosting the backend (e.g., Render) and frontend (e.g., Vercel).


README.md: This document.
