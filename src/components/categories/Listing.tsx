import { ListItem, ListItemText, Typography, Divider } from "@mui/material"
import { renderRating } from "./Rating"
import { Place } from "../../interfaces/interfaces"

interface Props {
    place: Place,
    handleSelectingPlace: (place: Place) => void
}

function Listing({place, handleSelectingPlace}: Props) {

    return (
        <>
        <ListItem disableGutters secondaryAction={renderRating(place.rating)} onClick={() => handleSelectingPlace(place)}
                        className="plan">
            <ListItemText>
                <Typography variant="h4">{place.name}</Typography>
            </ListItemText>
        </ListItem>
        <Divider sx={{backgroundColor: 'grey'}} variant="fullWidth" component="li" />
    </>
    )
}

export default Listing