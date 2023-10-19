import { Link } from "react-router-dom";

const BrandCard = ({ brand }) => {
    const { id, name, logo_url, country } = brand;
    return (
      
            <div className="mx-10">
                <div className="card w-full max-h-2xl glass">
                    <div className="card-body text-center">
                        <h2 className="text-3xl text-center font-bold">{brand.name}</h2>
                        <p className="font-semibold">Country of origin: {brand.country}</p>
                    </div>
                    <Link><figure><img src={brand.logo_url} alt="car!" /></figure></Link>
                </div> 
            </div>
        
    );
};

export default BrandCard;