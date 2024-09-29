import { Helmet } from "react-helmet";
import { IoMdCall } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
    return (
        <div className="popin-font">
            <Helmet><title>Contact | Cottage</title></Helmet>

            <img className="h-56 w-full rounded-b-3xl " src="/home1.jpg" alt="" />
            <h1 className="text-3xl md:text-6xl font-bold  ml-10 text-white animate__animated animate__fadeInRight -mt-36  ">Contact with us</h1>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
           <form className="mt-36 animate__animated animate__backInLeft ">
                <div className="flex  space-x-10 px-5 mb-3">
                    <div className="w-1/3"><p>Name</p>
                        <input className="border-2 h-8 w-full " type="text" placeholder="Name" />
                    </div>
                    <div className="w-2/3"><p>Email</p>
                        <input className="border-2 h-8 w-full " type="email" placeholder="Email" />
                    </div>
                </div>


                <div className="flex  mb-4 space-x-10 px-5 ">
                    <div className="w-1/3"><p>Phone Number</p>
                        <input className="border-2 h-8 w-full " type="text" placeholder="Phone" />
                    </div>
                    <div className="w-2/3"><p>Subject</p>
                        <input className="border-2 h-8 w-full " type="text" placeholder="Subject" />
                    </div>
                </div>

                <div className="px-5">
                    <p>Message</p>
                    <textarea className="border-2 w-full" name="message" id="" cols="80" rows="5"></textarea>
                    <button type="submit" className="bg-yellow-500 text-lg font-medium w-full ">Send</button>
                </div>

            </form>
            <div className=" mt-10 lg:mt-36 animate__animated animate__backInRight  px-5">
                <h2 className="text-3xl lg:text-6xl font-bold  mt-5 ">Get In Touch With us </h2>
                <p className=" my-3 ">We are gratefull to you to contact with us.</p>
                <div className="link link-hover flex text-lg space-x-3"><IoMdCall className="w-10 h-10 mr-4 text-yellow-500 my-5"></IoMdCall><div><p className="text-xl font-bold">Office Number</p><p>01521752249</p></div>
                </div>

                <div className="link link-hover flex text-lg space-x-3 mb-5"><MdOutlineEmail className="w-10 h-10 mr-4 text-yellow-500"></MdOutlineEmail> <div><p className="text-xl font-bold">Email Address</p><p>01521752249</p></div></div>
                <div className="link link-hover flex text-lg space-x-3"><IoLocation className="w-10 h-10 mr-4 text-yellow-500"></IoLocation> <div><p className="text-xl font-bold"> Address</p><p>Gulshan-3992 Dhaka-1000</p></div></div>
            </div>
           </div>




        </div>

    );
};

export default Contact;