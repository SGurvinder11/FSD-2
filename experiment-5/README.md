🔹 AIM
To improve the performance of a React application by loading components only when required using lazy loading and code splitting.

🔹THEORY
In large React applications, loading all components at once increases the initial bundle size, leading to slower page load times. Lazy loading is a technique where components are loaded only when they are needed.

React provides the React.lazy() function to dynamically import components, and the Suspense component to display a fallback UI while the component is loading. This process is known as code splitting, where the application bundle is divided into smaller chunks.

By using lazy loading with routing, only the required component is fetched when a specific route is accessed. This improves application performance, reduces memory usage, and enhances the user experience.

🔹 STEPS / PROCEDURE
Install Node.js and create a new React project using Vite.
Open the project in a code editor (VS Code).
Create separate components such as Dashboard and Profile.
Implement lazy loading using React.lazy() for these components.
Wrap lazy-loaded components inside the Suspense component.
Configure routing using react-router-dom.
Apply CSS styling to center the content and improve UI appearance.
Run the application locally and verify that components load only when accessed.

🔹 COMMANDS USED

# Create React project using Vite
npm create vite@latest experiment-5

# Navigate to project folder
cd experiment-5

# Install dependencies
npm install

# Install React Router
npm install react-router-dom

# Start development server
npm run dev

🔹 LEARNING OUTCOMES
After completing this experiment, the student will be able to:
Understand the concept of lazy loading in React.
Implement code splitting using React.lazy() and Suspense.
Improve application performance by reducing initial load time.

Use React Router for route-based component loading.

Design a simple and attractive UI for React applications.

Deploy and test React applications using a local development server.

<img width="1885" height="908" alt="image" src="https://github.com/user-attachments/assets/1049fe89-3240-4208-8afe-f8e3c44c0a75" />
