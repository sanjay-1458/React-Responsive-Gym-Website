import React from 'react'
import './notfound.css'
import { Link } from 'react-router-dom'
function NotFound() {
  return (
    <section className='notfound'>
      <div className="container notfound__container">
        <h2>Page Not Found</h2>
        <Link to="/" className='btn'>Home Page</Link>
      </div>
    </section>
  )
}

export default NotFound