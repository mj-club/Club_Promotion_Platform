import Carousel from "react-bootstrap/Carousel";
import React, { useContext } from "react";

const Showimg = ({ urls }) => {
  return (
    <Carousel>
      {urls.map((url) => {
        return (
          <Carousel.Item>
            <img className="d-block w-100" src={url} alt="First slide" />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default Showimg;
