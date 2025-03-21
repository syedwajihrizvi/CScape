import { Box, createTheme, List, Typography, ThemeProvider } from "@mui/material"
import { useNavigate } from "react-router-dom";
import usePlaceStore from "../../stores/usePlaceStore"
import usePlaces from "../../hooks/usePlaces";
import { Place } from "../../interfaces/interfaces";
import Listing from "./Listing";

const theme = createTheme();

theme.typography.h3 = {
    fontWeight: 'bold',
    fontSize: '2rem',
}

theme.typography.h4 = {
    fontWeight: 'bold',
    fontSize: '1rem'
}

function CategoryListings() {
    const { activeCategory, place, selectedPlace, handleSelectedInfoWindowAndSelectedPlace } = usePlaceStore()
    const { data: places } = usePlaces(true)
    const navigate = useNavigate()

    const handleSelectingPlace = (place: Place) => {
        handleSelectedInfoWindowAndSelectedPlace({...place, category: activeCategory as string})
        if (place.place_id == selectedPlace?.place_id)
            navigate('/')
        else
            navigate(`/places/${place.place_id}`)
    }
    const categoryListings = places ? places[0] : null
    return (
        <Box padding={2}>
            <ThemeProvider theme={theme}>
                <Typography variant="h3">{activeCategory}s in {place?.name}</Typography>
                {!categoryListings && <Typography>No Listings</Typography>}
                {categoryListings && 
                    <List>
                    {categoryListings.places.map(place => <Listing place={place} handleSelectingPlace={handleSelectingPlace}/>)}
                </List>
                }
            </ThemeProvider>
        </Box>
    )
}

export default CategoryListings