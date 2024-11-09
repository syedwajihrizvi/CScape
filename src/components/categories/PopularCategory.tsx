import { Box, Button, CardMedia } from "@mui/material"
import Card from "@mui/material/Card"
import usePlaceStore from "../../stores/usePlaceStore"

interface Props {
    image: string,
    name: string,
    id: string
}

function PopularCategory({image, name, id}: Props) {
    const { handleCategorySelect } = usePlaceStore()

    return (
        <Card className="popular-category" sx={{height:'fit-content'}} onClick={() => handleCategorySelect(id)}>
            <CardMedia
            component="img"
            sx={{ minWidth: 151, height: 100 }}
            image={image}
            alt={name}
            />
            <Box className="popular-category__button">
                <Button className='btn'>{name}</Button>
            </Box>
        </Card>
    )
}

export default PopularCategory