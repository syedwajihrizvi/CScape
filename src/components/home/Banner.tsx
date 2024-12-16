import { Box, Container, Paper, Typography } from "@mui/material";
import displayImage from "../../assets/images/main/cscape.png"
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import MapIcon from '@mui/icons-material/Map';
import PaidIcon from '@mui/icons-material/Paid';
import {useGSAP} from "@gsap/react"
import gsap from 'gsap'

function Banner() {

    useGSAP(() => {
        gsap.fromTo('.banner__img', {
            opacity: 0,
            left: '-100%'
        },
        {
            opacity: 1,
            left: 0
        })

        gsap.fromTo('.banner__description', {
            opacity: 0,
            right: '-100%'
        },
        {
            opacity: 1,
            right: '0'
        })
    }, [])

    return (
        <Container className="container">
            <Box className="banner">
                <img className="banner__img" src={displayImage}/>
                <Paper elevation={8} className="banner__description">
                    <Box className="banner__description__item">
                        <MapIcon sx={{marginTop: '0.5rem', marginRight: '0.5rem'}}/>
                        <Box>
                            <Typography variant="h4" fontWeight='bold' sx={{marginBottom: 0}}>Explore Any City in the World</Typography>
                            <Typography variant="body1" sx={{marginTop: 0}}>
                                Explore all the places in any city that you want. 
                                Detailed information including reviews on popular restaurants, bars, and several tourist destinations.

                            </Typography>
                        </Box>
                    </Box>
                    <Box className="banner__description__item">
                        <AirplanemodeActiveIcon sx={{marginTop: '0.5rem', marginRight: '0.5rem'}}/>
                        <Box>
                            <Typography variant="h4" fontWeight='bold'>Plan the trip out</Typography>
                            <Typography variant="body1">
                                Our app is integrated with AI, which uses our alogirthm to plan out your trip in a specific city based on all the destionations
                                you want to visit. It will include several factors such as weather, cost, and trip details. Save money and travel better.
                                </Typography>
                        </Box>
                    </Box>
                    <Box className="banner__description__item">
                        <PaidIcon sx={{marginTop: '0.5rem', marginRight: '0.5rem'}}/>
                        <Box>
                            <Typography variant="h4" fontWeight='bold'>Become a Partner</Typography>
                            <Typography variant="body1">
                                Earn money through our affiliate programs. Travel the world, explore the popular places in a city, leave reviews, and earn good money. Become a certified
                                CScape Tourist today.
                            </Typography>
                        </Box>
                    </Box>
                </Paper>
            </Box>
        </Container>
    )
}

export default Banner

