// Import Swiper
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


const Banner = () => {


    return (
        <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}

            style={{ width: '100%' ,height:'50vh'}}

        >
            <SwiperSlide> <img className='w-full  h-full object-cover rounded-b-3xl' src='/seinglefamily.jpg' alt='singleFamily'/></SwiperSlide>
            <SwiperSlide>  <img className='w-full  h-full object-cover rounded-b-3xl' src='/student.jpg' alt='studentPannal'/> </SwiperSlide>
            <SwiperSlide>  <img className='w-full  h-full object-cover rounded-b-3xl' src='/senior.jpg' alt='senior'/></SwiperSlide>
            <SwiperSlide> <img className='w-full  h-full object-cover rounded-b-3xl' src='/townhouse.jpg' alt='townhouse'/></SwiperSlide>
            <SwiperSlide> <img className='w-full  h-full object-cover rounded-b-3xl' src='/vacation.jpg' alt='vacation'/></SwiperSlide>
        </Swiper>
    );
};

export default Banner;
