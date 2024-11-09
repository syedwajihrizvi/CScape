import { createBrowserRouter } from "react-router-dom";
import Main from "../components/main/Main";
import CategoryListings from "../components/categories/CategoryListings";
import PlaceDetails from "../components/categories/PlaceDetails"
import Home from "../components/home/Home";
import Register from "../components/Sign/Register";
import Sign from "../components/Sign/Sign";
import SignIn from "../components/Sign/SignIn";
import TripDetails from "../components/details/TripDetails";
import CityInfo from "../components/details/CityInfo";
import OptimizeTrip from "../components/details/OptimizeTrip";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    { 
        path: '/main',
        element: <Main/>,
        children: [
            {
                path: '',
                element: <CityInfo/>
            },
            {
                path: '/main/listings',
                element: <CategoryListings/>
            },
            {
                path: 'places/:id',
                element: <PlaceDetails/>
            },
            {
                path: 'trips/:slug',
                element: <TripDetails/>
            },
            {
                path: 'trips/:slug/optimize',
                element: <OptimizeTrip/>
            }
        ]
    },
    {
        path: '/sign',
        element: <Sign/>,
        children: [
            {
                path: '',
                element: <SignIn/>
            },
            {
                path: 'register',
                element: <Register/>
            }
        ]

    }
])

export default router