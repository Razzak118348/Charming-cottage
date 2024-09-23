import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import HowItsWork from "../../Components/HowItsWork/HowItsWork";
import PopulerListing from "../../Components/PopulerListing/PopulerListing";
import { FaArrowRight } from "react-icons/fa";


const Home = () => {
    const data = useLoaderData()
    const listing = data.slice(0, 3)
    console.log(data);

    return (
        <div className="popin-font">
            <Helmet>
                <title>Charming cottage | Home</title>
            </Helmet>

            <Banner></Banner>

            {/* How its work section  */}
            <HowItsWork></HowItsWork>

            {/* Populer listing section  */}
            <div className="flex text-center justify-center mt-20 md:mt-20 mb-10 animate__animated animate__flipInX ">
                <div className="text-center shadow-stone-500 shadow-lg  mx-auto bg-amber-100 p-5 rounded-lg">
                    <h2 className=" text-xl  md:text-4xl font-bold p-5 rounded-xl">Populer Listing Here</h2>
                    <p className="">Explore our selection of the most sought-after residential properties, <br /> offering the perfect blend of comfort, style, and location.</p>
                </div>
            </div>

            <div className="mt-10 mx-0 md:mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">

                {
                    listing.map((item) => <PopulerListing key={item.id}
                        eachProperty={item}
                    ></PopulerListing>)
                }

            </div>
           <div className="flex justify-end md:justify-center lg:justify-end mr-20 md:mr-24 mt-5 mb-10"><Link to={'/properties'}> <button className="btn hover:bg-yellow-500 border-2 border-yellow-500 font-medium text-lg">See More <FaArrowRight></FaArrowRight></button></Link></div>
        </div>
    );
};

export default Home;