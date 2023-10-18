import bannerPic from "../../assets/images/banner-pic.png"

const Banner = () => {
    return (
        <div className="mt-10">
            <div className="hero rounded-xl text-white" style={{backgroundImage: 'url(https://i.ibb.co/LpFFJ0c/banner-bg.jpg)'}}>
                <div className="hero-content px-12 flex-col lg:flex-row-reverse">
                    <img src={bannerPic} className="w-3xl rounded-lg shadow-6xl" />
                    <div className="space-y-5">
                        <h1 className="text-5xl font-bold">Premium Brand Collection..</h1>
                        <p className="py-6">Car is Where Early Adopters and Innovation Seekers <br /> Find Lively Imaginative Tech before it Hints The Mainstream.</p>
                        <button className="btn text-white border-none bg-red-600">View Demos</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;