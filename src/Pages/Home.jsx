import "react-responsive-carousel/lib/styles/carousel.min.css";
import Banner from "../Components/Home/Banner";
import OrderOnline from "../Components/Home/OrderOnline";
import BistroBoss from "../Components/Home/BistroBoss";
import OurMenu from "../Components/Home/OurMenu";

const Home = () => {
    return (
        <div className="-mt-[122px]">
            <Banner />
            <OrderOnline />
            <BistroBoss />
            <OurMenu />
        </div>
    );
};

export default Home;