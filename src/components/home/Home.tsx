import { Box } from "@mui/material"
import Reviews from "./Reviews/Reviews"
import NavBar from "./NavBar"
import Banner from "./Banner"
import ShowCase from "./ShowCase"
import Action from "./Action"
import Footer from "./Footer"
import Detail from "./Detail"
import Divider from '@mui/material/Divider';


function Home() {
    return (
        <Box className="home-grid">
            <Box className="navbar">
                <NavBar/>
            </Box>
            <Box className="main">
                <Banner/>
                <Divider/>
                <ShowCase/>
                <Divider/>
                <Action/>
                <Divider/>
                <Reviews/>
                <Detail/>
            </Box>
            <Box className="footer">
                <Footer/>
            </Box>
        </Box>
    )
}

export default Home