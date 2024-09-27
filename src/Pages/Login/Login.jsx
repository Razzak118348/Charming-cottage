import { useState } from "react";
import { Helmet } from "react-helmet";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import { useForm } from "react-hook-form"
import useAuth from "../../hooks/useAuth";
import SocialLogin from "../../Components/SocialMediaLogin/SocialLogin";

const Login = () => {
  const { SignInUser } = useAuth()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const [passwordType, setPasswordType] = useState(false);


  // navigation
  const navigation = useNavigate()
  const location = useLocation();
  const destination = location?.state?location.state : "/";


  //handle register with react hock form
  const onSubmit = (data) => {
    const { email, password } = data;

    SignInUser(email, password)
      .then(result => {
        console.log(result.user)
        if (result.user) {
          toast.success("Successfully Logged In", {
            position: 'top-right',
            onClose: () => navigation(destination) })

        }
      })
      .catch(error => { console.log(error.message)
toast.error("Password or Email Invalid",{position:'top-right'})

       })
  }



  return (
    <div className="m-0 p-0">
      <Helmet>
        <title>Login | Charming Cottage</title>
      </Helmet>
      <ToastContainer autoClose={500}></ToastContainer>

      <div className="  p-3 rounded-2xl  ">
        <div className="popin-font mt-10 md:mt-8 mb-10 lg:mx-80 lg:my-40 bg-[#FFFFFF] border border-green-300 text-center  rounded-xl">
          <h2 className="text-2xl md:text-4xl font-bold text-[rgb(64,63,63)] mt-9">Please Login</h2>

          <hr className="mt-8" />
          <SocialLogin></SocialLogin>
          <div className="">
            <div className="hero-content flex-col ">
              <div className="text-center lg:text-left">

              </div>
              <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                  <div className="form-control">

                    <label className="label">
                      <span className="label-text text-lg">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
                    {errors.email && <span className="text-red-500">This field is required</span>}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-xl">Password</span>
                    </label>
                    <div className="flex  w-full">
                      <input
                        type={passwordType ? "text" : "password"}
                        name="password"

                        placeholder="password"
                        className="input input-bordered w-full"
                        {...register("password", { required: true })}
                      />
                      <span
                        className="w-2 mt-5 -ml-6 "
                        onClick={() => setPasswordType(!passwordType)}
                      >
                        {passwordType ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                      </span>

                    </div>
                    {errors.password && <span className="text-red-500">This field is required</span>}
                    <p className="mt-5 flex space-x-2 text-lg">
                      <input type="checkbox" name="" id="" />
                      <span> Accept <Link className=" font-bold underline text-[#706F6F] " to={'/terms'}>Terms & Conditions</Link></span>
                    </p>
                    <label className="label text-xl ">
                      <Link to={'/signup'} className=" text-lg">
                        Already have an Account ? <span className="text-red-600 font-bold underline">SignUp</span>
                      </Link>

                    </label>
                  </div>
                  <div className="form-control mt-6">
                    <button type="submit" className="btn hover:bg-green-500 bg-[#403F3F] text-white font-bold text-lg md:text-2xl ">Login</button>

                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Login;