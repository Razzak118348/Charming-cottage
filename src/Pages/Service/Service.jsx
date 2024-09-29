import { Helmet } from "react-helmet";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const Service = () => {
    return (
        <div>
            <Helmet><title>Service | Cottage</title></Helmet>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0 p-10 ">
                <div className="h-[59vh] animate__animated animate__fadeInLeft">
                    <img className="h-full w-full rounded-xl md:rounded-none" src="/house6.jpg" alt="" /></div>
                <div className="bg-yellow-100 p-3 rounded-2xl md:rounded-none animate__animated animate__fadeInRight">
                    <h2 className="text-3xl md:text-5xl font-bold">Why you should work with us</h2>
                    <p>
                        Whether you’re seeking a peaceful retreat or a lovely family home, this cottage provides the perfect setting. With easy access to local amenities and beautiful surroundings, it offers both convenience and charm. Our dedicated team ensures that you receive the best service, guiding you through every step of the process. Whether you're buying, renting, or simply inquiring, we guarantee an exceptional experience with 100% authentic service.

                        If you’re looking to invest wisely or secure a beautiful home, this charming cottage is the perfect choice. Trust us to deliver the best deals and top-notch support.</p>
                    <div className="grid grid-cols-2 gap-8 mt-5">
                        <div>
                            <h4 className="text-2xl font-semibold">Buy or Rent Homes</h4>
                            <p>We sell our home at the best market price and very quickly.</p>

                        </div>
                        <div>
                            <h4 className="text-2xl font-semibold">Trusted by Thousands</h4>
                            <p>We offer you free consultancy to get a loan for your new home.</p>

                        </div>
                    </div>
                    <Link to={"/contact"}><button className="btn rounded-lg text-black bg-yellow-400 w-32 p-2 mt-5">Learn More <FaArrowRight className=""></FaArrowRight></button> </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;