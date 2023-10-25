import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BrandPage = () => {
    const { brandName } = useParams();
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`https://brand-shop-server-sigma-wine.vercel.app/brands/${brandName}/products`)
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(error => console.error("Error fetching dada:", error));
    }, [brandName]);

    // slider settings
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: (
            <button className="slick-arrow slick-prev">
                <FaArrowCircleLeft />
            </button>),
        nextArrow: (
            <button className="slick-arrow slick-next">
                <FaArrowCircleRight />
            </button>),
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="my-10">
            <div className="mx-auto text-center mb-5">
                <h1 className="text-4xl font-bold text-red-600 text-center underline">{brandName} Brand</h1>
                <h2 className="text-center text-xl">Available Products: <span className="font-bold text-red-600">{products.length}</span></h2>
            </div>
            <div className="auto-slider mb-10">

                <Slider {...sliderSettings}>
                    {
                        products.map(product => (
                            <div key={product.id}>
                                <img
                                    src={product.photo}
                                    alt="product"
                                    className=" w-full, h-96 rounded-xl mx-auto"
                                />
                            </div>
                        ))
                    }
                </Slider>
            </div>
            <div className="product-list">
                {
                    products.length === 0 ? (
                        <p className="text-center max-w-3xl border py-32 px-10 border-red-800 rounded-xl text-3xl font-bold mx-auto">
                            No products available for this brand!!!
                            <br />
                            <span><Link to={'/'}><button className="btn btn-sm mt-10 bg-red-600 text-white btn-ghost">Go Back</button></Link></span>
                        </p>

                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {
                                products.map(product => (
                                    <div key={product.id} className="product-card">

                                        <div>
                                            <div className="card my-5 w-96 gap-5 bg-base-100 shadow-xl">
                                                <figure><img src={product.photo} alt="product" /></figure>
                                                <div className="card-body">
                                                    <h2 className="card-title">
                                                        {product.model}
                                                        <div className="badge badge-secondary">NEW</div>
                                                    </h2>
                                                    <h2> {product.name} </h2>
                                                    <h2> Brand: {product.brand} </h2>
                                                    <p>Type: {product.type}</p>
                                                    <p>Price: {product.price}$</p>
                                                    <p>Rating: {product.rating}</p>
                                                    <div className="card-actions justify-end">
                                                        <div>
                                                            <button onClick={() => navigate(`/brands/${brandName}/update-product`)} className="btn btn-sm text-white border-none bg-red-600">Update</button>
                                                        </div>
                                                        <div>
                                                            <button onClick={() => navigate(`/brands/${brandName}/view-details`)} className="btn btn-sm text-white border-none bg-red-600">View Details</button>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                ))
                            }
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default BrandPage;