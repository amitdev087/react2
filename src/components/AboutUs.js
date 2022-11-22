import React from 'react'
import '../style.css'
import images from "../assets/images/images.png"
export default function AboutUs() {
  return (
    <div>
       <section className="about-section section-settings">
      <div className="about-container">
        <div className="about-container-text">
          <h1>About Us</h1>
          <h1>We have been making healthy food for 10 years.</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse ab
            eos omnis, nobis dignissimos perferendis et officia architecto,
            fugiat possimus eaque qui ullam excepturi suscipit aliquid optio,
            maiores praesentium soluta alias asperiores saepe commodi
            consequatur? Perferendis est placeat facere aspernatur!
          </p>
        </div>
        <div className="image-container">
          <img src={images} />
        </div>
      </div>
    </section>
    </div>
  )
}
