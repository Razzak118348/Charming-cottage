
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";

import PopulerListing from "../../Components/PopulerListing/PopulerListing";
import { useEffect } from "react";
import { useState } from "react";
const Properties = () => {
    const Alldata =useLoaderData();
    const[category,setCategory] = useState([]);
const [SelectionCottage, setSelectionCottage] = useState(Alldata)

useEffect(()=>{
    fetch("category.json")
    .then((res)=>res.json())
    .then((data)=>{
        // console.log(data);
        setCategory(data)
    })
},[])
console.log(category)

const handleButton =(segmentName)=>{
console.log(segmentName);
if(segmentName == "All"){
    setSelectionCottage(Alldata)
}
else{
    const FilterCottage = Alldata.filter((cottage)=>(cottage.segment_name) == segmentName)
setSelectionCottage(FilterCottage);
}

}

    return (
        <div className="popin-font ">
<Helmet><title>Properties | Cottage</title></Helmet>
<img className="h-56 w-full rounded-b-3xl " src="/home2.jpg" alt="" />
<h1 className="text-3xl md:text-6xl font-bold  ml-10 text-white animate__animated animate__fadeInRight -mt-36  ">All Listing here</h1>

<div className="mt-36 mb-10 ml-10 grid grid-cols-3 md:grid-cols-6">

{
    category.map((singleCategory)=>{

       return (
            <button
        onClick={()=>{handleButton(singleCategory.category_name)}}
key={singleCategory.id}
        >
{singleCategory.category_name}
        </button>
        )
    })
}
</div>
<div className=" mb-20 mx-0 md:mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 animate__animated animate__backInUp">

{
    SelectionCottage.map((singleData,idx) => <PopulerListing key={idx} eachProperty={singleData}></PopulerListing>)
}

</div>

        </div>
    );
};

export default Properties;