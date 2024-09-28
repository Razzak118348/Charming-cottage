
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";

import PopulerListing from "../../Components/PopulerListing/PopulerListing";
const Properties = () => {
    const data =useLoaderData();

    return (
        <div className="popin-font ">
<Helmet><title>Properties | Cottage</title></Helmet>
<img className="h-56 w-full rounded-b-3xl " src="/home2.jpg" alt="" />
<h1 className="text-3xl md:text-6xl font-bold  ml-10 text-white animate__animated animate__fadeInRight -mt-36  ">All Listing here</h1>


<div className="mt-36 mb-20 mx-0 md:mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 animate__animated animate__backInUp">

{
    data.map((singleData,idx) => <PopulerListing key={idx} eachProperty={singleData}></PopulerListing>)
}

</div>

        </div>
    );
};

export default Properties;