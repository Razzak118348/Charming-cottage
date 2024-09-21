import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Error from "../Pages/Error/Error";
import Properties from "../Pages/Properties/Properties";
import Service from "../Pages/Service/Service";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";


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
        path:'/properties',
        element:<Properties></Properties>
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
    }

]

    }
]);


export default Routes;