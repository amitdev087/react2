import React from "react";
import "../style.css";
import images from "../assets/images/images.png"
export default function TypeFood() {
  return (
    <div>
      <section className="section-settings">
        <div className="types">
          <h1>Types of Food</h1>
        </div>
        <div classNameName="types-images">
          <img src={images} />
          <img src= {images} />
          <img src={images} />
        </div>
      </section>
    </div>
  );
}
