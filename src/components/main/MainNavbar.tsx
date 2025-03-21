import { Avatar, Box, Button, IconButton, ListItemIcon, Menu, MenuItem } from "@mui/material"
import Tooltip from "@mui/material/Tooltip"
import logo from "../../assets/images/home/logo.png"
import { useState } from "react"
import { Logout, Settings } from "@mui/icons-material"
import PersonIcon from '@mui/icons-material/Person';
import { Link, useNavigate } from "react-router-dom"
import { useGlobalContext } from "../../providers/global-provider"
import { useQueryClient } from "@tanstack/react-query"

function MainNavbar() {
    const queryClient = useQueryClient()
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const {isLoggedIn, user} = useGlobalContext()
    const navigate = useNavigate()
    const open = Boolean(anchorEl)

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = (logout: boolean = false) => {
        setAnchorEl(null)
        if (logout) {
            localStorage.removeItem('x-auth-token')
            queryClient.invalidateQueries({queryKey: ['me']})
            queryClient.refetchQueries({queryKey: ['me']})
            navigate('/')
        }
    }

    return (
        <Box className="main-navbar">
            <img src={logo}/>
            {!isLoggedIn && 
            <Link to="/sign/register">
            <Button style={{backgroundColor:'white', 
                            color: 'black', padding: "5px 10px", 
                            borderRadius: '5px'}}>
                Sign Up
            </Button>
            </Link>}
            {isLoggedIn && user && 
            <Tooltip title="Account settings">
                <IconButton
                    onClick={handleClick}
                    size="medium"
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-popup="true"
                    aria-expanded={open ? true : undefined}
                    > 
                    <Avatar sx={{width: 32, height: 32, backgroundColor: 'white', color: 'black'}}>{user?.firstName[0].toUpperCase()}</Avatar>
                </IconButton>
             </Tooltip>}
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={() => handleClose()}
                onClick={() => handleClose()}
                slotProps={{
                    paper: {
                      elevation: 0,
                      sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                          width: 32,
                          height: 32,
                          ml: -0.5,
                          mr: 1,
                        },
                        '&::before': {
                          content: '""',
                          display: 'block',
                          position: 'absolute',
                          top: 0,
                          right: 14,
                          width: 10,
                          height: 10,
                          bgcolor: 'background.paper',
                          transform: 'translateY(-50%) rotate(45deg)',
                          zIndex: 0,
                        },
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
                    <MenuItem>
                        <ListItemIcon>
                            <PersonIcon sx={{color: 'white'}} fontSize="small" />
                        </ListItemIcon>
                        Account
                    </MenuItem>
                    <MenuItem onClick={() => handleClose()}>
                        <ListItemIcon>
                            <Settings sx={{color: 'white'}} fontSize="small" />
                        </ListItemIcon>
                        Settings
                    </MenuItem>
                    <MenuItem onClick={() => handleClose(true)}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                    </MenuItem>
            </Menu>
        </Box>
    )
}

export default MainNavbar