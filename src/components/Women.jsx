import React from 'react'
import { Link, Outlet, Route, Routes } from 'react-router-dom'
import Grooming from './Grooming'
import Shirt from './Shirt'
import Jewellery from './Jewellery'
import Trouser from './Trouser'

const Women = () => {
  return (
    <div>
     <p>Women Items:</p><br/>
     <Link to="grooming">Grooming</Link><br />
      <Link to="shirt">Shirt</Link><br />
      <Link to="trouser">Trouser</Link><br />
      <Link to="jewellery">Jewellery</Link><br />
       <Outlet/>



    </div>
  )
}

export default Women