import Card from "@mui/material/Card";
import Container from "@mui/material/Container"
import { Box, CardContent, Typography, Button, CardActions, Paper } from '@mui/material';
import display from "../../assets/images/main/Displays.png"
import { useNavigate } from "react-router-dom";

function ShowCase() {
    const navigate = useNavigate()
    return (
        <Container className="container container--white">
            <Typography variant="h2" textAlign='center'>Use CScape on Any Device</Typography>
            <Typography variant='h5' textAlign='center'>Laptop, phone, tabet, and many others</Typography>
            <Box className='grid'>
                <Paper elevation={8} className='image-description'>
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
                    <Box>
                        <img src={display} width='100%'/>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default ShowCase