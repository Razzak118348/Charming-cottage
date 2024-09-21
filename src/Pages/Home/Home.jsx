import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import HowItsWork from "../../Components/HowItsWork/HowItsWork";


const Home = () => {
    const data = useLoaderData()
    console.log(data);

    return (
        <div>
<Helmet>
    <title>Charming cottage | Home</title>
</Helmet>

<Banner></Banner>

{/* How its work section  */}
<HowItsWork></HowItsWork>
        </div>
    );
};

export default Home;