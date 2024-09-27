
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";

import PopulerListing from "../../Components/PopulerListing/PopulerListing";
const Properties = () => {
    const data =useLoaderData();

    return (
        <div>
<Helmet><title>Properties | Cottage</title></Helmet>
<div className="my-10 md:my-20 mx-0 md:mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 animate__animated animate__backInUp">

{
    data.map((singleData,idx) => <PopulerListing key={idx} eachProperty={singleData}></PopulerListing>)
}

</div>

        </div>
    );
};

export default Properties;