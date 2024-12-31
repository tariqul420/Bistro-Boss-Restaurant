import { useForm } from "react-hook-form";
import bg from "../../assets/others/authentication.png"
import authRS from "../../assets/others/authentication2.png"
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

const Register = () => {
    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <section className="min-h-screen w-full  flex items-center justify-center" style={{ background: `url(${bg})` }}>
            <div className="w-9/12 mx-auto flex items-center justify-between">
                <div className="flex flex-col items-center font-bold flex-1">
                    <h2 className="text-5xl">Register</h2>

                    <form className="mt-5 space-y-3" onSubmit={handleSubmit(onSubmit)}>
                        <div className="space-y-1">
                            <label htmlFor="name" className="text-lg font-medium ml-2">Name</label>
                            <input
                                type="text"
                                name="Name"
                                placeholder="Enter your Name"
                                className="py-3 font-medium px-4 border border-gray-300 rounded-lg w-full placeholder:font-normal"
                                {...register("name", {
                                    required: true
                                })}
                            />
                        </div>
                        <div className="space-y-1">
                            <label htmlFor="email" className="text-lg font-medium ml-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your Email"
                                className="py-3 font-medium px-4 border border-gray-300 rounded-lg w-full placeholder:font-normal"
                                {...register("email", {
                                    required: true
                                })}
                            />
                        </div>
                        <div className="space-y-1">
                            <label htmlFor="password" className="text-lg font-medium ml-2">Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter your Password"
                                className="py-3 font-medium px-4 border border-gray-300 rounded-lg w-full placeholder:font-normal"
                                {...register("password", {
                                    required: true
                                })}
                            />
                        </div>

                        {/* Submit Btn */}
                        <div>
                            <button className="py-3 bg-[#d1a054] w-full rounded-md font-semibold text-white" type="submit">Sign Up</button>
                        </div>
                    </form>

                    <p className="text-xl font-medium text-[#d1a054] mt-4">Already registered? <Link to='/login'>Go to log in</Link></p>
                    <p className="mt-2 text-lg">Or sign up with</p>

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
                </div>
                <div className="flex-1">
                    <img src={authRS} alt="Auth" />
                </div>
            </div>
        </section>
    );
};

export default Register;