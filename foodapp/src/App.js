import "./App.css";
import employeeData from './components/utils/employeeData.js';
import Header from "./components/Header";
import Body from "./components/Body";
import ContactUs from "./components/ContactUs";
import About from "./components/About";
import RestaurentMenu from "./components/restaurentMenu";

import { createBrowserRouter, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element:
        <About emp={employeeData}/> 
        // <>
        // <About name={"firstName"}/>
        // <About name={"SecondName"}/>
        // </>
      },
      {
        path: "/contactUs",
        element: <ContactUs />,
      },
      {
        path: "/restaurent/:resId",
        element: <RestaurentMenu />,
      },
    ],
  },
]);