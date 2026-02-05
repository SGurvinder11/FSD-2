
In this experiment, a basic Single Page Application (SPA) was developed using React as the frontend framework and Vite as the development environment. First, a new React project was created using Vite, which automatically generated the required project structure and configuration files. After setting up the project, all necessary dependencies were installed using npm and the development server was started to run the application locally.
Since Vite does not provide built-in routing, React Router was installed separately to enable client-side navigation. Different components such as Home and About were created to represent different views of the application. A main SPA component was then implemented using React Router, which mapped URLs to corresponding components and provided navigation links.
Finally, this SPA component was integrated into the main App.jsx file and the application was executed. When navigating between pages, the content updated dynamically without reloading the entire webpage, demonstrating the core behavior of a Single Page Application.

Commands Used:-
Create Vite React project
npm create vite@latest experiment-1
Move into project folder
cd experiment-1
Install dependencies
npm install
Start development server
npm run dev
Install React Router
nginx
npm install react-router-dom
Restart server
npm run dev

Objectives:-
The objectives of this experiment are:
To understand the concept of a Single Page Application (SPA).
To create a React application using Vite as a modern development tool.
To install and configure React Router for client-side routing.
To design and implement multiple React components (Home and About).
To enable navigation between pages without full page reload.
To demonstrate how dynamic content rendering works in an SPA.

Learning Outcomes:-
Understand the concept of a Single Page Application (SPA) and how it differs from traditional multi-page applications.
Create a React project using Vite and understand its basic project structure.
Install and use external libraries like React Router in a React application.
Implement client-side routing to navigate between different pages without reloading the browser.
Create and use reusable React components such as Home and About.
Understand how navigation works dynamically in an SPA.
Run and test a modern frontend application using npm run dev.







This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
