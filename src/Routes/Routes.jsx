import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";


const Routes =createBrowserRouter([
    {
path:'/',
element:<Root></Root>,
children:[
    {
        path:'/',
        element:<Home></Home>
    },
    {
        path:'/login',
        element:<Login></Login>
    },
]

    }
]);


export default Routes;