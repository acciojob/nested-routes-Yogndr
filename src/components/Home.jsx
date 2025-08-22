import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <nav>
      <ul>
      <li><Link to="/">Home</Link></li>
      <br/>
      <li><Link to="/women">Women</Link></li>
      <br/>
      </ul>
      </nav>
       
    </div>
  )
}

export default Home