import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import imgca1 from '../assets/khungcanh.jpeg';
import imgca2 from '../assets/baber.jpeg';
import imgca3 from '../assets/place.jpeg';
import 'bootstrap/dist/css/bootstrap.css';
import '../srccss/Home.css';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import {Best_hair_dresser, celeboration } from './data/data';

export default function Homepage() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
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
      };
      const setting = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
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
      };
  return (
    <div div className='main-content'>
    <div className='carousel'>
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100 h-2 imgca1"
        src={imgca1} 
        alt="First slide"
      />
      <Carousel.Caption>
        <h3 className='first-slide'>First slide label</h3>
        <p className='first-slide'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 imgca2"
        src={imgca2}
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3 className='second-slide'>Second slide label</h3>
        <p className='second-slide'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 imgca3"
        src={imgca3}
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
    </div>

    <div className='Best_hair_dresser'>
    <h2>Best Our Stylist</h2>
    <Slider {...settings }>
    {Best_hair_dresser.map((item)=>(
        <div className='card'>
        <div className='card-top'>
          <img src={item.Img} alt={item.title}/>
          <h1>{item.name}</h1>
          <p>{item.title}</p>
          </div>
        </div>
       ))}
    </Slider>
    </div>
    
  <div className='Service text-center '>
      <h1>What we can do for you</h1>
      <h4>OUR Best Service</h4>
    <div className='row content'>
      <div className='service-item col-12' >
      <a href='#' >
      <div className='service-logo'>
      <img src="https://img.icons8.com/color/48/000000/cut--v1.png"/>
      </div>
      <div className='service-text'>
      <h4>Haircuts</h4>
      <p>Haircuts and Shampoo</p>
      </div>
      </a>
      </div>

      <div className='service-item col-12' >
      <a href='#'>
      <div className='service-logo'>
      <img src="https://img.icons8.com/bubbles/50/000000/ginger-man-in-yellow-shirt.png"/>
      
      </div>
      <div className='service-text'>
      <h4>hair dying</h4>
      <p>dye your hair as you like</p>
      </div>
      </a>
      </div>

      <div className='service-item col-12' >
      <a href='#'>
      <div className='service-logo'>
      <img src="https://img.icons8.com/external-microdots-premium-microdot-graphic/64/000000/external-hair-beauty-cosmetics-microdots-premium-microdot-graphic.png"/>
      </div>
      <div className='service-text'>
      <h4>curling hair</h4>
      <p>curling hair with 8 level</p>
      </div>
      </a>
      </div>
    </div>
  </div>
    

  <div className='Celeb'>
  <h2>Celeb</h2>
  <Slider {...setting }>
  {celeboration.map((items)=>(
      <div className='card'>
      <div className='card-top1'>
        <img src={items.img} alt={items.name}/>
        <h1>{items.name}</h1>
         </div>
      </div>
     ))}
  </Slider>
  </div>

    </div>
    
  )
}
