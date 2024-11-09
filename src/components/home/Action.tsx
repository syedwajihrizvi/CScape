import { Box, Button, Container, Paper, Typography } from "@mui/material"
import LocalAirportIcon from '@mui/icons-material/LocalAirport';

import action from "../../assets/images/main/action.png"
import { useNavigate } from "react-router-dom";

function Action() {
    const navigate = useNavigate()
    return (
        <Container className="container">
            <Box className='grid grid-spacing'>
                <img src={action} width='100%'/>
                <Paper className="description">
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