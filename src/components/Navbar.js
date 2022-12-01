import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <Link to='/'><h2>Home</h2></Link>
        <Link to='/about'><h2>About</h2></Link>
        <Link to='products'><h2>Products</h2></Link>

    </div>
  )
}

export default Navbar