import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import AddCoffee from "../Pages/AddCoffee";
import Home from "../Pages/Home";
import UpdateCoffee from "../Components/UpdateCoffee";
import CoffeeDetails from "../Pages/CoffeeDetails";

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
            },
            {
                path:'/coffeDetails/:id',
                loader:({params})=>fetch(`http://localhost:5000/coffees/${params.id}`),
                Component:CoffeeDetails
            }
        ]
    }
])

export default router;