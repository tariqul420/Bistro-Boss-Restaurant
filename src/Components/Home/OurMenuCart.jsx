import axios from "axios";
import Heading from "../Common/Heading";
import MenuCart from "../Common/MenuCart";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const OurMenuCart = () => {
    const { data: menus = [] } = useQuery({
        queryKey: ["menus"],
        queryFn: async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_SERVER_API_URL}/menus`)
            const popular = data.filter(menu => menu.category === "popular")
            return popular
        }
    })

    return (
        <section className="w-10/12 mx-auto">
            <Heading subTitle="Check it out" title="FROM OUR MENU" />

            <div className="grid grid-cols-2 gap-6">
                {
                    menus.map(menu => <MenuCart key={menu?._id} menu={menu} />)
                }
            </div>
            <Link to={'/our-menu'}>
                <button className="btn btn-neutral bg-transparent border-x-0 border-t-0 border-b-4 font-semibold block mx-auto mt-12 text-black text-2xl hover:text-white ">Read More</button>
            </Link>
        </section>
    );
};

export default OurMenuCart;