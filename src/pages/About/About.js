import React from "react";

import Translate from "../../common/Translate";
import CarouselSlider from "../../common/components/Carousel/CarouselSlider";
import Button from "../../common/components/Button/Button";

export const About = () => (
  <div className="page home">
    <CarouselSlider />
    <div className="content">
      <Translate k="PAGE.ABOUT.TEXT" />
      <Button />
    </div>
  </div>
)

export default About;