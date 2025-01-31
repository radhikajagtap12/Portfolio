import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "../assets/banner.jpg";
import Image1 from "../assets/banner1.webp";
import Image2 from "../assets/banner2.webp";

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [Image, Image1, Image2];

  return (
    <div className="carousel" style={{ width: "100%", margin: "auto" }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`carousel-${index}`}
              style={{
                width: "100%",
                height: "400px",
                display: "block",
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
