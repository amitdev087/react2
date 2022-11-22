import React from 'react'
import "../style.css"
import images from "../assets/images/images.png"
export default function Items() {
  return (
    <div>
       <section className="section-iem section-settings">
      <h1 className="item-heading">Aaj kya khana hai</h1>
      <div className="item-list">
        <div className="items">
          <img src={images}  />
          <div className="item-details">
            <h2>Food Menu Item1</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
              quae.
            </p>
            <p><strong>Price:250</strong></p>
          </div>
        </div>
        <div className="items">
          <img src={images}  />
          <div className="item-details">
            <h2>Food Menu Item2</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
              quae.
            </p>
            <p><strong>Price:250</strong></p>
          </div>
        </div>
        <div className="items">
          <img src={images}  />
          <div className="item-details">
            <h2>Food Menu Item3</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
              quae.
            </p>
            <p><strong>Price:250</strong></p>
          </div>
        </div>
        <div className="items">
          <img src={images}  />
          <div className="item-details">
            <h2>Food Menu Item4</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
              quae.
            </p>
            <p><strong>Price:250</strong></p>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
