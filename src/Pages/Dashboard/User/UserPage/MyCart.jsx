import { RiDeleteBin7Fill } from "react-icons/ri";
import Heading from "../../../../Components/Common/Heading";
import useCart from "../../../../Hooks/useCart";

const MyCart = () => {
    const [carts] = useCart()

    const totalQuantity = carts.reduce((total, product) => total + product.price, 0);

    return (
        <section className="w-10/12 mx-auto">
            <div className="-mt-12">
                <Heading subTitle="My cart" title="WANNA ADD MORE?" />
            </div>

            <div className="bg-gray-50 p-8 rounded-md shadow-md">
                <div className="flex items-center justify-between">
                    <h2 className="font-bold text-3xl uppercase">Total orders: {carts?.length}</h2>
                    <h2 className="font-bold text-3xl uppercase">Total price: $ {totalQuantity.toFixed(2)}</h2>
                    <button className="btn btn-neutral bg-[#d1a054] border-none uppercase">Pay</button>
                </div>

                <div className="mt-4">
                    <div className="overflow-x-auto">
                        <table className="table table-zebra w-full">
                            <thead>
                                <tr className="bg-[#d1a054] text-white rounded-t-md">
                                    <th>#</th>
                                    <th>ITEM IMAGE</th>
                                    <th>ITEM NAME</th>
                                    <th>PRICE</th>
                                    <th>ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    carts?.map((cart, index) => <tr key={cart?._id}>
                                        <td>
                                            {index + 1}
                                        </td>
                                        <td>
                                            <img src={cart?.image} alt={cart?.name} className="w-12 h-12 object-cover rounded-sm" />
                                        </td>
                                        <td>
                                            <p>{cart?.name}</p>
                                        </td>
                                        <td>
                                            <p>$ {cart?.price}</p>
                                        </td>
                                        <td>
                                            <button className="btn text-white btn-sm btn-neutral bg-red-500 border-none"><RiDeleteBin7Fill /></button>
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default MyCart;