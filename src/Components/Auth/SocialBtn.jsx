import { GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider } from "firebase/auth";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const SocialBtn = ({ navigate }) => {
    const { socialLogin } = useAuth();
    const location = useLocation();

    const facebookProvider = new FacebookAuthProvider();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const successMessage = location.pathname === "/login" ? "Login successfully ❤️" : "Registration successfully ❤️";

    const handelFacebook = async () => {
        try {
            await socialLogin(facebookProvider)
                .then(() => {
                    toast.success(successMessage)
                    navigate
                }).catch(error => {
                    toast.error(error.code)
                })
        } catch (error) {
            toast.error(error.code)
        }
    };

    const handelGoogle = async () => {
        try {
            await socialLogin(googleProvider)
                .then(() => {
                    toast.success(successMessage)
                    navigate
                }).catch(error => {
                    toast.error(error.code)
                })
        } catch (error) {
            toast.error(error.code)
        }
    };

    const handelGithub = async () => {
        try {
            await socialLogin(githubProvider)
            toast.success(successMessage)
            navigate
        } catch (error) {
            toast.error(error.code)
        }
    };

    return (
        <ul className="border-solid border-black p-2 text-3xl flex gap-8 mt-3">
            <li
                onClick={handelFacebook}
                className="border cursor-pointer border-solid border-black p-1 rounded-full">
                <FaFacebook />
            </li>
            <li
                onClick={handelGoogle}
                className="border cursor-pointer border-solid border-black p-1 rounded-full">
                <FaGoogle />
            </li>
            <li
                onClick={handelGithub}
                className="border cursor-pointer border-solid border-black p-1 rounded-full">
                <FaGithub />
            </li>
        </ul>
    );
};

SocialBtn.propTypes = {
    navigate: PropTypes.object.isRequired,
};

export default SocialBtn;