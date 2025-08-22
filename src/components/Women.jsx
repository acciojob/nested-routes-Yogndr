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
     <ul>
     <li><Link to="grooming">Grooming</Link></li>
       <li><Link to="shirt">Shirt</Link></li>
       <li><Link to="trouser">Trouser</Link></li>
       <li><Link to="jewellery">Jewellery</Link></li>
      </ul>
       <Outlet/>



    </div>
  )
}

export default Women