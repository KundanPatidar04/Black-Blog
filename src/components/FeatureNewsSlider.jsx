import React from 'react'
import Slider from 'react-slick'
import { FeatureCard } from './FeatureCard';

export const FeatureNewsSlider = () => {

    function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, top: "100%", right: "40%", width: "30px", height: "30px" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, top: "100%", left: "40%", width: "30px", height: "30px"  }}
      onClick={onClick}
    />
  );
}
    let settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        initialSlide: 0,
        autoplay: false,
        // autoplaySpeed: 2000,
        cssEase: "linear",
        swipeToSlide:true,
        focusOnSelect:true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />, 
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }
  return (
    <section >
        <div className="container"> 
          <div className="heading-div"> 
            <h2 className="primary-heading">
              feature news
            </h2>
            <h3 className="secondary-heading">
              top of the week news
            </h3>
          </div>
          <div className="pb-5 slider-container">
            <Slider {...settings}>
              <FeatureCard count='1' title='The Season Courses And Salads Wow!' />
              <FeatureCard count='2' title='The Season Courses And Salads Wow!' />
              <FeatureCard count='3' title='The Season Courses And Salads Wow!' />
              <FeatureCard count='4' title='The Season Courses And Salads Wow!' />
              <FeatureCard count='5' title='The Season Courses And Salads Wow!' />
              <FeatureCard count='6' title='The Season Courses And Salads Wow!' />
              <FeatureCard count='7' title='The Season Courses And Salads Wow!' />
              <FeatureCard count='8' title='The Season Courses And Salads Wow!' />
              <FeatureCard count='9' title='The Season Courses And Salads Wow!' />
              <FeatureCard count='10' title='The Season Courses And Salads Wow!' />
              <FeatureCard count='11' title='The Season Courses And Salads Wow!' />
              <FeatureCard count='12' title='The Season Courses And Salads Wow!' />
              <FeatureCard count='13' title='The Season Courses And Salads Wow!' />
              <FeatureCard count='14' title='The Season Courses And Salads Wow!' />
            </Slider>
          </div>
        </div>
      </section>
  )
}
