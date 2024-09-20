import {createBrowserRouter} from "react-router-dom"
import LayOut from "../components/block/LayOut"
import LandingPage from "../pages/LandingPage"
import AboutPage from "../pages/AboutPage"
import Register from "../pages/auth/Register"
import SignIn from "../pages/auth/SignIn"
import Counter from "../pages/Counter"
import ObjectAsArray from "../pages/ObjectAsArray"

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
    },
    {
        path : "/register",
        element : <Register />
    },
    {
        path : "/sign-in",
        element : <SignIn />
    },
    {
        path : "/counter",
        element : <Counter />
    },
    {
        path : "/object",
        element : <ObjectAsArray />
    },
])