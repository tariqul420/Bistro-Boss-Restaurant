import "react-responsive-carousel/lib/styles/carousel.min.css";
import Banner from "../Components/Home/Banner";
import OrderOnline from "../Components/Home/OrderOnline";
import BistroBoss from "../Components/Home/BistroBoss";
import OurMenuCart from "../Components/Home/OurMenuCart";
import OurMenu from "../Components/Home/OurMenu";
import Testimonials from "../Components/Home/Testimonials";
import CallUs from "../Components/Home/CallUs";

const Home = () => {
    return (
        <div className="-mt-[122px]">
            <Banner />
            <OrderOnline />
            <BistroBoss />
            <OurMenuCart />
            <CallUs />
            <OurMenu />
            <Testimonials />
        </div>
    );
};

export default Home;