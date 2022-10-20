import React, { Component } from "react";
import Slider from "react-slick";
import VideoModal from "../../components/VideoComponent/Video";

export default class Home extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1150,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="slider-content ">
        <div className="main-slide">
          <h2> Popular professional services </h2>
          <Slider {...settings}>
            <div className="slider-card">
              <img src="/img/logo.webp" alt="" />
            </div>
            <div className="slider-card">
              <img src="/img/translation.webp" alt="" />
            </div>
            <div className="slider-card">
              <img src="/img/voice.webp" alt="" />
            </div>
            <div className="slider-card">
              <img src="/img/seo.webp" alt="" />
            </div>
            <div className="slider-card">
              <img src="/img/data.webp" alt="" />
            </div>
            <div className="slider-card">
              <img src="/img/animated.jfif" alt="" />
            </div>
            <div className="slider-card">
              <img src="/img/book.webp" alt="" />
            </div>
          </Slider>
        </div>
        <div className="free-talent">
          <div className="container">
            <div className="row">
              <div className="col-5">
                <div className="talent-content">
                  <h3>A whole world of freelance talent at your fingertips</h3>
                  <div className="main-content">
                    <div className="content">
                      <div className="title">
                        <i className="fa-regular fa-circle-check"></i>
                        <h5>The best for every budget</h5>
                      </div>
                      <div className="text">
                        <p>
                          Find high-quality services at every price point. No
                          hourly rates, just project-based pricing.
                        </p>
                      </div>
                    </div>
                    <div className="content">
                      <div className="title">
                        <i className="fa-regular fa-circle-check"></i>
                        <h5>Quality work done quickly</h5>
                      </div>
                      <div className="text">
                        <p>
                          Find the right freelancer to begin working on your
                          project within minutes.
                        </p>
                      </div>
                    </div>
                    <div className="content">
                      <div className="title">
                        <i className="fa-regular fa-circle-check"></i>
                        <h5>Protected payments, every time</h5>
                      </div>
                      <div className="text">
                        <p>
                          Always know what you'll pay upfront. Your payment
                          isn't released until you approve the work.
                        </p>
                      </div>
                    </div>
                    <div className="content">
                      <div className="title">
                        <i className="fa-regular fa-circle-check"></i>
                        <h5>24/7 support</h5>
                      </div>
                      <div className="text">
                        <p>
                          Questions? Our round-the-clock support team is
                          available to help anytime, anywhere.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="video-content">
                  {/* <img src="img/bg-video.webp" alt="" /> */}
                  <VideoModal />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="explore">
          <div className="container">
            <h2>Explore the marketplace</h2>
            <ul>
              <li>
                <a href="">
                  <img src="img/graphic.svg" alt="graphic" />
                  Graphics & Design
                </a>
              </li>
              <li>
                <a href="">
                  <img src="img/online-marketing.svg" alt="graphic" />
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="">
                  <img src="img/writing.svg" alt="graphic" />
                  Writing & Translation
                </a>
              </li>
              <li>
                <a href="">
                  <img src="img/video.svg" alt="graphic" />
                  Video & Animation
                </a>
              </li>
              <li>
                <a href="">
                  <img src="img/music.svg" alt="graphic" />
                  Music & Audio
                </a>
              </li>
              <li>
                <a href="">
                  <img src="img/programming.svg" alt="graphic" />
                  Programing & Tech
                </a>
              </li>
              <li>
                <a href="">
                  <img src="img/business.svg" alt="graphic" />
                  Business
                </a>
              </li>
              <li>
                <a href="">
                  <img src="img/lifestyle.svg" alt="graphic" />
                  Lifestyle
                </a>
              </li>
              <li>
                <a href="">
                  <img src="img/data.svg" alt="graphic" />
                  Data
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
