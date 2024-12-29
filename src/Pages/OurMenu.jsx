import { useEffect } from "react";
import Cover from "../Components/Common/Cover";
import bannerBg from "../assets/menu/banner3.jpg";
import Heading from "../Components/Common/Heading";

const OurMenu = () => {

    useEffect(() => {
        document.title = 'Our Menu || Bistro Boss Restaurant'
    }, []);

    return (
        <div className="-mt-[122px]">
            <Cover title="Our menu" subTitle="Would you like to try a dish?" bg={bannerBg} />
            <Heading subTitle="Don't miss" title="TODAY'S OFFER" />

        </div>
    );
};

export default OurMenu;