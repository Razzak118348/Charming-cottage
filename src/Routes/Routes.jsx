import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Error from "../Pages/Error/Error";
import Properties from "../Pages/Properties/Properties";
import Service from "../Pages/Service/Service";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Signup from "../Pages/Signup/Signup";
import PropertyDetails from "../Pages/PropertyDetails/PropertyDetails";
import PrivetRout from "./PrivetRout";
import Profile from "../Pages/Profile/Profile";


const Routes =createBrowserRouter([
    {
path:'/',
element:<Root></Root>,
errorElement:<Error></Error>,
children:[
    {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('/data.json')
    },
    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'/signup',
        element:<Signup></Signup>
    },
    {
        path:'/properties',
        element:<PrivetRout><Properties></Properties></PrivetRout>,
        loader:()=>fetch('/data.json')


    },
    {
        path:'/service',
        element:<Service></Service>
    },
    {
        path:'/about',
        element:<About/>,
    },
    {
        path:'/contact',
        element:<Contact></Contact>
    },
    {
        path:'/properties/:id',
        element:<PrivetRout><PropertyDetails></PropertyDetails></PrivetRout>,
        loader:async()=>fetch('/data.json')
    },
    {
        path:'/profile',
        element:<Profile></Profile>
    }


]

    }
]);


export default Routes;