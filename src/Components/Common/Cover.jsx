import PropTypes from "prop-types";

const Cover = ({ title, subTitle, bg }) => {
    return (
        <section
            className="bg-fixed bg-cover bg-center w-full mx-auto flex items-center justify-center"
            style={{
                backgroundImage: `url(${bg})`,
            }}
        >
            <div className="space-y-2 my-36 text-white w-[80%] mx-auto px-[167px] py-12 bg-black/50">
                <h2 className="text-center font-Cinzel text-5xl font-semibold">{title}</h2>
                <p className="text-center font-Cinzel uppercase">{subTitle}</p>
            </div>
        </section>
    );
};

Cover.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    bg: PropTypes.string.isRequired
}

export default Cover;