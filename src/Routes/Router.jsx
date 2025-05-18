import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import AddCoffee from "../Components/AddCoffee";

const router = createBrowserRouter([
    {
        path:'/',
        Component:MainLayout,
        children:[
            {
                path:'/addCoffee',
                Component:AddCoffee
            },
            {

            }
        ]
    }
])

export default router;