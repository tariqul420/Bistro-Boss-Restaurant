import bg from "../../assets/home/featured.jpg";

const OurMenu = () => {
    return (
        <section
            className="bg-fixed bg-cover bg-center py-[130px] mt-[130px]"
            style={{
                backgroundImage: `linear-gradient(rgba(21, 21, 21, 0.7), rgba(21, 21, 21, 0.7)), url(${bg})`,
            }}
        >
            <p className="text-[#d99904] text-center text-xl mb-4">---Check it out---</p>
            <h2 className="text-5xl text-center font-bold border-y-4 w-[40%] border-white mx-auto py-5 uppercase text-white">
                FROM OUR MENU
            </h2>

            <div className="w-10/12 mx-auto flex items-center gap-8 mt-12">
                <div>
                    <img className="rounded-xl" src={bg} alt="" />
                </div>
                <div className="text-white">
                    <p className="text-lg">March 20, 2023</p>
                    <h3 className="text-xl">WHERE CAN I GET SOME?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-neutral mt-6 bg-transparent border-x-0 border-t-0 border-b-4 font-semibold border-white">Read More</button>
                </div>
            </div>
        </section>
    );
};

export default OurMenu;