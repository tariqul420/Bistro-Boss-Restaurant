import "react-responsive-carousel/lib/styles/carousel.min.css";
import Banner from "../Components/Home/Banner";
import OrderOnline from "../Components/Home/OrderOnline";
import BistroBoss from "../Components/Home/BistroBoss";

const Home = () => {
    return (
        <div>
            <Banner />
            <OrderOnline />
            <BistroBoss />
        </div>
    );
};

export default Home;