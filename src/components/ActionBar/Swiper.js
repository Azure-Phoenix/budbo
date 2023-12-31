import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { StyledSwiper } from './styles';
import { mockSideBarContent } from './constants';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';

export default function SideBarSwiper() {
    return (
        <StyledSwiper className='bg-white border-top'>
            <Swiper
                slidesPerView={1}
                modules={[Pagination, Navigation]}
                navigation
                pagination={{ clickable: true, dynamicBullets: true }}>
                {mockSideBarContent.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className='d-flex align-items-center'>
                            <img src={slide.photo} alt="phone" className='me-3' style={{
                                width: 48,
                                borderRadius: '50%'
                            }} />
                            <div>
                                <h6>{slide.name}</h6>
                                <span className='text-colored'>{slide.invested}</span>
                            </div>
                        </div>
                        <p className='text-colored mt-4 mb-2 overflow-hidden'>
                            {slide.text}
                        </p>
                    </SwiperSlide>
                ))}
            </Swiper>
        </StyledSwiper>
    )
}