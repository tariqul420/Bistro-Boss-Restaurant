import { FaBookmark, FaCalendarAlt, FaHome } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { MdOutlinePayment, MdReviews } from "react-icons/md";
import { NavLink } from "react-router-dom";

const User = () => {
    return (
        <div>
            <ul className="text-black font-extrabold text-xl space-y-4">
                <li>
                    <NavLink className={`flex items-center gap-2`} to="/"><FaHome />User Home</NavLink>
                </li>
                <li>
                    <NavLink className={`flex items-center gap-3`} to="/contact"><FaCalendarAlt /> Reservation</NavLink>
                </li>
                <li>
                    <NavLink className={`flex items-center gap-3`} to="/our-menu"><MdOutlinePayment /> payment history</NavLink>
                </li>
                <li>
                    <NavLink className={`flex items-center gap-3`}><FaCartShopping /> My cart</NavLink>
                </li>
                <li>
                    <NavLink className={`flex items-center gap-3`} to="/our-shop"><MdReviews /> Add review</NavLink>
                </li>
                <li>
                    <NavLink className={`flex items-center gap-3`} to="/our-shop"><FaBookmark /> My booking</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default User;