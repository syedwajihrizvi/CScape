import rain from "../../assets/images/weather/rain.gif"
import clouds from "../../assets/images/weather/clouds.gif"
import drizzle from "../../assets/images/weather/drizzle.gif"
import snow from "../../assets/images/weather/snow.gif"
import sun from "../../assets/images/weather/sun.gif"
import storm from "../../assets/images/weather/storm.gif"

const weatherIcons = {
    "Clouds": clouds,
    "Rain": rain,
    "Clear": sun,
    "Snow": snow,
    "Drizzle": drizzle,
    "Thunderstorm": storm
}

export const getWeatherIcon = (weather: string | undefined) => {
    return weatherIcons[weather as keyof typeof weatherIcons]
}