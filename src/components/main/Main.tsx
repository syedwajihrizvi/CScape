import Box from "@mui/material/Box"
import "../../assets/styles/main.css"
import DisplayMap from '../map/DisplayMap';
import Weather from '../details/Weather';
import Categories from "../categories/Categories";
import usePlaceStore from "../../stores/usePlaceStore";
import Trips from "../trips/Trips";
import { Outlet } from "react-router-dom";
import MainNavbar from "./MainNavbar"
import { useGlobalContext } from "../../providers/global-provider";
import { useEffect } from "react";

function Main() {
    const { place, selectedPlace, selectedPlan } = usePlaceStore()
    const {isLoggedIn, isLoading } = useGlobalContext()

    useEffect(() => {
        if (isLoading) return;
    }, [isLoading])

    return (
        <Box className={`main-grid ${place || selectedPlace || selectedPlan? "" : "main-grid--no-place"}`}>
            <Box className="main__grid--navbar">
                <MainNavbar/>
            </Box>
            {(place != null|| selectedPlan != null) &&
            <Box className="main__grid--weather">
                <Weather/>
             </Box>
             }
            <Box className="main__grid--map">
                <DisplayMap/>
            </Box>
            <Box className="main__grid--details">
                <Outlet/>
            </Box>
            <Box className="main__grid--content">
                <Categories/>
            </Box>
            {isLoggedIn &&
            <Box className="main__grid--create">
                <Trips/>
            </Box>}
        </Box>
    )
}

export default Main