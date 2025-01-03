import Heading from "../../../../Components/Common/Heading";
import useCart from "../../../../Hooks/useCart";

const MyCart = () => {
    const [carts] = useCart()

    return (
        <section className="w-10/12 mx-auto">
            <div className="-mt-12">
                <Heading subTitle="My cart" title="WANNA ADD MORE?" />
            </div>

            <div className="bg-gray-50 p-8 rounded-md shadow-md">
                <div className="flex items-center justify-between">
                    <h2 className="font-bold text-3xl">Total orders: {carts?.length}</h2>
                    <h2 className="font-bold text-3xl">Total price: $88.2</h2>
                    <button className="btn btn-neutral bg-[#d1a054] border-none">Pay</button>
                </div>
            </div>
        </section>
    );
};

export default MyCart;