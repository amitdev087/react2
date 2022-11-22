import React from 'react'
import "../style.css"
import images from "../assets/images/images.png"
export default function ContactUs() {
  return (
    <div>
          <section className="section-contact section-settings">
      <div className="contact-container">
        <div className="contact-image">
          <img src={images}  />
        </div>
        <div className="contact-form">
          <h2>Contact US</h2>
          <input type="text" />
          <br />
          <input type="text" />
          <br />
          <input type="text-area" />
        </div>
      </div>
    </section>
    </div>
  )
}
