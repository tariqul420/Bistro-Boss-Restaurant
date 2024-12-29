import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY) {
            setShowNavbar(false);
        } else {
            setShowNavbar(true);
        }
        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lastScrollY]);

    return (
        <nav
            className={`p-[27px] w-full sticky top-0 z-[1000] bg-[#151515]/50 transition-transform duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"
                }`}
        >
            <div className="w-11/12 mx-auto flex items-center justify-between">
                <div>
                    <h1 className="font-Cinzel text-white">
                        <p className="font-black text-3xl">BISTRO BOSS</p>
                        <p className="font-bold text-2xl tracking-[8px]">Restaurant</p>
                    </h1>
                </div>
                <div>
                    <ul className="text-white font-extrabold text-xl flex gap-2">
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard">Dashboard</NavLink>
                        </li>
                        <li>
                            <NavLink to="/our-menu">Our Menu</NavLink>
                        </li>
                        <li>
                            <NavLink to="/out-shop">Our Shop</NavLink>
                        </li>
                        {/* <li>
                            <button>Login</button>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;