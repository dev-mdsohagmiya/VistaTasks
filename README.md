![VistaTasks Logo](public/logo.png)

# **VistaTasks** - Modern Task Management Todo App

VistaTasks is a feature-rich, modern task management application built with React and Firebase. It provides an intuitive interface for managing your daily tasks with advanced features like real-time synchronization, dark mode support, and seamless data backup.

---

## 📑 **Table of Contents**

1. [🎥 Overview Video](#-overview-video)
2. [🚀 How to Run Locally](#-how-to-run-locally)
3. [✨ Core Features](#-core-features)
4. [🎯 Extra Features](#-extra-features)
5. [🔧 Technology Stack & Project Structure](#-technology-stack--project-structure)

---

## 🎥 **Overview Video**

Get a quick glimpse of VistaTasks in action! Watch the video below to see how it simplifies task management.

[![Watch the Video](https://via.placeholder.com/800x400/3B82F6/FFFFFF?text=VistaTasks+Demo+Video)](https://youtu.be/your-video-id)

_Click the image to watch the demo video_

---

## 🚀 **How to Run Locally**

### **Prerequisites**

- Node.js (v16 or higher)
- npm or yarn
- Firebase account

### **Quick Setup**

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/vista-tasks.git
   cd vista-tasks
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Configure Firebase**

   - Create a Firebase project
   - Add your Firebase configuration to `.env` file
   - Enable Google Authentication

4. **Start Development Server**

   ```bash
   npm run dev
   ```

5. **Open Browser**
   - Navigate to `http://localhost:5173`
   - Sign in with Google
   - Start managing your tasks!

### **Environment Variables**

Create a `.env` file in the root directory:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_MESSAGING_APP_ID=your_app_id
```

---

## ✨ **Core Features**

### **Task Management**

- ✅ **Create Tasks**: Add new tasks with title, description, and due date
- ✅ **Edit Tasks**: Modify existing tasks anytime
- ✅ **Delete Tasks**: Remove completed or unnecessary tasks
- ✅ **Mark Complete**: Toggle task completion status
- ✅ **Task Categories**: Organize tasks by status (All, Active, Completed)

### **Data & Sync**

- 🔄 **Real-time Synchronization**: Tasks sync automatically across devices
- ☁️ **Firebase Integration**: Secure cloud storage for your tasks
- 💾 **Local Storage**: Offline-first approach with local data caching
- 🔐 **Google Authentication**: Secure login with Google accounts
- 📱 **Automatic Backup**: Local tasks automatically backed up to Firebase

### **User Interface**

- 🎨 **Responsive Design**: Works perfectly on all screen sizes
- 🌙 **Dark/Light Mode**: Toggle between themes for better user experience
- 📱 **Mobile-First**: Optimized for mobile and tablet devices
- 🎭 **Smooth Animations**: Beautiful transitions and micro-interactions

---

## 🎯 **Extra Features**

### **Advanced Task Management**

- 🔍 **Smart Search**: Find tasks quickly with real-time search
- 📊 **Task Statistics**: View counts for All, Active, and Completed tasks
- 📅 **Date Management**: Set and track task due dates
- 📝 **Rich Descriptions**: Add detailed descriptions to your tasks
- 🏷️ **Task Organization**: Efficient task categorization and management

### **Enhanced User Experience**

- 🎨 **Custom UI Components**: Beautiful, reusable component library
- 🌈 **Theme System**: Comprehensive dark/light mode implementation
- 📱 **Responsive Layouts**: Adaptive design for all device types
- 🎭 **Framer Motion**: Smooth animations and transitions
- 🎨 **Tailwind CSS**: Modern, utility-first styling framework

### **Performance & Reliability**

- ⚡ **Optimized Rendering**: Efficient React component updates
- 🔄 **State Management**: Robust state handling with useReducer
- 📦 **Code Splitting**: Optimized bundle loading
- 🚀 **Vite Build Tool**: Fast development and build times
- 🧹 **Clean Code**: Well-structured, maintainable codebase

---

## 🔧 **Technology Stack & Project Structure**

### **Frontend Technologies**

- **React 18**: Modern React with hooks and context
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for React

### **Backend & Services**

- **Firebase**: Authentication and database
- **Firestore**: NoSQL cloud database
- **Google Auth**: Secure authentication service

### **Development Tools**

- **ESLint**: Code quality and consistency
- **Prettier**: Code formatting
- **Git**: Version control
- **npm**: Package management

### **Project Architecture**

```
vista-tasks/
├── public/                 # Static assets
│   ├── icons/             # SVG icons and assets
│   ├── logo.png           # App logo
│   └── vite.svg           # Vite logo
├── src/
│   ├── components/        # React components
│   │   ├── todo/          # Todo-specific components
│   │   │   ├── TaskCard.jsx
│   │   │   ├── TasksSection.jsx
│   │   │   ├── SearchAndFilterSection.jsx
│   │   │   └── StatsCard.jsx
│   │   └── ui/            # Reusable UI components
│   │       ├── Header.jsx
│   │       ├── EditAddModal.jsx
│   │       ├── DeleteConfirmModal.jsx
│   │       └── NoTasksFound.jsx
│   ├── contexts/          # React contexts
│   │   └── index.js       # Theme context
│   ├── db/                # Local storage utilities
│   │   └── localStorage.db.js
│   ├── models/            # Data models
│   │   └── todoModel.js
│   ├── pages/             # Page components
│   │   └── home/
│   │       └── index.jsx
│   ├── reducers/          # State management
│   │   └── todoReducer.js
│   ├── services/          # Firebase services
│   │   ├── firebase.config.js
│   │   └── firebase.js
│   └── utils/             # Utility functions
│       ├── alertMessage.js
│       ├── formatDate.js
│       └── textTruncate.js
├── .env                    # Environment variables
├── package.json            # Dependencies
├── vite.config.js          # Vite configuration
└── README.md              # This file
```

---

**VistaTasks** - Transform your task management experience with modern technology and beautiful design. Start organizing your life today! 🚀✨

---

_Built with ❤️ using React, Firebase, and modern web technologies_
