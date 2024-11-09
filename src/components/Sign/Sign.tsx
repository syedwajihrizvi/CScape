import { Container } from "@mui/material"
import { Outlet } from "react-router-dom"

function Sign() {
    return (
        <Container sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
            <Outlet/>
        </Container>
    )
}

export default Sign