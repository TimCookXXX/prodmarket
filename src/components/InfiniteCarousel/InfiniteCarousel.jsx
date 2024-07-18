/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const InfiniteCarousel = ({ items }) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={`${item.name}-${index}`} style={{ margin: "0 10px" }}>
            <img
              src={item.logo}
              alt={item.name}
              style={{ height: "80px", width: "auto", margin: "0 auto" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default InfiniteCarousel;
