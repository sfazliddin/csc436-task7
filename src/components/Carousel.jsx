import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/pulse/bootstrap.min.css';

const CarouselComponent = ({conversions}) => {

  // const conversionsHandler=(e)=>{
  //   setConversions(e.target.value);
  // }


  return (
    <div class="carousel-wrapper" >
    <Carousel infiniteLoop useKeyboardArrows>
        <div>
            <h1>USD to BTC</h1>
        </div>
        <div>
            <h1>EUR to BTC</h1>
        </div>
        <div>
            <h1>GBP to BTC</h1>
        </div>
    </Carousel>
</div>
  );
};

export default CarouselComponent;
