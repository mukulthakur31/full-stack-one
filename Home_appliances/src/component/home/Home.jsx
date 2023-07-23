import React from 'react'
import IMG1 from '../../Assets/img1.jpg'
import IMG2 from '../../Assets/img2.jpg'
import IMG3 from '../../Assets/image3.jpg'
import './home.css'
import {Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data=[
  {
    image:IMG1,
    heading:'Handmade Kitchen Stools'
  },
  {
    image:IMG2,
    heading:'Kids Seeper Bed'
  },
  {
    image:IMG3,
    heading:'Large Dining Table '
  }
]
const Home = () => {
  return (
       <header>
      <div id='home' className='h-container'>
   <Swiper className='high'
   modules={[Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{clickable:true}}

>
    {
      data.map(({image,heading},index) =>{
        return(
          <SwiperSlide key={index} className='width-c' >
            <div className='home-container'>
            <div className='modify1'>
              <h1 >{heading}</h1>
              <button className='btn'>Shop now</button>
              </div>
              <div>
              <img src={image}/>
              </div>
              </div>
          </SwiperSlide>
        )
      })
    }
   </Swiper>
   </div>
   </header>
  )
}

export default Home