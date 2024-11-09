import Box from "@mui/material/Box"
import { Photo } from "../../interfaces/interfaces"
import PhotoImage from "./PhotoImage"
import { ImageList, ImageListItem } from "@mui/material"

interface Props {
    photos: Photo[]
}

function PlacePhotos({photos}: Props) {
    // Only get half of the photos for now
    const displayPhotos = photos.slice(0, (photos.length/2)+1)
    return (
        <Box sx={{ width: '100%'}}>
        <ImageList variant="masonry" cols={3} sx={{overflowX: 'hidden'}}>
        {displayPhotos.map((photo) => (
            <ImageListItem key={photo.photo_reference}>
            <PhotoImage
                reference={photo}
            />
            </ImageListItem>
        ))}
        </ImageList>
        </Box>
    )
}

export default PlacePhotos
