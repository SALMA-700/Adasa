# 📷 Adasa — The World of Photography

> **Adasa** is a modern photography-focused web experience designed to showcase the beauty of photography through a clean, immersive, and responsive interface.

🌐 **Live Demo:** [Adasa — The World of Photography](https://assignment14adasa.vercel.app/)

---

## ✨ Overview

**Adasa** is a responsive photography website built with **React.js** and **Vite**.

The project focuses on creating a visually engaging experience for photography enthusiasts, with dedicated sections for exploring photography content, reading articles, and viewing detailed posts.

The application was built with a component-based architecture and client-side routing to keep the codebase organized, reusable, and easy to maintain.

---

## 🚀 Features

* 📸 Modern photography-focused UI
* 🏠 Responsive Home page
* 📝 Blog & Articles section
* 🔎 Dynamic article details pages
* 🧭 Client-side navigation with React Router
* 📱 Fully responsive layout
* 🧩 Reusable React components
* 🗂️ Local JSON data structure for articles
* 🎨 Custom styling with Tailwind CSS
* ⚡ Fast development and optimized production build with Vite
* 🔤 Font Awesome icons
* 📐 Clean and organized component structure

---

## 🛠️ Technologies & Tools

| Technology              | Purpose                              |
| ----------------------- | ------------------------------------ |
| ⚛️ **React.js**         | Building the user interface          |
| ⚡ **Vite**              | Development environment & build tool |
| 🧭 **React Router DOM** | Client-side routing                  |
| 🎨 **Tailwind CSS**     | Responsive UI styling                |
| 🖼️ **Font Awesome**    | Icons                                |
| 🌊 **Flowbite**         | UI components                        |
| 📄 **JSON**             | Local article data                   |
| 🔧 **ESLint**           | Code quality & linting               |
| ▲ **Vercel**            | Deployment                           |

---

## 🏗️ Project Structure

```text
Adasa/
│
├── public/
│   ├── favicon.svg
│   └── icons.svg
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Blog/
│   │   │   ├── Articals.jsx
│   │   │   ├── Blog.jsx
│   │   │   └── Detailes.jsx
│   │   │
│   │   ├── Footer/
│   │   ├── Home/
│   │   ├── Layout/
│   │   ├── Navbar/
│   │   └── Who/
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── main.jsx
│   ├── mainsection.css
│   └── posts.json
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🧭 Application Routes

The application uses **React Router** to handle navigation between pages.

```text
/
├── /home
├── /blog
│   └── /blog/detailes/:id
└── /who
```

### Routes

* **Home** — Landing page and main visual experience.
* **Blog** — Photography articles section.
* **Article Details** — Dynamic page displaying a selected article using its ID.
* **Who** — Information/about section.

---

## 🧩 Component Architecture

The project follows a reusable component-based structure.

### Layout

The `Layout` component acts as the main application wrapper and provides the shared structure across pages.

### Navbar

Provides navigation between the main sections of the website.

### Home

The main landing experience of the website, designed around the photography theme.

### Blog

Acts as the parent route for the blog section and its nested pages.

### Articles

Displays the available photography articles and provides access to individual posts.

### Article Details

Uses a dynamic route:

```text
/blog/detailes/:id
```

to display the selected article based on its ID.

### Footer

Provides the shared footer section across the application.

### Who

Contains information about the website/project.

---

## 📊 Data Management

Photography articles are stored locally inside:

```text
src/posts.json
```

This keeps the content separated from the UI components and makes it easier to add or update articles without modifying the component structure.

The application dynamically renders the available posts and uses the article ID to display the corresponding details page.

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/SALMA-700/Adasa.git
```

### 2. Navigate to the project

```bash
cd Adasa
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available on the local development server provided by Vite.

---

## 📦 Available Scripts

```bash
npm run dev
```

Starts the development server.

```bash
npm run build
```

Creates the production build.

```bash
npm run preview
```

Previews the production build locally.

```bash
npm run lint
```

Runs ESLint to check the codebase.

---

## 🎯 What I Focused On

While developing Adasa, I focused on:

* Building a reusable **React component architecture**
* Creating a clear and maintainable **routing structure**
* Implementing **dynamic routes** for article details
* Separating content from UI using JSON data
* Creating a responsive experience across different screen sizes
* Keeping the UI clean and focused on visual content
* Practicing modern React development with reusable components

---

## 🔮 Future Improvements

Some possible improvements for future versions:

* 🔍 Add article search functionality
* 🏷️ Add categories and filtering
* ❤️ Add favorite/bookmark functionality
* 🌙 Add dark/light mode
* 🌐 Connect the blog to a real backend/API
* 📤 Add social sharing functionality
* 🖼️ Add an image gallery/lightbox
* ⚡ Improve image optimization and loading performance

---

## 👩‍💻 Developer

**Salma Mortada**

Front-End Developer passionate about building modern, responsive, and user-friendly web experiences.

### Tech Interests

`React.js` · `JavaScript` · `HTML5` · `CSS3` · `Tailwind CSS` · `Git & GitHub`

---

## 📄 License

This project was created for learning and portfolio purposes.
