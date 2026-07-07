import "./App.css";
import React from "react";
import Header from './components/Header.js';
import Body from './components/Body.js';
import contactUs from "./components/ContactUs.js";
import About from "./components/About.js";
import RestaurentMenu from "./components/restaurentMenu.js";
import {BrowzerRouter,Outlet,RouterProvider} from 'react-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet/>
    </div>

  );
  const router=reactBrowzerRouter([
  {
    path:'/',
    element:<App/>,
    children:[
  {
    path:'/about',
    element:<About/>
  },
  {
    path:'/contactUs',
    element:<ContactUs/>
  },
  {
    path:'/restaurent/:id',
    element:<RestaurentMenu/>
  }
 ]
}])
}

root.render(<RouterProvider router={appRouter}/>);