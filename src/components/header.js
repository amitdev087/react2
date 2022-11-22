import React from 'react'
import "../style.css"
export default function Header() {
  return (
    <div>
      <nav className="navbar">
      <div className="logo">
        <h1>TS</h1>
      </div>
      <div className="menuitems">
        <ul>
          Home
        </ul>
        <ul>
          About
        </ul>
        <ul>
          Category
        </ul>
        <ul>
          Menu
        </ul>
        <ul>
          Testimonial
        </ul>
        <ul>
          Contact
        </ul>
      </div>
    </nav>
    </div>
  )
}
