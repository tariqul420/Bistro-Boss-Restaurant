import PropTypes from "prop-types";

const ProductCart = ({ menu, handelAddToCart }) => {
    const { name, recipe, image, price } = menu
    return (
        <div className="card shadow-xl">
            <figure>
                <img
                    src={image}
                    alt={name} />
                <p className="absolute top-3 right-3 bg-black px-3 py-1 text-white font-medium">${price}</p>
            </figure>
            <div className="card-body">
                <h2 className="card-title justify-center">{name}</h2>
                <p className="text-center">{recipe}</p>
                <div className="card-actions justify-center">
                    <button
                        onClick={() => handelAddToCart(menu)}
                        className="btn btn-neutral bg-transparent border-x-0 border-t-0 border-b-4 border-[#bb8506] font-semibold block mx-auto mt-12 text-[#bb8506] hover:text-white bg-[#e8e8e8] uppercase">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

ProductCart.propTypes = {
    menu: PropTypes.object.isRequired,
    handelAddToCart: PropTypes.func.isRequired
}

export default ProductCart;