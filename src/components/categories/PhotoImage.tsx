import CircularProgress from "@mui/material/CircularProgress"
import usePhotos from "../../hooks/usePhotos"
import { Photo } from "../../interfaces/interfaces"

interface Props {
    reference: Photo
}

function PhotoImage({reference}: Props) {
    const { data, isFetching } =  usePhotos(reference.photo_reference, 100)

    if (isFetching)
        return (
            <CircularProgress />
        )
    else
        return (
            <img src={data} alt="image" loading="lazy"/>
    )
}

export default  PhotoImage
