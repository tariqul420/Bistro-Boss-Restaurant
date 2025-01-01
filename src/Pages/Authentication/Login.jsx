import { useForm } from "react-hook-form";
import bg from "../../assets/others/authentication.png";
import authRS from "../../assets/others/authentication2.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from "react-simple-captcha";
import toast from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";
import useAuth from "../../Hooks/useAuth";
import SocialBtn from "../../Components/Auth/SocialBtn";

const Login = () => {
    const { register, handleSubmit } = useForm();
    const { loginUser, loading, setLoading } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const onSubmit = async (data) => {
        const { email, password, captcha } = data

        if (!validateCaptcha(captcha)) {
            return toast.error('Your Captcha Not Valid')
        }
        try {
            await loginUser(email, password)
            toast.success('Login Successfully ❤️')
            navigate(location?.state ? location?.state : '/')
        } catch (error) {
            toast.error(error.code)
            setLoading(false)
        }
    };

    return (
        <section
            className="min-h-screen w-full flex items-center justify-center"
            style={{ background: `url(${bg})` }}
        >
            <div className="w-9/12 mx-auto flex items-center justify-between">
                <div className="flex flex-col items-center font-bold flex-1">
                    <h2 className="text-5xl">Login</h2>

                    <form className="mt-5 space-y-3" onSubmit={handleSubmit(onSubmit)}>
                        {/* Email Field */}
                        <div className="space-y-1">
                            <label htmlFor="email" className="text-lg font-medium ml-2">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your Email"
                                className="py-3 font-medium px-4 border border-gray-300 rounded-lg w-full placeholder:font-normal"
                                {...register("email", { required: true })}
                            />
                        </div>

                        {/* Password Field */}
                        <div className="space-y-1">
                            <label htmlFor="password" className="text-lg font-medium ml-2">
                                Password
                            </label>
                            <input
                                type="password"
                                placeholder="Enter your Password"
                                className="py-3 font-medium px-4 border border-gray-300 rounded-lg w-full placeholder:font-normal"
                                {...register("password", { required: true })}
                            />
                        </div>

                        {/* CAPTCHA */}
                        <div className="space-y-1">
                            <LoadCanvasTemplate />
                            <input
                                type="text"
                                placeholder="Type Here"
                                className="py-3 font-medium px-4 border border-gray-300 rounded-lg w-full placeholder:font-normal"
                                {...register("captcha", { required: true })}
                            />
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button
                                className={`py-3 w-full rounded-md font-semibold text-white bg-[#d1a054]`}
                                type="submit"
                            >
                                {loading ? (
                                    <TbFidgetSpinner className='animate-spin m-auto' />
                                ) : (
                                    'Continue'
                                )}
                            </button>
                        </div>
                    </form>

                    {/* Additional Links */}
                    <p className="text-xl font-medium text-[#d1a054] mt-4">
                        Already registered? <Link to="/register">Go to Register</Link>
                    </p>
                    <p className="mt-2 text-lg">Or sign up with</p>

                    {/* Social Media Icons */}
                    <SocialBtn navigate={navigate(location?.state ? location?.state : '/')} />
                </div>
                <div className="flex-1">
                    <img src={authRS} alt="Auth" />
                </div>
            </div>
        </section>
    );
};

export default Login;
