import Heading from "../../Components/Common/Heading"
import '@smastrom/react-rating/style.css'
import axios from "axios";
import { Rating } from "@smastrom/react-rating";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import { BiSolidQuoteLeft } from "react-icons/bi";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../Common/LoadingSpinner";

const Testimonials = () => {

    const { data: review = [], isLoading } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_SERVER_API_URL}/reviews`)
            return data
        }
    })

    if (isLoading) return <LoadingSpinner smallHeight={false} />

    return (
        <section className="mb-[130px]">
            <Heading subTitle="What Our Clients Say" title="TESTIMONIALS" />

            <div>
                <Swiper className="w-9/12 mx-auto" navigation={true} modules={[Navigation]}>
                    {
                        review?.map(review => <SwiperSlide key={review?._id}>
                            <div className="px-28 flex items-center justify-center flex-col">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review?.rating}
                                    readOnly
                                />

                                <BiSolidQuoteLeft size={100} className="my-[47px]" />

                                <p className="text-center">{review?.details}</p>
                                <h3 className="text-3xl font-Cinzel font-semibold text-[#cd9003]">{review?.name}</h3>
                            </div>
                        </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;