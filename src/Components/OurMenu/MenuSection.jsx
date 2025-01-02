import MenuCart from "../Common/MenuCart";
import axios from "axios";
import Cover from "../Common/Cover";
import PropTypes from "prop-types";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ProductCart from "../Common/ProductCart";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import LoadingSpinner from "../Common/LoadingSpinner";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const MenuSection = ({ bg, subTitle, title, categoryName }) => {
    const location = useLocation()
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const navigate = useNavigate()
    const queryClient = useQueryClient()

    const { mutateAsync } = useMutation({
        mutationFn: async (cartData) => {
            await axiosSecure.post('/carts', cartData)
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["carts"]);
            toast.success('Item added to cart successfully')
        },
        onError: (error) => {
            toast.error(error.response.data)
        }
    })

    const { data: menus = [], isLoading } = useQuery({
        queryKey: ['menus', categoryName],
        queryFn: async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_SERVER_API_URL}/menus`)
            const offer = data.filter(offer => offer.category === categoryName)
            return offer
        }
    })

    const handelAddToCart = async (menuItem) => {
        if (!user) {
            Swal.fire({
                title: "Go to login page",
                text: "You need to login to add this item to cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#242C37",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: { from: location.pathname } })
                }
            });
        }

        const cartData = {
            productId: menuItem?._id,
            name: menuItem?.name,
            price: menuItem?.price,
            image: menuItem?.image,
            recipe: menuItem?.recipe,
            category: menuItem?.category,
            buyer: {
                name: user?.displayName,
                email: user?.email,
                photo: user?.photoURL
            }
        }

        await mutateAsync(cartData)
    }

    if (isLoading) return <LoadingSpinner smallHeight={false} />

    return (
        <section className="my-[45px]">
            {
                location.pathname === '/our-shop' ? "" : <Cover bg={bg} subTitle={subTitle} title={title} />
            }

            <div className={`grid ${location.pathname === '/our-shop' ? 'grid-cols-3' : 'grid-cols-2 w-10/12'} gap-6 mx-auto mt-[45px]`}>
                {
                    menus?.map(menu => location.pathname === '/our-shop' ? <ProductCart key={menu?._id} menu={menu} handelAddToCart={handelAddToCart} /> : <MenuCart key={menu?._id} menu={menu} />)
                }
            </div>
            {
                location.pathname === '/our-shop' ? "" : <Link to='/our-shop'>
                    <button className="btn btn-neutral bg-transparent border-x-0 border-t-0 border-b-4 font-semibold block mx-auto mt-12 text-black text-2xl hover:text-white ">Order Your Favorite Food</button>
                </Link>
            }
        </section>
    );
};

MenuSection.propTypes = {
    bg: PropTypes.string,
    subTitle: PropTypes.string,
    title: PropTypes.string,
    categoryName: PropTypes.string
}

export default MenuSection;