import React from "react";
import Carousel from "react-bootstrap/Carousel";

import "./CarouselSlider.scss";

function CarouselSlider() {
  return (
    <Carousel>
      <Carousel.Item>
        <section style={{maxHeight: 320}}>
          <img
            className="d-block h-100"
            src='/E9FSxNCWEAIm6L_-1.mp4-low.gif'
            alt="First slide"
            style={{marginLeft: "auto", marginRight: "auto", height: 320}}
          />
        </section>
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <section style={{maxHeight: 320}}>
          <video
            style={{marginLeft: "auto", marginRight: "auto", height: 320}}
            className="d-block w-100" autoPlay muted playsInline
            loop src="/hogesmoke.mp4" />
        </section>
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <section style={{maxHeight: 320}}>
          <video
            style={{marginLeft: "auto", marginRight: "auto", height: 320}}
            className="d-block w-100" autoPlay muted playsInline
            loop src="/hogesmoke.mp4" />
        </section>
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselSlider;