import { Box, Button, Paper, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"

function Detail() {
    const navigate = useNavigate()
    return (
        <Paper elevation={3} className="detail">
            <Box>
                <Typography variant="h4" sx={{fontWeight: 'bold'}}>Ready to get started?</Typography>
                <Typography>
                    Save money, travel more efficiently, and enjoy your vactions. CScape will remove
                    all the hassle for you and make your life much better guaranteed.
                </Typography>
            </Box>
            <Box className="detail-button">
                <Button className="btn" onClick={() => navigate('/sign/register')}>
                    Get Started
                </Button>
            </Box>
        </Paper>
    )
}

export default Detail