import React, {useEffect} from "react";

import useGetData from "../../../hooks/useGetData";

import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Spinner from "../Spinner/Spinner";

import "./CarouselSlider.scss";

const CarouselSlider = () => {

  const { data, loading, fetchData } = useGetData("data/sliderGaming");

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading || !data) {
    return <Spinner size="large" />
  }

  return (
    <Container fluid className="carousel-wrapper">
      <Container className="carousel-container">

        <div className="top">
          <h3>Gaming</h3>
          <div className="text">
            Community eGaming, HOGE style. A decentralized community of professional and amateur gamers that compete in tournaments and build independent games across the metaverses.
          </div>
        </div>

        <div className="separator" />

        <Carousel controls>
          {data.map(({title, text, image}, index) => (
            <Carousel.Item key={index}>
              <div className="carousel-content">
                <div className="carousel-top"><h4>{title}</h4></div>
                <div className="carousel-bottom">
                  <div className="text">
                    <p>{text}</p>
                  </div>
                  <div className="image">
                    <img src={image} />
                  </div>
                </div>
              </div>
            </Carousel.Item>
            ))}
        </Carousel>

      </Container>
    </Container>
  );
}

export default CarouselSlider;