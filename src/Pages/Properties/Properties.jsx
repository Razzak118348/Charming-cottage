
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";

import PopulerListing from "../../Components/PopulerListing/PopulerListing";
const Properties = () => {
    const data =useLoaderData();

    return (
        <div>
<Helmet><title>Properties | Cottage</title></Helmet>

<h1 className="text-2xl md:text-4xl m-8 font-bold popin-font">All listing here</h1>
<div className="my-10 md:my-20 mx-0 md:mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 animate__animated animate__backInUp">

{
    data.map((singleData,idx) => <PopulerListing key={idx} eachProperty={singleData}></PopulerListing>)
}

</div>

        </div>
    );
};

export default Properties;