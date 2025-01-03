import { NavLink, Outlet } from "react-router-dom";
import User from "./User/User";
import { FaBars, FaHome } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Dashboard = () => {
    return (
        <section className="flex gap-20">
            <div className="min-h-screen w-[25%] dashboard bg-[#d1a054] p-12">
                <div className="mb-8">
                    <NavLink to='/'>
                        <h1 className="font-Cinzel text-white">
                            <p className="font-black text-2xl">BISTRO BOSS</p>
                            <p className="font-bold text-1xl tracking-[8px]">Restaurant</p>
                        </h1>
                    </NavLink>
                </div>
                <User />
                <div className="divider"></div>
                <ul className="text-black font-extrabold text-xl space-y-4">
                    <li>
                        <NavLink className={`flex items-center gap-2`} to="/"><FaHome /> Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={`flex items-center gap-3`} to="/contact"> <MdEmail /> Contact</NavLink>
                    </li>
                    <li>
                        <NavLink className={`flex items-center gap-3`} to="/our-menu"> <FaBars /> Our Menu</NavLink>
                    </li>
                    <li>
                        <NavLink className={`flex items-center gap-3`} to="/our-shop"><FaBagShopping /> Our Shop</NavLink>
                    </li>
                </ul>
            </div>
            <div className="w-[75%] flex justify-center">
                <Outlet />
            </div>
        </section>
    );
};

export default Dashboard;