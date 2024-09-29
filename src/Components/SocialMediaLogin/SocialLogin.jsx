import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const SocialLogin = () => {
    const {googleLogin,
        gitHubLogin}=useAuth();
        const navigate =useNavigate();
        const location = useLocation();
        const destination = location?.state?location.state:'/';
        const handleSocialMedialLogin =(SocialProvider)=>{
            SocialProvider()
            .then(result=>{
                if(result.user){
                    navigate(destination)
                }
            })
        }
    return (
        <div className="flex justify-center  items-center space-x-3 ">



<button
          onClick={() => handleSocialMedialLogin(googleLogin)}
          className="btn btn-primary btn-sm btn-outline w-32 md:w-56 "
        >
        Login with  Google
        </button>
        <button
          onClick={() => handleSocialMedialLogin(gitHubLogin)}
          className="btn btn-secondary btn-sm btn-outline w-32 md:w-56"
        >
       Login with   Github
        </button>
</div>

    );
};

export default SocialLogin;