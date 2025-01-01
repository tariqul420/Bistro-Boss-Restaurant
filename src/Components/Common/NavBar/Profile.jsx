import { useState } from "react";
import useAuth from "../../../Hooks/useAuth";

const Profile = () => {
    const { user, logoutUser } = useAuth();
    const [profileClick, setProfileClick] = useState(false);

    return (
        <div>
            <img
                onClick={() => setProfileClick(!profileClick)}
                className="w-10 rounded-full cursor-pointer" src={user?.photoUrl ? user?.photoUrl : 'https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2264922221.jpg'} alt="" />

            <aside>
                {profileClick && (
                    <div className="absolute top-24 right-4 bg-transparent backdrop-blur-3xl p-3 rounded-lg shadow-lg space-y-1">
                        <h1 className="text-lg font-bold">{user?.displayName}</h1>
                        <p className="text-sm">{user?.email}</p>
                        <button className="text-sm bg-red-500 text-white font-medium px-4 rounded-md py-2 mt-4"
                            onClick={() => logoutUser()}>
                            Logout
                        </button>
                    </div>
                )}
            </aside>
        </div>
    );
};

export default Profile;