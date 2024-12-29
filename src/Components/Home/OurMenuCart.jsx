import axios from "axios";
import Heading from "../Common/Heading";
import { useEffect, useState } from "react";
import MenuCart from "../Common/MenuCart";

const OurMenuCart = () => {
    const [menus, setMenus] = useState([])

    useEffect(() => {
        axios.get('/menu.json')
            .then(res => {
                const popular = res?.data.filter(menu => menu.category === "popular")
                setMenus(popular)
            })
    }, []);

    return (
        <section className="w-10/12 mx-auto">
            <Heading subTitle="Check it out" title="FROM OUR MENU" />

            <div className="grid grid-cols-2 gap-6">
                {
                    menus.map(menu => <MenuCart key={menu?._id} menu={menu} />)
                }
            </div>
            <button className="btn btn-neutral bg-transparent border-x-0 border-t-0 border-b-4 font-semibold block mx-auto mt-12 text-black text-2xl hover:text-white ">Read More</button>
        </section>
    );
};

export default OurMenuCart;