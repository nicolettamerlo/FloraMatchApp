# 🌿 FloraMatchApp

**FloraMatch** is a full-stack web application that helps users discover plants that best suit their environment, preferences, and care habits. This project was developed as part of my portfolio and features a modern **React** frontend integrated with a robust **ASP.NET Core** backend.

---

## 📦 Tech Stack

- ⚛️ **Frontend**: React + Vite + Tailwind CSS
- 🧠 **Backend**: ASP.NET Core 9.0 (Web API)
- ☁️ **Deployment**: Azure App Service (Free Tier)

🔗 **Live Demo**:  
https://flora-match-web-cmasgbd7crb6frb7.swedencentral-01.azurewebsites.net/

⚠️ **Note**:  
Since the app is hosted on a **free-tier Azure database**, performance may occasionally suffer delays. In some cases, the live demo may be temporarily unavailable due to quota limits.

---

## ✅ Prerequisites

Make sure you have the following installed:

- [.NET 9 SDK](https://dotnet.microsoft.com/)
- [Node.js & npm](https://nodejs.org/)

---

## 🛠️ Run the Backend Locally (ASP.NET Core)

To start the backend locally:

```bash
cd FloraMatchApp.Server
dotnet run
```

This will automatically start the frontend server on http://localhost:3000.

## 🔄 Frontend Build & Post-Build Script

To prepare the frontend and copy the files to the backend for deployment:

1. Navigate to the frontend directory and build the app:

```bash
cd floramatchapp.client
npm run build
```

2. After building, a postbuild script will automatically copy the generated files from the dist/ folder to the ASP.NET backend's wwwroot/ folder.

🔧 How It Works
Build the frontend:
npm run build compiles the React application into production-ready files inside the dist/ folder.

Copy to backend:
The postbuild script then moves all necessary assets (index.html, JavaScript, CSS, images, etc.) into the wwwroot/ directory, allowing ASP.NET Core to serve the frontend as static files.

Azure App Service → for both frontend and backend
