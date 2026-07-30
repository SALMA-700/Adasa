import React from 'react'
import "../../mainsection.css"
import Artiacls from "./Articals"
import { Outlet } from 'react-router-dom'
import Detailes from "./Detailes"
export default function Blog() {
  return (
    <>
    
      <Outlet/>
      </>
  )
}
