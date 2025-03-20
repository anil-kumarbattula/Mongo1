# Mongo1
# 💬 Chat Application

A simple chat application built using **Node.js** 🚀, **Express** ⚡, **MongoDB** 🛢️, and **EJS** 🎨 for rendering views.

## Features ✨
- ➕ Add new chat messages
- 📜 View all chat messages
- ✏️ Edit existing messages
- 🗑️ Delete messages

## Technologies Used 🛠️
- **Node.js** 🟢
- **Express.js** 🔥
- **MongoDB** (Mongoose for ODM) 🗄️
- **EJS** (Embedded JavaScript Templates) 📄
- **Method-Override** (for PUT & DELETE requests in forms) 🔄

## Installation & Setup ⚙️

### Prerequisites ✅
- Install **Node.js** and **MongoDB** on your system.

### Steps to Run the Project 🚀
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/chat-app.git
   cd chat-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start MongoDB locally:
   ```bash
   mongod
   ```
4. Run the application:
   ```bash
   node index.js
   ```
5. Open the browser and visit:
   ```
   http://localhost:8080/chats
   ```

## Project Structure 🏗️
```
chat-app/
│-- views/
│   ├── index.ejs  (Displays all chats) 🗂️
│   ├── new.ejs  (Form for adding new chat) 📝
│   ├── edit.ejs  (Edit existing chat) ✏️
│-- models/
│   ├── chat.js  (Mongoose schema for chats) 🛢️
│-- public/
│   ├── style.css  (Frontend styling) 🎨
│-- index.js  (Main server file) ⚙️
│-- package.json  (Project dependencies) 📦
```

## API Routes 🌐
### GET `/chats` 📥
- Fetch all chat messages

### GET `/chats/new` ➕
- Display form to add a new chat

### POST `/chats` 📤
- Add a new chat message

### GET `/chats/:id/edit` ✏️
- Display form to edit a chat

### PUT `/chats/:id` 🔄
- Update a chat message

### DELETE `/chats/:id` 🗑️
- Delete a chat message

## License 📜
This project is open-source and available under the **MIT License**.

---
Feel free to contribute to the project by submitting a pull request or opening an issue! 🤝

