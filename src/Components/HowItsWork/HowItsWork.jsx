
import { GiDiscussion } from "react-icons/gi";
import { GoPasskeyFill } from "react-icons/go";
import { TbHomeSearch } from "react-icons/tb";
import 'animate.css';

const HowItsWork = () => {
    return (
        <div className="mt-20 popin-font bg-slate-50 p-10 rounded-3xl">
          <div className="text-center mb-12">
          <h2 className="font-bold text-xl md:text-2xl">How It Works? Find a perfect home.</h2>
          <p className="my-3 font-medium w-full md:w-1/2 flex justify-center items-center mx-auto">We will commited to Help you to find best Property. Your Investment will be orthey by buing our property .</p>
          </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 bg-slate-100  mx-auto rounded-3xl p-10">

                <div className="text-center animate__animated animate__slideInLeft">
<div className="flex items-center justify-center ">
<TbHomeSearch className="w-8 h-8 bg-yellow-300 mb-2 rounded-lg" />
</div>
                    <h3 className="font-semibold text-xl mb-2">Find Real Estate</h3>
                    <p >Find your suitable and charming home</p>

                </div>

                <div className="text-center animate__animated animate__slideInUp">
                    <div className="flex items-center justify-center"><GiDiscussion className="w-8 h-8 bg-yellow-300 mb-2 rounded-lg"></GiDiscussion></div>

                    <h3 className="font-semibold text-xl mb-2">Meet Relator</h3>
                    <p>Cooperate with our specialist to find your best item</p>
                </div>

                <div className="text-center animate__animated animate__slideInRight">
                    <div className="flex items-center justify-center">  <GoPasskeyFill className="w-8 h-8 bg-yellow-300 mb-2 rounded-lg"></GoPasskeyFill></div>

                    <h3 className="font-semibold text-xl mb-2">Take The keys</h3>
                    <p>Enjoy your beautiful life with your home.🎇</p>
                </div>
            </div>
        </div>
    );
};

export default HowItsWork;