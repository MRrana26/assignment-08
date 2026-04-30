"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';   

const Banner = () => {
    return (
        <div className='my-10'>
            <Swiper className='w-[90%] md:w-[90%] lg:w-[90%]  mx-auto'
                modules={[Navigation, Autoplay]}
                navigation={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
                loop={true}
            >
                <SwiperSlide>
                    <Image src={'/tiles_cover_01.png'} alt='Slider 01' width={1920} height={600} className="w-full h-50 md:h-85 lg:h-105 rounded-2xl object-cover" />
                </SwiperSlide>

                <SwiperSlide>
                    <Image src={'/tiles_cover_02.png'} alt='Slider 02' width={1920} height={600} className="w-full h-50 md:h-85 lg:h-105 rounded-2xl object-cover" />
                </SwiperSlide>

                <SwiperSlide>
                    <Image src={'/tiles_cover_03.png'} alt='Slider 03' width={1920} height={600} className="w-full h-50 md:h-85 lg:h-105 rounded-2xl object-cover" />
                </SwiperSlide>
            </Swiper>

        </div>
    );
};

export default Banner;