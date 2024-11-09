import { useQuery } from "@tanstack/react-query"
import { apiClient } from "../utils/clients/apiClient"
import usePlaceStore from "../stores/usePlaceStore"

export const useCitites = () => {
    const { place } = usePlaceStore()
    console.log(place)
    const fetchCity = () =>
        apiClient.post('/city-details', {city: place?.formatted_address}).then(res => res.data)

    return useQuery({
        queryKey: [place?.formatted_address],
        queryFn: fetchCity,
        staleTime: Infinity,
        enabled: !!place
    })
}