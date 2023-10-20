import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const BrandCard = ({ brand }) => {
    const { logo_url  } = brand;

    return (
      
            <div className="mx-10">
                <div className="card w-full max-h-2xl glass">
                    <div className="card-body text-center">
                        <h2 className="text-3xl text-center font-bold">{brand.name}</h2>
                        <p className="font-semibold">Country of origin: {brand.country}</p>
                    </div>
                    <Link><figure><img src={logo_url} alt="car!" /></figure></Link>
                </div> 
            </div>
        
    );
};

BrandCard.propTypes = {
    brand: PropTypes.node.isRequired,
}

export default BrandCard;