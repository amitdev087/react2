import React from 'react'
import "../style.css"
import images from "../assets/images/images.png"
export default function CustomerFeedBack() {
  return (
    <div>
          <section calss="section-settings">
      <h1 className="item-heading">What our customer has to say</h1>
      <div className="customer-container">
        <div className="customer">
          <img src={images}  />
          <h3>Ram</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
            voluptas cupiditate aspernatur odit doloribus non.
          </p>
        </div>
        <div className="customer">
          <img src={images}  />
          <h3>Sham</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
            voluptas cupiditate aspernatur odit doloribus non.
          </p>
        </div>
        <div className="customer">
          <img src={images} />
          <h3>Ganesh</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
            voluptas cupiditate aspernatur odit doloribus non.
          </p>
        </div>
      </div>
    </section>
    </div>
  )
}
