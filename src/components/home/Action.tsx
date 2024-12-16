import { Box, Button, Container, Paper, Typography } from "@mui/material"
import LocalAirportIcon from '@mui/icons-material/LocalAirport';

import action from "../../assets/images/main/action.png"
import { useNavigate } from "react-router-dom";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger)

function Action() {
    const navigate = useNavigate()
    useGSAP(() => {
        gsap.fromTo('.heading', {
            top: '100px',
            opacity: 0,
        }, {
            scrollTrigger: {
                trigger: 'action-box',
                toggleActions: 'play none none reverse'
            },
            opacity: 1,
            top: 0,
            duration: 1,
        })
    
        gsap.fromTo('.heading', {
            top: '100px',
            opacity: 0,
        }, {
            scrollTrigger: {
                trigger: 'action-box',
                toggleActions: 'play none none reverse'
            },
            opacity: 1,
            top: 0,
            duration: 1,
        })

        const animateTargets = ['.action__img', '.description']
        animateTargets.forEach(target => {
            gsap.fromTo(target, {
                opacity: 0,
                top: '400px'
            }, {
                scrollTrigger: {
                    trigger: '.grid',
                    toggleActions: 'play none none reverse'
                },
                opacity: 1,
                top: 0,
                ease: 'power1.inOut'
            })
        })
    }, [])

    return (
        <Container className="container" sx={{overflow: 'hidden'}}>
            <Box className='action-box' overflow='hidden' mb={3}>
                <Typography variant="h2" textAlign='center' className="heading" position='relative'>
                    Plan out all your trips.
                </Typography>
                <Typography variant='h5' textAlign='center' className="heading" position='relative'>
                    Save Money. Travel Better.
                </Typography>
            </Box>
            <Box className='grid grid-spacing' sx={{overflow: 'hidden'}}>
                <img className="action__img" src={action} width='100%'/>
                <Paper className="description" sx={{position: 'relative'}}>
                    <LocalAirportIcon sx={{fontSize:'3rem'}}/>
                    <Typography variant="body1">
                        View several different places and learn everything you need about them. 
                        CScape will only recommend you the top places so you can enjoy your trip
                        to the fullest without any hassle or without wasting time! Our integrated
                        AI will plan out every detail of your trip including tickers, taxis, ubers, 
                        hotels, airbnbs, food, and much more.
                    </Typography>
                    <Button className='btn' onClick={() => navigate('/sign/register')}>Sign Up</Button>
                </Paper>
            </Box>
        </Container>
    )
}

export default Action