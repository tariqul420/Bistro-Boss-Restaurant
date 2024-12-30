import { useEffect } from "react";
import Cover from "../Components/Common/Cover";
import bannerBg from "../assets/menu/banner3.jpg";
import TodayOffer from "../Components/OurMenu/TodayOffer";
import MenuSection from "../Components/OurMenu/MenuSection";
import dessertBg from "../assets/menu/dessert-bg.jpeg"
import pizzaBg from "../assets/menu/pizza-bg.jpg"
import saladsBg from "../assets/menu/salad-bg.jpg"
import soupsBg from "../assets/menu/soup-bg.jpg"

const OurMenu = () => {

    useEffect(() => {
        document.title = 'Our Menu || Bistro Boss Restaurant'
    }, []);

    return (
        <div className="-mt-[122px]">
            <Cover title="Our menu" subTitle="Would you like to try a dish?" bg={bannerBg} />
            <TodayOffer />
            <MenuSection bg={dessertBg} title="DESSERTS" subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." categoryName="dessert" />
            <MenuSection bg={pizzaBg} title="Pizzas" subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." categoryName="pizza" />
            <MenuSection bg={saladsBg} title="Salads" subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." categoryName="salad" />
            <MenuSection bg={soupsBg} title="Soups" subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." categoryName="soup" />
        </div>
    );
};

export default OurMenu;