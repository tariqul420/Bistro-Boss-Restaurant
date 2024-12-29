import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {

    return (
        <footer>
            <div className="flex items-start">
                <div className="bg-[#1f2937] text-white flex-1 flex items-center justify-center flex-col space-y-4 py-[97px]">
                    <h2 className="font-medium text-3xl">CONTACT US</h2>
                    <ul className="text-center font-medium">
                        <li>123 ABS Street, Uni 21, Bangladesh</li>
                        <li>+88 123456789</li>
                        <li>Mon - Fri: 08:00 - 22:00</li>
                        <li>Sat - Sun: 10:00 - 23:00</li>
                    </ul>
                </div>

                <div className="bg-[#111827] text-white flex-1 flex flex-col items-center justify-center space-y-4 pt-[97px] pb-[123px]">
                    <h2 className="font-medium text-3xl">Follow US</h2>
                    <p>Join us on social media</p>
                    <div className="flex gap-6">
                        <FaFacebook size={30} />
                        <FaInstagram size={30} />
                        <FaTwitter size={30} />
                    </div>
                </div>
            </div>
            <p className="py-4 bg-black text-center font-medium text-white text-lg">
                Copyright © {new Date().getFullYear()} Bistro Boss Restaurant. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;