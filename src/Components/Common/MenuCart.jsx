import PropTypes from "prop-types";

const MenuCart = ({ menu }) => {
    const { name, recipe, image, price } = menu

    return (
        <div className="flex gap-4">
            <div>
                <img src={image} alt={name} />
            </div>
            <div>
                <h2 className="text-xl font-medium font-Cinzel">{name} --------</h2>
                <p className="text-gray-500">{recipe}</p>
            </div>
            <div>
                <p className="text-xl text-[#bb8506] font-semibold">${price}</p>
            </div>
        </div>
    );
};

MenuCart.propTypes = {
    menu: PropTypes.object.isRequired,
}

export default MenuCart;