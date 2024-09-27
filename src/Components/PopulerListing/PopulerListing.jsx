import { FaArrowRight, FaBath, FaBed } from "react-icons/fa";
import { FaKitchenSet } from "react-icons/fa6";
import { GiFlowerPot } from "react-icons/gi";
import { Link } from "react-router-dom";
import 'animate.css';

const PopulerListing = ({eachProperty}) => {
    console.log(eachProperty)
    const {
        estate_title,
        image,
        area,
        price,
location,
        status,
        facilities,
        }=eachProperty
    return (
        <div className="card bg-gray-100 w-full h-auto shadow-xl popin-font  md:ml-5 animate__animated animate__backInUp animate__delay-1s ">
        <figure className="">
          <img
          className="w-full h-80 md:h-56 rounded-lg"
            src={image}
            alt={estate_title} />
        </figure>
        <div className="card-body ">
          <div className="flex justify-between space-x-8">
            <p className="  text-lg font-medium">{price}</p>
            <p className="bg-gray-400 text-center rounded-full text-lg font-medium">For {status}</p>
          </div>
          <h2 className="card-title mt-2">{estate_title}</h2>
          <p>{location}</p>
<div className="flex my-1">
<p className="flex text-gray-600"><FaBed className="mr-2 mt-1 "></FaBed>{facilities[0].count}</p>
<p className="flex text-gray-600"><FaBath className="mr-2 mt-1 "></FaBath>{facilities[1].count}</p>
<p className="flex text-gray-600"><FaKitchenSet className="mr-2 mt-1 "></FaKitchenSet>{facilities[2].count}</p>
<p className="flex text-gray-600"><GiFlowerPot className="mr-2 mt-1 "></GiFlowerPot>{facilities[3].count}</p>
</div>
          <div className="card-actions justify-end mt-2">
           <Link to={`/properties/${eachProperty.id}`}> <button className="btn bg-yellow-500 text-lg font-bold">View Details <FaArrowRight></FaArrowRight></button></Link>
          </div>
        </div>
      </div>
    );
};

export default PopulerListing;