import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";


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

        </div>
    );
};

export default Home;