import { useState } from "react";
import { Helmet } from "react-helmet";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const Signup = () => {

  const [passwordType, setPasswordType] = useState(false);
  const { creatUser,
    updateUserProfile } = useAuth();

const notify =()=>{
  toast.success("Successfully SignUp",{
    position:"top-right"
  })
}

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const navigate = useNavigate()


  const onSubmit = (data) => {
    const { name, image, email, password } = data;
    console.log(name, email, password)

    //creat user
    creatUser(email, password)
      .then(() => {
        updateUserProfile(name, image)
          .then(() => {
            navigate('/');
            console.log('REGISTER SUCCESSFULL')
          })
      })
  }

  return (
    <div>
      <Helmet><title>SignUp | Charming Cottage</title></Helmet>
      <ToastContainer
autoClose={500}
      ></ToastContainer>
      {/* signup form  */}
      <div className="mt-10 md:mt-20 min-h-screen p-3 rounded-2xl ">

        <div className="popin-font mt-44 md:mt-8 mb-10 lg:mx-80 lg:my-40 bg-[#FFFFFF] border border-green-300 text-center  rounded-xl">
          <h2 className="text-xl md:text-4xl font-semibold text-[rgb(64,63,63)] mt-9">Please Register </h2>

          <hr className="mt-8" />



          <div className="">
            <div className="hero-content flex-col ">
              <div className="text-center lg:text-left">


              </div>
              <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-lg">Your name</span>
                    </label>
                    <input type="text" name="name" placeholder="Input your Name" className="input input-bordered"

                      {...register("name", { required: true })}
                    />
                    {errors.name && (
                      <span className="text-red-500">This field is required</span>
                    )}

                    <label className="label">
                      <span className="label-text text-lg">Photo Url</span>
                    </label>
                    <input type="text" name="photo" placeholder=" photo url" className="input input-bordered"   {...register("image")} />
                    <label className="label">
                      <span className="label-text text-lg">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered"   {...register("email", { required: true })} />
                    {errors.email && (
                      <span className="text-red-500">This field is required</span>
                    )}
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
                    {errors.password && (
                      <span className="text-red-500">This field is required</span>
                    )}

                    <p className="mt-5 flex space-x-2 text-lg">
                      <input type="checkbox" name="" id="" />
                      <span> Accept <Link className=" font-bold underline text-[#706F6F] " to={'/terms'}>Terms & Conditions</Link></span>
                    </p>
                    <label className="label text-xl ">
                      <Link to={'/login'} className=" text-lg">
                        Already have an Account ? <span className="text-red-600 font-bold underline">Login</span>
                      </Link>

                    </label>
                  </div>
                  <div className="form-control mt-6">
                    <button onClick={notify} type="submit" className="btn hover:bg-green-500 bg-[#403F3F] text-white font-bold text-lg md:text-2xl ">SignUp</button>

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

export default Signup;