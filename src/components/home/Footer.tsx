import { Box, List, ListItem, Typography } from "@mui/material"

function Footer() {
    return (
        <Box className='footer-grid'>
            <List>
                <ListItem>
                    <Typography variant="h6" fontWeight='bold'>Affiliates</Typography>
                </ListItem>
                <ListItem>
                    <Typography variant="h6" fontWeight='bold'>About</Typography>
                </ListItem>
            </List>
            <List>
                <ListItem>
                    <Typography variant="h6" fontWeight='bold'>Contact</Typography>
                </ListItem>
                <ListItem>
                    <Typography variant="h6" fontWeight='bold'>Careers</Typography>
                </ListItem>
            </List>
            <List>
                <ListItem>
                    <Typography variant="h6" fontWeight='bold'>FAQ</Typography>
                </ListItem>
                <ListItem>
                    <Typography variant="h6" fontWeight='bold'>Products</Typography>
                </ListItem>
            </List>
            <List>
                <ListItem>
                    <Typography variant="h6" fontWeight='bold'>Knowledge</Typography>
                </ListItem>
                <ListItem>
                    <Typography variant="h6" fontWeight='bold'>Blog</Typography>
                </ListItem>
            </List>
        </Box>
    )
}

export default Footer