import bg from "../../assets/home/chef-service.jpg";

const BistroBoss = () => {
    return (
        <section
            className="bg-fixed bg-cover bg-center w-10/12 mx-auto flex items-center justify-center"
            style={{
                backgroundImage: `url(${bg})`,
            }}
        >
            <div className="space-y-2 my-36 bg-white text-black w-[85%] mx-auto px-[167px] py-12">
                <h2 className="text-center font-Cinzel text-5xl font-semibold">Bistro Boss</h2>
                <p className="text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Necessitatibus, libero accusamus laborum deserunt ratione
                    dolor officiis praesentium! Deserunt magni aperiam dolor
                    eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.
                </p>
            </div>
        </section>
    );
};

export default BistroBoss;