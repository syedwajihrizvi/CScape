import { Button } from "@mui/material"
import Box from "@mui/material/Box"
import logo from "../../assets/images/home/logo.png"
import { useNavigate } from "react-router-dom"

function NavBar() {
    const navigate = useNavigate()
    return (
        <Box className="navbar">
            <img src={logo}/>
            <Button onClick={() => navigate('sign')} className="btn btn-sign-in">Sign In</Button>
        </Box>
    )
}

export default NavBar