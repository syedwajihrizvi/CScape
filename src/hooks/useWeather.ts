import { useQuery } from "@tanstack/react-query"
import usePlaceStore from "../stores/usePlaceStore"
import { apiClient } from "../utils/clients/apiClient"
import { Weather } from "../interfaces/interfaces"

export type dayBreakdown = {
    summary: string,
    day: number,
    night: number,
    eve: number,
    morn: number,
    weather: string   
}

const useWeather = () => {
    const { place, selectedPlan } = usePlaceStore()
    // If place does not exist, use info from selectedPlan
    const lat = selectedPlan == null ? place?.geometry?.location?.lat() : parseFloat(selectedPlan?.coordinates.lat as string)
    const lng = selectedPlan == null ? place?.geometry?.location?.lng() : parseFloat(selectedPlan?.coordinates.lng as string)
    const fetchWeather = () => 
        apiClient.post('/weather', {lat, lon:lng})
        .then(res => res.data)
        .catch(err => console.log(err)) 

    return useQuery<Weather>({
        queryKey: ['weather', {lat, lon: lng}],
        queryFn: fetchWeather,
        enabled: !!place || !!selectedPlan
    })
}

export default useWeather