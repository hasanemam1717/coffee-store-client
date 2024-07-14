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
    loader:() => fetch('http://localhost:5000/coffee')
  }, 
   {
    path: "/addCoffe",
    element: <AddCoffee></AddCoffee>,
  }, 
   {
    path: "/updateCoffe/:id",
    element: <UpdateCOffee></UpdateCOffee>,
    loader:({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
