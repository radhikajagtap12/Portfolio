import "./App.css";
import { Suspense } from "react";
import pageRoute from "./PageRoute";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <>
      <Suspense fallback={<h1>Loading....</h1>}>
        <Provider store={store}>
          <RouterProvider router={pageRoute} />
        </Provider>
      </Suspense>
    </>
  );
}

export default App;
