import { useEffect } from "react";
import Cover from "../Components/Common/Cover";
import bannerBg from "../assets/shop/banner2.jpg";

const OurShop = () => {

    useEffect(() => {
        document.title = 'Our Shop || Bistro Boss Restaurant'
    }, []);

    return (
        <div className="-mt-[122px]">
            <Cover title="Our shop" subTitle="Would you like to try a dish?" bg={bannerBg} />
        </div>
    );
};

export default OurShop;