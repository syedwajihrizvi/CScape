import useWeather from "../../hooks/useWeather"
import { Box } from '@mui/material'
import WeatherImage from './WeatherImage'

function Weather() {
    const { data } = useWeather()
    const currentDay = new Date().getDay()

    // Generate array of next days based of currentDay
    const allDays = [currentDay]
    let nextDay = currentDay
    while (allDays.length != 8) {
        nextDay += 1;
        if (nextDay > 6)
            nextDay = 0
        allDays.push(nextDay)
    }

    return (
        <Box className="upcoming-weathers">
            <WeatherImage weather={data?.Day0.weather} day={allDays[0]}/>
            <WeatherImage weather={data?.Day1.weather} day={allDays[1]}/>
            <WeatherImage weather={data?.Day2.weather} day={allDays[2]}/>
            <WeatherImage weather={data?.Day3.weather} day={allDays[3]}/>
            <WeatherImage weather={data?.Day4.weather} day={allDays[4]}/>
            <WeatherImage weather={data?.Day5.weather} day={allDays[5]}/>
            <WeatherImage weather={data?.Day6.weather} day={allDays[6]}/>
            <WeatherImage weather={data?.Day7.weather} day={allDays[7]}/>
        </Box>
    )
}

export default Weather