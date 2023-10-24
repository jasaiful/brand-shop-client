
import { useEffect, useState } from "react";
import BrandCard from "./BrandCard";
import { Link } from "react-router-dom";


const Brand = () => {

    const [brands, setBrands] = useState([]);

    useEffect(() => {
        fetch('brandCollection.json')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, [])

    return (
        <div className="my-10">
            <h2 className="text-5xl mb-5 text-center font-bold text-red-600 underline">Popular Brand</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
                {
                    brands.map((brand) => (
                        <Link to={`/brands/${brand.name}`} key={brand.id} >
                            <BrandCard
                                brand={brand}>
                            </BrandCard>
                        </Link>
                    ))}
            </div>
        </div>
    );
};

export default Brand;