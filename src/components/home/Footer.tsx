import { Box, List, ListItem, Typography } from "@mui/material"

function Footer() {
    return (
        <Box className='footer-grid'>
            <List>
                <ListItem>
                    <Typography variant="h6">Affiliates</Typography>
                </ListItem>
                <ListItem>
                    <Typography variant="h6">About</Typography>
                </ListItem>
            </List>
            <List>
                <ListItem>
                    <Typography variant="h6">Contact</Typography>
                </ListItem>
                <ListItem>
                    <Typography variant="h6">Careers</Typography>
                </ListItem>
            </List>
            <List>
                <ListItem>
                    <Typography variant="h6">FAQ</Typography>
                </ListItem>
                <ListItem>
                    <Typography variant="h6">Products</Typography>
                </ListItem>
            </List>
            <List>
                <ListItem>
                    <Typography variant="h6">Knowledge</Typography>
                </ListItem>
                <ListItem>
                    <Typography variant="h6">Blog</Typography>
                </ListItem>
            </List>
        </Box>
    )
}

export default Footer