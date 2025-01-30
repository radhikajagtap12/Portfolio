import "./App.css";
import { Suspense } from "react";
import pageRoute from "./pageRoute";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <Suspense fallback={<h1>Loading....</h1>}>
      <RouterProvider router={pageRoute} />
    </Suspense>
  );
}

export default App;
