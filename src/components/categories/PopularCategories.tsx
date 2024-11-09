import Box from "@mui/material/Box"
import PopularCategory from './PopularCategory';

import food from '../../assets/images/categories/food.jpg'
import hotel from "../../assets/images/categories/hotels.webp"
import nightlife from "../../assets/images/categories/nightlife.jpg"
import shopping from "../../assets/images/categories/shopping.jpg"

function PopularCategories() {
    return (
            <Box className='categories__popular'>
                <PopularCategory image={food} name="Restuarants" id="Restaurant"/>
                <PopularCategory image={hotel} name="Lodging" id="Lodging"/>
                <PopularCategory image={nightlife} name="Night Clubs" id="Night Club"/>
                <PopularCategory image={shopping} name="Shopping" id="Shopping Mall"/>
            </Box>
    )
}

export default PopularCategories