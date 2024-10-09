import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from "prop-types";
export default function Carousel({ slides, title }) {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2.3, 
    centerMode: true,  
    centerPadding: '0',  
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.1,  
          dots: true,
          centerMode: true,
          centerPadding: '0',
        },
      },
    ],
    arrows: false,  
  };

  return (
    <div className="carousel-container pl-[10.3%] sm:px-[4%] mt-[5.8%] xxl:mt-[4%] sm:mt-0 sm:mb-10">
      <style>
        {`
        .slick-dots {
          bottom: -10%; 
          display: flex !important;
          justify-content: end;  
          position: absolute;
          right: 4%;
        }

        .slick-dots li button:before {
          color: #888888; 
          opacity: 1;
          font-size: calc(1rem + 0.5vw); 
        }

        .slick-dots li.slick-active button:before {
          color: #fff; 
          opacity: 1;
        }

        .slick-slide > div {
          margin: 0 2%;  
        }

        .slick-list {
          padding: 0 10%;  
        }
        @media (max-width: 768px) {
         .slick-slide > div {
            margin: 0 4%;  
          }
        }
        `}
      </style>
      <h1 className="text-5xl text-white mb-4 sm:mb-8 sm:ml-4">{title}</h1>
      {slides.length > 0 ? (
        <Slider {...settings}>
          {slides.map((slide) => (
            <div key={slide.id} className="m-[1%]">
              <img className="rounded-3xl ml-[32%] sm:ml-[11%]" src={slide.image} alt={slide.alt} />
            </div>
          ))}
        </Slider>
      ) : null}
    </div>
  );
}

Carousel.propTypes = {
  slides: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
}