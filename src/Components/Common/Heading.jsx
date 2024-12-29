import PropTypes from "prop-types";

const Heading = ({ subTitle, title }) => {
    return (
        <div className="mt-20 mb-12">
            <p className="text-[#d99904] text-center text-xl mb-4">---{subTitle}---</p>
            <h2 className="text-5xl text-center font-bold border-y-4 w-[40%] mx-auto py-5 uppercase">{title}</h2>
        </div>
    );
};

Heading.propTypes = {
    subTitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default Heading;