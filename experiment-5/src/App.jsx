import { lazy, Suspense } from "react";

const Dashboard = lazy(() => import("./Dashboard"));
const Profile = lazy(() => import("./Profile"));

function App() {
  return (
    <Suspense fallback={<h3>Loading...</h3>}>
      <Dashboard />
      <Profile />
    </Suspense>
  );
}

export default App;
