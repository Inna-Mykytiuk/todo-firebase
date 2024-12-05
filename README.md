# ToDo Application

Welcome to the **ToDo Application**, a robust task management tool designed with modern technologies to help users organize their daily activities effectively.

---

## Table of Contents

- [Routing](#routing)
- [Features](#features)
- [Getting Started](#getting-started)
- [Technologies Used](#technologies-used)

---

## Routing

The application includes the following routes:

- **Home Page (`/`)**  
  A welcoming page with a greeting message and a link directing users to the login page.

- **Login Page (`/login`)**  
  Allows users to authenticate themselves. If not registered, they are redirected to the registration page.

- **Registration Page (`/register`)**  
  Enables users to create a new account to access the application's features.

- **Dashboard (`/dashboard`)**  
  Accessible only to authenticated users, this page displays the task management interface.

---

## Features

1. **Authentication:**

   - Users can register and log in through Firebase Authentication.
   - Only authenticated users can access the dashboard.

2. **Task Management:**

   - Add tasks with a **title** and **description** using a simple form.
   - View a list of tasks with details such as the title, description, and creation timestamp.
   - Edit or delete tasks directly on the dashboard.

3. **Data Storage:**

   - All task data is stored securely in Firebase Firestore.
   - Each task is represented as a document within the `tasks` collection.

4. **Server-Side Rendering (SSR):**

   - Server-side rendering is implemented for content like the dashboard to enhance performance.
   - Cached templates improve load times, with dynamic data fetched from Firebase on the client side.

5. **Validation and Notifications:**

   - Real-time form validation ensures proper data entry.
   - Notifications (via React-Toastify) inform users of task actions such as creation, updates, or deletions.

6. **Responsive Design:**

   - The application is fully optimized for desktop, tablet, and mobile devices.

7. **Deployment:**
   - Hosted on Vercel.

---

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository: `git clone https://github.com/Inna-Mykytiuk/todo-app.git`
2. Install dependencies: `npm install`
3. Run the app: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) in your browser (Note: the port may be changed if 3000 port is occupied by another website).

## Technologies Used

1. **Next.js:**

   - Next.js powers the app by enabling server-side rendering (SSR) and static site generation (SSG), improving performance and SEO. Its built-in routing system makes it easy to manage navigation and dynamic pages.
   - Additionally, Next.js ensures that content is served efficiently, reducing time to first byte and offering seamless page transitions.

2. **TypeScript:**

   - TypeScript is used to add static type checking to JavaScript, reducing runtime errors and improving the developer experience with autocompletion and type safety.
   - This ensures that the codebase is more maintainable and less error-prone, especially as the application scales or undergoes future updates.

3. **Firebase Authentication:**

   - Firebase Authentication provides a simple and secure authentication system, allowing users to sign up and log in using various methods (email/password, social logins).
   - It integrates easily with other Firebase services and ensures a secure and reliable authentication flow, keeping user data safe.

4. **Firebase Firestore:**

   - Firebase Firestore is used for real-time, scalable NoSQL database storage. It stores task data as documents in collections and offers real-time updates, making it ideal for dynamic applications.
   - Firestore’s integration with Firebase Authentication ensures that tasks are securely stored and tied to specific users, enabling personalized task management.

5. **Tailwind CSS:**

   - Tailwind CSS is a utility-first CSS framework that allows for rapid and customizable UI development. It enables developers to apply styles directly in HTML, reducing the need for custom CSS files.
   - Tailwind’s responsive design utilities make it easy to create a mobile-friendly layout that adapts to various screen sizes.

6. **React-Toastify:**
   - React-Toastify provides a simple way to show notifications in a React application, enhancing user experience with non-intrusive alerts for task actions such as creation, updates, or deletions.
   - Its flexible configuration options allow for easy customization of toast messages, making it ideal for notifying users about app events in real time.

![preview](https://github.com/Inna-Mykytiuk/todo-firebase/blob/main/public/assets/presentation.jpg)
