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
     <li><Link to="grooming">Grooming</Link></li><br />
       <li><Link to="shirt">Shirt</Link></li><br />
       <li><Link to="trouser">Trouser</Link></li><br />
       <li><Link to="jewellery">Jewellery</Link></li><br />
      </ul>
       <Outlet/>



    </div>
  )
}

export default Women