import Box from "@mui/material/Box"
import { Typography } from "@mui/material"

import { getWeatherIcon } from "../../utils/weather/utils"

interface Props {
    weather: string | undefined,
    day: number
}

const days : string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

function WeatherImage({weather, day}: Props) {
    return (
        <Box className="weather" textAlign='center'>
            <img src={getWeatherIcon(weather)} width="60px" height="60px"/>
            <Typography fontWeight='bold' variant="body1" margin={0}>{days[day]}</Typography>
        </Box>
    )
}

export default WeatherImage