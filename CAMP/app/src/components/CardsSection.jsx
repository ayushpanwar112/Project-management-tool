import React from "react";
import Slider from "react-slick";
import Card from "./Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import camps from "./camp.json"

const CardsSection = () => {

 const topcamp=camps.filter(camp => camp.top === true)
  // Fetch data from JSON or API


  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Top Rated Camps ⛺🔥
      </h2>
      <Slider {...settings}>
        {topcamp.length > 0 ? (
          topcamp.map((camp) => <Card key={camp.id} {...camp} />)
        ) : (
          <p className="text-center text-gray-600 ">No top camps available.</p>
        )}
      </Slider>
    </div>
  );
};

export default CardsSection;
