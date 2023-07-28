import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Home = ({data}) => {
  const home_banner =data?.homebanner;
  return (
    <>
      <section>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">

        {
          home_banner && home_banner?.map((cur,i)=>(
            <SwiperSlide key={i}>
                <LazyLoadImage src={cur?.src} alt={cur?.alt_en} />
            </SwiperSlide>
          ))
        }


      
        
      </Swiper>
      </section>
    </>
  )
}

export default Home
