import { useEffect, useState } from "react";
import MenuCart from "../Common/MenuCart";
import axios from "axios";
import Cover from "../Common/Cover";
import PropTypes from "prop-types";

const MenuSection = ({ bg, subTitle, title, categoryName }) => {
    const [offer, setOffer] = useState([])

    useEffect(() => {
        axios.get('/menu.json')
            .then(res => {
                const offer = res?.data.filter(offer => offer.category === categoryName)
                setOffer(offer)
            })
    }, [categoryName]);

    return (
        <section className="my-[45px]">
            <Cover bg={bg} subTitle={subTitle} title={title} />

            <div className="grid grid-cols-2 gap-6 w-10/12 mx-auto mt-[45px]">
                {
                    offer.map(menu => <MenuCart key={menu?._id} menu={menu} />)
                }
            </div>
            <button className="btn btn-neutral bg-transparent border-x-0 border-t-0 border-b-4 font-semibold block mx-auto mt-12 text-black text-2xl hover:text-white ">Order Your Favorite Food</button>
        </section>
    );
};

MenuSection.propTypes = {
    bg: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    categoryName: PropTypes.string.isRequired
}

export default MenuSection;