// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { EffectCube, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/effect-cube';
// import 'swiper/css/pagination';
// import './Swiper.css';

// export default function Swipercomponent() {
//   return (
//     <Swiper
//       effect="cube"
//       grabCursor={true}
//       cubeEffect={{
//         shadow: true,
//         slideShadows: true,
//         shadowOffset: 20,
//         shadowScale: 0.94,
//       }}
//       pagination={true}
//       modules={[EffectCube, Pagination]}
//       className="mySwiper"
//     >
//       <SwiperSlide>
//         <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="Nature 1" />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="Nature 2" />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="Nature 3" />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="Nature 4" />
//       </SwiperSlide>
//     </Swiper>
//   );
// }
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Swiper.css';
// import required modules
import { Mousewheel, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src="/cha6.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/cha1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/cha7.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/cha8.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/cha3.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/cha4.webp" alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
