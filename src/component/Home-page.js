import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import imgca1 from '../assets/khungcanh.jpeg';
import imgca2 from '../assets/baber.jpeg';
import imgca3 from '../assets/place.webp';
import 'bootstrap/dist/css/bootstrap.css';
import '../srccss/Home.css';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import {Best_hair_dresser, celeboration } from './data/data';
import img1 from '../assets/undercut.jpeg';
import img2 from '../assets/side-part.webp';
import img3 from '../assets/mullet.webp';
import img4 from '../assets/mohican.jpeg';
import img5 from '../assets/layer.jpeg';
import img6 from '../assets/5:5.jpeg';
import img7 from '../assets/romano.png';
import img8 from '../assets/dabo.jpeg';
import img9 from '../assets/cetaphill.jpeg';
import img10 from '../assets/lady-killer.jpeg';
import img11 from '../assets/loreal.jpeg';
import img12 from '../assets/sap-vuot-toc.jpeg';


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
     
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 imgca2"
        src={imgca2}
        alt="Second slide"
      />

     
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 imgca3"
        src={imgca3}
        alt="Third slide"
      />

      
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

    <section id="portfolio_area">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="port_title text-center">
            
            <h2>Our Famous Hairstyle </h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
          <div className="project_item text-center mt--40">
            <div className="project_item_img">
              <div className="project_thumbnail">
                <img src={img1} alt="" />
              </div>
            </div>
            <div className="project_item_content">
              <div className="project_inner">
                <div className="project_head">
                  <h4 className="project_title">Undercut</h4>
                </div>
                <div className="project_hover">
                  <p>
                  Asymertrical undercut hay c??n g???i l?? ki???u t??c nam b???t ?????i x???ng. 
                  Ki???u t??c n??y c?? ph???n ch??n t??c c???o g???n ?????n ?????nh ?????u.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
       
        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
          <div className="project_item text-center mt--40">
            <div className="project_item_img">
              <div className="project_thumbnail">
                <img src={img2} alt="" />
              </div>
            </div>
            <div className="project_item_content">
              <div className="project_inner">
                <div className="project_head">
                  <h4 className="project_title">Side Part</h4>
                </div>
                <div className="project_hover">
                  <p>
                  Side Part l?? ki???u t??c v?? c??ng l???ch l??m v?? kh??ng bao gi??? l???i th???i d??nh cho ph??i m???nh. 
                  Ki???u Side Part s??? chia t??c v?? ch???i t??c c???a c??c ch??ng trai v??? c??ng m???t b??n
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
          <div className="project_item text-center mt--40">
            <div className="project_item_img">
              <div className="project_thumbnail">
                <img src={img3} alt="" />
              </div>
            </div>
            <div className="project_item_content">
              <div className="project_inner">
                <div className="project_head">
                  <h4 className="project_title">Mullet</h4>
                </div>
                <div className="project_hover">
                  <p>
                  T??c mullet hay c??n ???????c g???i l?? ???t??c c?? ?????i???. C?? ?????c ??i???m kh?? ?????c bi???t khi ph???n t??c 
                  hai b??n ?????u ???????c c???t ng???n ho???c c???o ??i, ph???n t??c m??i v?? ph???n t??c ??u??i th?????ng 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
       
        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
          <div className="project_item text-center mt--40">
            <div className="project_item_img">
              <div className="project_thumbnail">
                <img src={img4} alt="" />
              </div>
            </div>
            <div className="project_item_content">
              <div className="project_inner">
                <div className="project_head">
                  <h4 className="project_title">Mohican</h4>
                </div>
                <div className="project_hover">
                  <p>
                  Mohican l?? ki???u t??c quen thu???c c???a c???a c??c b???n nam Vi???t Nam nh???ng n??m g???n ????y. 
                  Mohican l?? ki???u t??c c?? ph???n ngh???ch ng???m, n???i lo???n, v???i m??i t??c ???????c c???o, c???t ng???n 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
       
        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
          <div className="project_item text-center mt--40">
            <div className="project_item_img">
              <div className="project_thumbnail">
                <img src={img5} alt="" />
              </div>
            </div>
            <div className="project_item_content">
              <div className="project_inner">
                <div className="project_head">
                  <h4 className="project_title">Layer ng???n</h4>
                </div>
                <div className="project_hover">
                  <p>
                  t??c layer nam ng???n, xo??n nh??? b???ng b???nh ????? t??ng ph???n quy???n r??, 
                  thu h??t cho g????ng m???t c???a m??nh nh??.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
       
        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
          <div className="project_item text-center mt--40">
            <div className="project_item_img">
              <div className="project_thumbnail">
                <img src={img6} alt="" />
              </div>
            </div>
            <div className="project_item_content">
              <div className="project_inner">
                <div className="project_head">
                  
                  <h4 className="project_title">Side-part 5/5</h4>
                </div>
                <div className="project_hover">
                  <p>
                  V???i ki???u t??c side part 5/5, ng?????i ????n ??ng s??? h???u ki???u t??c n??y 
                  s??? d??? d??ng chi???m ???????c c???m t??nh b???i s??? ??i???n trai, phong c??ch l???ch l??m
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </section>
    
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
  <section id="our-clients">
  <div className="container">
    <div className="row">
      <div className="col-lg-12 text-center">
        <div className="client-title">
          
          <h2 className="project_title">Our Donor</h2>
          
        </div>
      </div>
    </div>
    <div className="row .client_content">
      <div className="col-lg-4 col-md-6 col-sm-6 col-12 client_item">
        <img src={img7} alt=""/>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6 col-12 client_item">
      <img src={img8} alt=""/>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6 col-12 client_item">
      <img src={img9} alt=""/>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6 col-12 client_item">
      <img src={img10} alt=""/>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6 col-12 client_item">
      <img src={img11} alt=""/>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6 col-12 client_item">
      <img src={img12} alt=""/>
      </div>
    </div>
  </div>
</section>

    </div>
    
  )
}
