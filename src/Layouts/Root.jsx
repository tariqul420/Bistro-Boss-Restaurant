import { Outlet } from "react-router-dom";
import Navbar from "../Components/Common/NavBar/Navbar";
import Footer from "../Components/Common/Footer";

const Root = () => {
    return (
        <div className="font-Inter max-w-[1920px] mx-auto">
            <Navbar />
            <div className="min-h-[calc(100vh-524px)]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;