import { useState } from 'react'
import Navbar from "./components/Navbar/Navbar";
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import Blog from './components/Blog/Blog';
import Who from './components/Who/Who';
import Detailes from './components/Blog/Detailes';
import Artiacls from './components/Blog/Articals';

let router =createBrowserRouter([
  {path:"", element:<Layout/>,children:[
    {index:true, element:<Home/>},
    { path: "home", element: <Home /> },
    {path:"blog" , element:<Blog/>, children:[
      {path:"detailes" , element:<Detailes/>},
      {index:true , element:<Artiacls/>}
    ]},
    {path:"who" , element:<Who/>},
  ]},
])
function App() {
    
  return (
    < >
        <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
