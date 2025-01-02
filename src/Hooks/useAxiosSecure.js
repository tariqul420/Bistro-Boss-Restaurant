import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_SERVER_API_URL,
    withCredentials: true,
});

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logOutUser } = useAuth();

    useEffect(() => {
        axiosInstance.interceptors.request.use(response => {
            return response;
        }, (error) => {
            if (error.status === 401 || error.status === 403) {
                logOutUser()
                    .then(() => {
                        navigate('/login')
                    })
                    .catch((error) => {
                        console.error(error)
                    })
            }

            return Promise.reject(error)
        })
    }, [logOutUser, navigate]);

    return axiosInstance;
};

export default useAxiosSecure;