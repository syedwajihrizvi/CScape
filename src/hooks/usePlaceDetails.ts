import { useQuery } from "@tanstack/react-query"
import { apiClient } from "../utils/clients/apiClient"
import { PlaceDetails } from "../interfaces/interfaces"

const usePlaceDetails = (place_id: string) => {
    const fetchPlaceDetails = () => 
        apiClient.post<PlaceDetails>('/places/place-details', {place_id})
                 .then(res => res.data)
                 .catch(err => {
                    throw err
                 })

    return useQuery<PlaceDetails>({
        queryKey: [place_id],
        queryFn: fetchPlaceDetails,
        staleTime: 86400*3
    })
}

export default usePlaceDetails