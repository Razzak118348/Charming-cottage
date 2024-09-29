import { Helmet } from "react-helmet";
import useAuth from "../../hooks/useAuth";
import { toast, ToastContainer } from 'react-toastify';

import { useForm } from "react-hook-form"
import { useContext } from "react";
import { AuthContext } from "../../Context/ContextApi";
import { updateEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const { user, updateUserProfile} =useContext(AuthContext)
    console.log(user)
    const navigate = useNavigate()
if(!user){
    return <div className="text-center my-20"><span className="loading loading-spinner loading-lg"></span>

      </div>

}
    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const { name, email, image } = data;
        console.log(name, image, data)

        // user update
        updateUserProfile(name, image)
            .then(() => {
                toast.success("SuccessFully Update Name and image", {
                    position: "top-right"
                })
            })
            .catch(() => {
                toast.error('An error occured', {
                    position: 'top-right'
                })
            })

           updateEmail(user,email)
            .then(() => {
                toast.success("SuccessFully Email update", {
                    position: "top-right"
                })
            })
            .catch((error) => {
                console.log(error.message)
                toast.error(error.message, {
                    position: 'top-right'
                })
            })
    }

    return (
        <div>
            <Helmet>
                <title>Profile : Cottage</title>
            </Helmet>
            <ToastContainer></ToastContainer>
            <div className="text-center mt-10 bg-base-200 p-5">
                <p className="text-xl font-bold ">Name : {user.displayName}</p>
                <p className="text-xl font-bold ">Email : {user.email}</p>
                <p className="text-xl font-bold ">PhotoUrl: {user.photoURL}</p>
            </div>

            <h3 className="text-3xl font-bold text-center mt-16">Update profile info</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-5 animate__animated animate__backInLeft ">
                <div className="flex  space-x-10 px-5 mb-3">
                    <div className="w-1/3 form-control"><p>Name</p>
                        <input className="border-2 h-8 w-full " type="text" placeholder="Name" name='name'
                            {...register('name', { required: true })}
                        />
                        {errors.name && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div className="w-2/3 form-control"><p>Email</p>
                        <input className="border-2 h-8 w-full " type="email" placeholder="Email" name="email"
                            {...register('email', { required: true })}
                        />
                        {errors.email && <span className="text-red-500">This field is required</span>}
                    </div>
                </div>


                <div className="flex  mb-4 space-x-10 px-5 form-control">
                    <div className="w-full"><p>PhotoURL
                    </p>
                        <input className="border-2 h-8 w-full " type="text" placeholder="Photo Url" name="image"
                            {...register('image')}
                        />
                    </div>

                </div>


                <div className="form-control">
                    <button type="submit" className="bg-yellow-500 text-lg font-medium btn m-5 ">Update Profile</button>
                </div>


            </form>

        </div>
    );
};

export default Profile;