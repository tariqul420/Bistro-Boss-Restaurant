import MenuCart from "../Common/MenuCart";
import axios from "axios";
import Cover from "../Common/Cover";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import ProductCart from "../Common/ProductCart";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../Common/LoadingSpinner";

const MenuSection = ({ bg, subTitle, title, categoryName }) => {
    const location = useLocation()

    const { data: menus = [], isLoading } = useQuery({
        queryKey: ['menus', categoryName],
        queryFn: async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_SERVER_API_URL}/menus`)
            const offer = data.filter(offer => offer.category === categoryName)
            return offer
        }
    })

    if (isLoading) return <LoadingSpinner smallHeight={false} />

    return (
        <section className="my-[45px]">
            {
                location.pathname === '/our-shop' ? "" : <Cover bg={bg} subTitle={subTitle} title={title} />
            }

            <div className={`grid ${location.pathname === '/our-shop' ? 'grid-cols-3' : 'grid-cols-2 w-10/12'} gap-6 mx-auto mt-[45px]`}>
                {
                    menus?.map(menu => location.pathname === '/our-shop' ? <ProductCart key={menu?._id} menu={menu} /> : <MenuCart key={menu?._id} menu={menu} />)
                }
            </div>
            {
                location.pathname === '/our-shop' ? "" : <Link to='/our-shop'>
                    <button className="btn btn-neutral bg-transparent border-x-0 border-t-0 border-b-4 font-semibold block mx-auto mt-12 text-black text-2xl hover:text-white ">Order Your Favorite Food</button>
                </Link>
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