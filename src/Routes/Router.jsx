import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import AddCoffee from "../Components/AddCoffee";
import Home from "../Pages/Home";
import UpdateCoffee from "../Components/UpdateCoffee";

const router = createBrowserRouter([
    {
        path:'/',
        Component:MainLayout,
        children:[
            {
                index:true,
                loader:()=> fetch("http://localhost:5000/coffees"),
                Component:Home
            },
            {
                path:'/addCoffee',
                Component:AddCoffee
            },
            {
                path:'/updateCoffee',
                Component:UpdateCoffee
            }
        ]
    }
])

export default router;