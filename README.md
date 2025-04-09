# Krazy_Kanban_Board

# 👥 Employee Tracker
An Employee Tracker built with TypeScript, Express, and PostgreSQL. Easily add and view employees, roles, and departments through a clean API and interactive prompts.

# 🚀 Features
Add employees, roles, and departments

View all employees, roles, and departments

Secure API with JWT authentication

Uses Inquirer for interactive prompts

# 🧰 Built With
TypeScript

Node.js + Express

PostgreSQL

Inquirer

Axios

JSON Web Token (JWT)

dotenv

# 🛠 Setup
Install dependencies

bash
Copy
Edit
npm install
Run the app

bash
Copy
Edit
npm run start
Set up the database

bash
Copy
Edit
psql -U your_user -f schema.sql
psql -U your_user -d employee_db -f seeds.sql
.env example

# 📁 Key Files
server.ts – Express server logic

connection.ts – PostgreSQL connection

cli.ts – Inquirer-powered prompt interface

schema.sql / seeds.sql – DB setup & seed data

# 🙏 Thanks
Created with help from tutors and support team.

# 📜 License
MIT

