import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import HowItsWork from "../../Components/HowItsWork/HowItsWork";
import PopulerListing from "../../Components/PopulerListing/PopulerListing";
import { FaArrowRight } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import CountUp from "react-countup";


const Home = () => {
    const { loading } = useAuth()

    const data = useLoaderData()

    const listing = data.slice(0, 6)
    console.log(data);

    return (
        <div className="popin-font ">
            <Helmet>
                <title>Charming cottage | Home</title>
            </Helmet>
            <Banner></Banner>
            <div className="p-5">


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
                        listing.map((item, idx) => <PopulerListing key={idx}
                            eachProperty={item}
                        ></PopulerListing>)
                    }

                </div>

                <div className="flex justify-end md:justify-center lg:justify-end mr-20 md:mr-24 mt-5 mb-10"><Link to={'/properties'}> <button className="btn hover:bg-yellow-500 border-2 border-yellow-500 font-medium text-lg">See More <FaArrowRight></FaArrowRight></button></Link></div>

                <div className="mt-20 mb-20 p-5  animate__animated animate__fadeInUpBig animate__delay-3s ">
                    <h2 className="text-4xl font-bold mb-5 mx-auto flex justify-center"> What's Happening in Charming Cottage </h2>
                    {/* useing react countup  */}
                    <div className="flex justify-center items-center ">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate__animated animate__slideInUp">
                            <div><h3 className="text-4xl font-bold text-yellow-500"><CountUp end={500} duration={1} />M+</h3><p className="text-gray-500"> Property Sales</p></div>
                            <div><h3 className="text-4xl font-bold text-yellow-500"><CountUp end={48525} duration={3} /></h3><p className="text-gray-500">Property Rent</p></div>
                            <div><h3 className="text-4xl font-bold text-yellow-500"><CountUp end={15789} duration={15} /></h3><p className="text-gray-500">Single House sales</p></div>
                            <div><h3 className="text-4xl font-bold text-yellow-500"><CountUp end={5987} duration={1} /></h3><p className="text-gray-500"> Recently sold</p></div>
                        </div>
                    </div>
                </div>

<div className="flex justify-center ">
<div className="bg-gradient-to-b from-gray-200 to-gray-50 rounded-lg  w-full md:w-3/4">
                    <div className="text-center mb-5 animate__animated animate__fadeInUp">
                        <p className=" w-full lg:w-1/2 mx-auto  font-medium text-lg p-5"> At Charming Cottage, we understand that finding the right property is a significant decision. That’s why our consultation system is designed to offer personalized guidance every step of the way. Whether you're buying, selling, or renting, our experienced team is here to help you make informed decisions. </p>
                    <p className=" font-bold text-lg">
                        Abdur Razzak
                    </p>
                    <p>CEO of Carming Cottage</p>
                    </div>

                    <div className="flex justify-center mb-10">

                        <div className="p-6 bg-gray-300
                        m-3 rounded-lg animate__animated animate__backInLeft">
                            <p className="text-gray-600">CONSULTATION</p>
                            <p>
                                Find the best Price for you  and calculate the property now.
                            </p>
                            <Link to={'/contact'}><button className="flex p-2 text-lg">Calculate <FaArrowRight className="mt-1 ml-2"></FaArrowRight></button></Link>

                        </div>
                        <div className="p-6 bg-gray-300
                        m-3 rounded-lg animate__animated animate__backInRight">
                            <p className="text-gray-600">CONSULTATION</p>
                            <p>
                                We are ready to help,consult your property option with us.
                            </p>
                            <Link to={'/contact'}><button className="flex p-2 text-lg">Chat with us <FaArrowRight className="mt-1 ml-2"></FaArrowRight></button></Link>
                        </div>



                    </div>
                </div>
</div>

            </div>

        </div>
    );
};

export default Home;