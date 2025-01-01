import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

const SocialBtn = () => {
    return (
        <ul className="border-solid border-black p-2 text-3xl flex gap-8 mt-3">
            <li className="border border-solid border-black p-1 rounded-full">
                <FaFacebook />
            </li>
            <li className="border border-solid border-black p-1 rounded-full">
                <FaGoogle />
            </li>
            <li className="border border-solid border-black p-1 rounded-full">
                <FaGithub />
            </li>
        </ul>
    );
};

export default SocialBtn;