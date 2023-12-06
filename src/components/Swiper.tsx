// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#ffffff84',
          '--swiper-pagination-color': '#fff',
          '--swiper-navigation-size': '30px',
          '--swiper-pagination-bullet-inactive-opacity': '0.5',
          '--swiper-pagination-bullet-size': '10px',
          '--swiper-pagination-bullet-horizontal-gap': '10px',
          '--swiper-pagination-bullet-vertical-gap': '10px',
          '--swiper-pagination-bullet-inactive-color': '#fff',
        }}
        slidesPerView={1}
        spaceBetween={20}
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation, Mousewheel, Keyboard, Autoplay]}
        className='max-w-[400px] max-h-[400px]'
      >
        <SwiperSlide className='text-center flex justify-center items-center bg-black rounded max-w-[90%] max-h-[90%]'>
          <img
            src='https://swiperjs.com/demos/images/nature-1.jpg'
            alt='Slide 1'
            className='block w-full h-full object-cover rounded opacity-80'
          />
          <div className='absolute top-[80%] left-0 w-full h-[65px] bg-black opacity-70'>
            <h1 className='font-bold'>Slide 1</h1>
          </div>
        </SwiperSlide>

        <SwiperSlide className='text-center flex justify-center items-center bg-black rounded max-w-[90%] max-h-[90%]'>
          <img
            src='https://swiperjs.com/demos/images/nature-2.jpg'
            alt='Slide 2'
            className='block w-full h-full object-cover rounded opacity-80'
          />
          <div className='absolute top-[80%] left-0 w-full h-[65px] bg-black opacity-70'>
            <h1 className='font-bold'>Slide 2</h1>
          </div>
        </SwiperSlide>

        <SwiperSlide className='text-center flex justify-center items-center bg-black rounded max-w-[90%] max-h-[90%]'>
          <img
            src='https://swiperjs.com/demos/images/nature-3.jpg'
            alt='Slide 3'
            className='block w-full h-full object-cover rounded opacity-80'
          />
          <div className='absolute top-[80%] left-0 w-full h-[65px] bg-black opacity-70'>
            <h1 className='font-bold'>Slide 3</h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
