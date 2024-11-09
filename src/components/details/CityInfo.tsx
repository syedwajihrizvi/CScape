import usePlaceStore from "../../stores/usePlaceStore"
import Box from "@mui/material/Box"
import { Typography } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';

import { useCitites } from '../../hooks/useCities';

function CityInfo() {
    const { place } = usePlaceStore()
    const {data, isFetching } = useCitites()
    return (
        <Box className="city-info">
            <Typography variant='h3'>{place?.formatted_address}</Typography>
            {isFetching && 
            <Box className="loader">
                <CircularProgress/>
            </Box>}
            {!isFetching && 
            <Typography variant="body1">
                {data}
            </Typography>}
        </Box>
    )
}

export default CityInfo