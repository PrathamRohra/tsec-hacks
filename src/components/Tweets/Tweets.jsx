import React from 'react'
import './tweets.css'
import  Img1  from '../../images/img1.jpeg'
import  Img2  from '../../images/img2.jpeg'
import  Img3  from '../../images/img3.jpeg'
import  Img4  from '../../images/img4.jpeg'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Tweets = () => {
   return (
      <div className='tweet-container'>
         <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            className='swiper-tweet'
         >
            <SwiperSlide className='tweet'><img src={Img1} alt="Tweets" /></SwiperSlide>
            <SwiperSlide className='tweet'><img src={Img2} alt="Tweets" /></SwiperSlide>
            <SwiperSlide className='tweet'><img src={Img3} alt="Tweets" /></SwiperSlide>
            <SwiperSlide className='tweet'><img src={Img4} alt="Tweets" /></SwiperSlide>
         </Swiper>

      </div>
   )
}

export default Tweets;