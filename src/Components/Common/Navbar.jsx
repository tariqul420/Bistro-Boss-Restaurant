import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="p-[27px] w-full bg-[#151515]/50">
            <div className="w-11/12 mx-auto flex item-center items-center justify-between">
                <div>
                    <h1 className="font-Cinzel text-white">
                        <p className="font-black text-3xl">BISTRO BOSS</p>
                        <p className="font-bold text-2xl tracking-[8px]">Restaurant</p>
                    </h1>
                </div>
                <div>
                    <ul className="text-white font-extrabold text-xl flex gap-2">
                        <li>
                            <NavLink to='/'>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact'>
                                Contact
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard'>
                                Dashboard
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/our-menu'>
                                Our Menu
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/out-shop'>
                                Our Shop
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;