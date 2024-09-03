import {createBrowserRouter} from "react-router-dom"
import LayOut from "../components/block/LayOut"
import LandingPage from "../pages/LandingPage"
import AboutPage from "../pages/AboutPage"

export const MainRoute = createBrowserRouter([
    {
        path : "/",
        element : <LayOut />,
        children: [
            {
                index : true,
                element : <LandingPage />
            },
            {
             path : "/about",
             element : <AboutPage />   
            }
        ]
    }
])