import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import PopularCategories from "./PopularCategories"
import SearchCategory from "./SearchCategory"

function Categories() {
    return (
        <Grid className="categories" container>
            <Grid item xs={3} sx={{height: '100%'}}>
                <Box className='categories__search'>
                    <SearchCategory/>
                </Box>
            </Grid>
            <Grid item xs={9}>
                <PopularCategories/>
            </Grid>
        </Grid>
    )
}

export default Categories