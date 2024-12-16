import Card from "@mui/material/Card";
import Container from "@mui/material/Container"
import { Box, CardContent, Typography, Button, CardActions, Paper } from '@mui/material';
import display from "../../assets/images/main/Displays.png"
import { useNavigate } from "react-router-dom";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger)

function ShowCase() {
    const navigate = useNavigate()

    useGSAP(() => {
        gsap.fromTo('.heading', {
            opacity: 0,
            top: '100px'
        }, {
            scrollTrigger: {
                trigger: '.container',
                toggleActions: 'play none none reverse'
            },
            opacity: 1,
            top: 0,
            stagger: 0.1
        })

        const animateTargets = ['.image-description', '.img']
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
    }, [window.window.innerWidth])

    return (
        <Container className="container container--white">
            <Box className="showcase-box" overflow='hidden'>
                <Typography variant="h2" textAlign='center' className="heading" position='relative'>
                    Use CScape on Any Device
                </Typography>
                <Typography variant='h5' textAlign='center' className="heading" position='relative'>
                    Laptop, phone, tabet, and many others.
                </Typography>
            </Box>
            <Box className='grid' sx={{overflowY: 'hidden'}}>
                <Paper elevation={8} className='image-description' sx={{borderRadius: '2rem'}}>
                    <Card>
                        <CardContent>
                            <Typography variant='h4'>Anytime you want. Anywhere you want.</Typography>
                            <Typography variant='body1'>
                                Our app is free to use and can be utilized on several devices. 
                                Whether it is your laptop, phone, table, iwatch, anything. Experience the benefits only CScape users get! 
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button className='btn' onClick={() => navigate('/sign/register')}>Sign Up</Button>
                        </CardActions>
                    </Card>
                </Paper>
                <Box className='images'>
                    <Box className="img" position='relative'>
                        <img src={display} width='100%'/>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default ShowCase