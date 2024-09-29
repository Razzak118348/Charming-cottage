import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
const About = () => {
    return (
        <div >
            <Helmet><title>About | Cottage</title></Helmet>
            <img className="h-56 w-full rounded-b-3xl " src="/studenthouse.jpg" alt="" />
            <h1 className="text-3xl md:text-6xl font-bold  ml-10 text-white animate__animated animate__fadeInRight -mt-36  ">About of Charming Cottage</h1>



            <div className="flex flex-1  mt-36 space-x-0 md:space-x-12 mb-10 p-8">
                <div className="hidden md:flex w-0 md:w-1/2 animate__animated animate__slideInLeft"><img className='w-0 md:w-full rounded-xl shadow-lg shadow-slate-500' src="/consultation.jpg" alt="consultation" />
                </div>

                <div className="w-full md:w-1/2 space-y-3 animate__animated animate__slideInRight">
                    <h2 className="text-5xl font-bold">Consulting with Charming Cottage Excellence</h2>
                    <p>Each well-appointed bedroom is designed with your comfort in mind, offering a tranquil retreat after a busy day. The apartment also features [number of bathrooms] bathrooms, each showcasing contemporary fixtures and finishes. Relax and unwind on your private balcony.

                        Conveniently located near [major landmarks, transportation hubs, shopping centers], this apartment offers the perfect blend of urban convenience.</p>
                    <button className="btn bg-yellow-500 p-2 "><Link to={'/contact'}>Contact with us</Link></button>
                </div>
            </div>

            <div className="bg-gradient-to-b from-gray-200 to-gray-100 mb-10 m-8 rounded-xl md:flex  ">
                <div className="p-8 w-full md:w-[50vw]">
                    <h3 className="text-3xl font-bold "> Vision</h3>
                    <p>Each well-appointed bedroom is designed with your comfort in mind, offering a tranquil retreat after a busy day. The apartment also features [number of bathrooms] bathrooms, each showcasing contemporary fixtures.</p>
                    <h3 className="text-3xl font-bold mt-8">Mission</h3>
                    <p>Our one and only mission is Customers satisfaction . Our team all time try to get customers feedback and their require . We serve our best .</p>
                </div>
                <div className="p-8 animate__animated animate__fadeInRight">
                    <img className="rounded-xl shadow-lg shadow-slate-600 h-96 w-full md:w-[50vw]" src="/signleF.jpg" alt="single family" />
                </div>
            </div>

            <div className="m-8">
<h2 className="text-3xl font-bold my-3">Professional Team </h2>
<p className="mb-4 w-full md:w-[40vw] ">Each well-appointed bedroom is designed with your comfort in mind,
offering a tranquil retreat after a busy day. The apartment also features.</p>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10  ">
<div className=" "><img className="w-3/4 md:w-full  h-64 shadow-md shadow-slate-700 hover:scale-110"  src="/expert6.jpg" alt="founder" />
<p className="-mt-8 text-white text-xl font-bold">Founder Raju </p>
</div>
<div>
<img className="w-3/4 md:w-full  h-64 shadow-md shadow-slate-700 hover:scale-110" src="/expert11.jpg" alt="expert1" />
<p className="-mt-8 text-white text-xl font-bold">Executive officer Nila </p>
</div>
<div><img className="w-3/4 md:w-full  h-64 shadow-md shadow-slate-700 hover:scale-110" src="/expert8.jpg" alt="expert2" />
<p className="-mt-8 text-black text-xl font-bold">
    Consultent Rita </p>
</div>
<div>
<img className="w-3/4 md:w-full  h-64 shadow-md shadow-slate-700 hover:scale-110" src="/expert9.jpg" alt="expert3" />
<p className="-mt-8 text-black text-xl font-bold">Advisor Susmita </p>
</div>
</div>
            </div>
        </div>
    );
};

export default About;