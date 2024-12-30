import axios from "axios";
import { useEffect, useState } from "react";
import Heading from "../Common/Heading";
import MenuCart from "../Common/MenuCart";

const TodayOffer = () => {
    const [offer, setOffer] = useState([])

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_SERVER_API_URL}/menus`)
            .then(res => {
                const offer = res?.data.filter(offer => offer.category === "offered")
                setOffer(offer)
            })
    }, []);

    return (
        <section className="w-10/12 mx-auto">
            <Heading subTitle="Don't miss" title="TODAY'S OFFER" />

            <div className="grid grid-cols-2 gap-6">
                {
                    offer.map(menu => <MenuCart key={menu?._id} menu={menu} />)
                }
            </div>
            <button className="btn btn-neutral bg-transparent border-x-0 border-t-0 border-b-4 font-semibold block mx-auto mt-12 text-black text-2xl hover:text-white ">Order Your Favorite Food</button>
        </section>
    );
};

export default TodayOffer;