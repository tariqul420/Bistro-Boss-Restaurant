import Heading from "../Common/Heading";
import { SwiperSlide, Swiper } from 'swiper/react';
import { Autoplay, Pagination } from "swiper/modules";
import img1 from "../../assets/home/slide1.jpg"
import img2 from "../../assets/home/slide2.jpg"
import img3 from "../../assets/home/slide3.jpg"
import img4 from "../../assets/home/slide4.jpg"

const OrderOnline = () => {
    return (
        <section className="mb-24">
            <Heading subTitle="From 11:00am to 10:00pm" title="Order online" />

            <div className="w-10/12 mx-auto">
                <Swiper
                    loop={true}
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Pagination]}
                >
                    <SwiperSlide className="relative">
                        <img className="w-full object-cover" src={img1} alt="Slide1" />
                        <p className="font-Cinzel text-3xl text-center font-bold text-white absolute z-[999] up" style={{
                            textShadow: '0 1px 0 #000',
                            top: '80%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)'
                        }}>Salads</p>
                    </SwiperSlide>
                    <SwiperSlide className="relative">
                        <img className="w-full object-cover" src={img2} alt="Slide2" />
                        <p className="font-Cinzel text-3xl text-center font-bold text-white absolute z-[999] up" style={{
                            textShadow: '0 1px 0 #000',
                            top: '80%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)'
                        }}>Soups</p>
                    </SwiperSlide>
                    <SwiperSlide className="relative">
                        <img className="w-full object-cover" src={img3} alt="Slide3" />
                        <p className="font-Cinzel text-3xl text-center font-bold text-white absolute z-[999] up" style={{
                            textShadow: '0 1px 0 #000',
                            top: '80%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)'
                        }}>pizzas</p>
                    </SwiperSlide>
                    <SwiperSlide className="relative">
                        <img className="w-full object-cover" src={img4} alt="Slide4" />
                        <p className="font-Cinzel text-3xl text-center font-bold text-white absolute z-[999] up" style={{
                            textShadow: '0 1px 0 #000',
                            top: '80%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)'
                        }}>desserts</p>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default OrderOnline;