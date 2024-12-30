import { useEffect, useState } from "react";
import MenuCart from "../Common/MenuCart";
import axios from "axios";
import Cover from "../Common/Cover";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import ProductCart from "../Common/ProductCart";

const MenuSection = ({ bg, subTitle, title, categoryName }) => {
    const [offer, setOffer] = useState([])
    const location = useLocation()

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_SERVER_API_URL}/menus`)
            .then(res => {
                const offer = res?.data.filter(offer => offer.category === categoryName)
                setOffer(offer)
            })
    }, [categoryName]);

    return (
        <section className="my-[45px]">
            {
                location.pathname === '/our-shop' ? "" : <Cover bg={bg} subTitle={subTitle} title={title} />
            }

            <div className={`grid ${location.pathname === '/our-shop' ? 'grid-cols-3' : 'grid-cols-2 w-10/12'} gap-6 mx-auto mt-[45px]`}>
                {
                    offer.map(menu => location.pathname === '/our-shop' ? <ProductCart key={menu?._id} menu={menu} /> : <MenuCart key={menu?._id} menu={menu} />)
                }
            </div>
            {
                location.pathname === '/our-shop' ? "" : <button className="btn btn-neutral bg-transparent border-x-0 border-t-0 border-b-4 font-semibold block mx-auto mt-12 text-black text-2xl hover:text-white ">Order Your Favorite Food</button>
            }
        </section>
    );
};

MenuSection.propTypes = {
    bg: PropTypes.string,
    subTitle: PropTypes.string,
    title: PropTypes.string,
    categoryName: PropTypes.string
}

export default MenuSection;