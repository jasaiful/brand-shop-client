
const FAQ = () => {
    return (
        <div className="mt-10 bg-slate-900 rounded-lg w-full">
            <h1 className="text-red-600 pt-2 text-center mx-auto font-bold text-4xl">Exclusive BMW collection!!</h1>
            <div className="hero rounded-xl text-white">
                <div className="hero-content px-12 flex-col justify-around py-12 lg:flex-row-reverse">
                    <div className="space-y-5">
                        <div className="collapse collapse-plus">
                            <input type="radio" name="my-accordion-3" checked="checked" />
                            <div className="collapse-title text-xl font-medium">
                            What does BMW stand for?
                            </div>
                            <div className="collapse-content">
                                <p>BMW stands for Bayerische Motoren Werke, which translates to Bavarian Motor Works in English. It is a German multinational company that produces luxury vehicles and motorcycles. BMW is renowned for its high-quality automobiles and commitment to precision engineering.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">
                            What are some of the popular BMW models available?
                            </div>
                            <div className="collapse-content">
                                <p>BMW offers a wide range of popular models, including the BMW 3 Series, 5 Series, and 7 Series sedans, the X3, X5, and X7 SUVs, the Z4 sports car, and the M Series performance variants. BMW also produces electric vehicles like the BMW i3 and i8, and they continue to expand their electric vehicle lineup.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">
                            What sets BMW apart from other luxury car brands?
                            </div>
                            <div className="collapse-content">
                                <p>BMW is known for its Ultimate Driving Machine philosophy, which emphasizes a balance between sporty handling and luxurious comfort. The brand is praised for its performance-oriented vehicles and innovative technologies, including the iDrive infotainment system. BMW also places a strong emphasis on sustainability and has made significant strides in electric and hybrid vehicle development.</p>
                            </div>
                        </div>
                    </div>
                    <img src={'https://i.ibb.co/WFfnB8h/image.png'} className="w-5/12 rounded-lg shadow-5xl" />
                </div>
            </div>
        </div>
    );
};

export default FAQ;