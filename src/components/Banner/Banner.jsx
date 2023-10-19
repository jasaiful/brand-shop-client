import bannerPic from "../../assets/images/banner-pic.png"

const Banner = () => {
    return (
        <div className="mt-10 w-full">
            <div className="hero rounded-xl text-white" style={{backgroundImage: 'url(https://i.ibb.co/QDNzvSj/banner.jpg)'}}>
                <div className="hero-content px-12 flex-col py-12 lg:flex-row-reverse">
                    <img src={bannerPic} className="w-full rounded-lg shadow-5xl" />
                    <div className="space-y-3">
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