import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import PageNotFound from "./components/PageNotFound";

const Home = lazy(() => import("./pages/HomePage"));
const About = lazy(() => import("./pages/AboutPage"));
const Contact = lazy(() => import("./pages/ContactPage"));
const Login = lazy(() => import("./pages/LoginPage"));
const SignUp = lazy(() => import("./pages/SignUp"));

const pageRoute = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "/signup",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <SignUp />
      </Suspense>
    ),
  },
  {
    path: "/home",
    element: <Layout />,
    children: [
      {
        index: true, // This makes "/home" load the Home component
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "about", // Relative path
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "contact", // Relative path
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Contact />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />, // 404 page should be at root level
  },
]);

export default pageRoute;
