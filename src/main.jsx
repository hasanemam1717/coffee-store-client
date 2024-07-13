import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import AddCoffee from './Components/AddCoffee';
import UpdateCOffee from './Components/UpdateCOffee';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  }, 
   {
    path: "/addcoffee",
    element: <AddCoffee></AddCoffee>,
  }, 
   {
    path: "/updatecoffee",
    element: <UpdateCOffee></UpdateCOffee>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
