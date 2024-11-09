import { useQuery } from "@tanstack/react-query"
import usePlaceStore from "../stores/usePlaceStore"
import { apiClient} from "../utils/clients/apiClient"
import { Trip, Place, DetailedTrip } from "../interfaces/interfaces"

export const useTripPlaces = () => {
    const { selectedPlan } = usePlaceStore()
    const headers = {
        'x-auth-token': localStorage.getItem('x-auth-token')
    }
    const fetchTripPlaces = async () => {
        try {
            const { data: tripInfo } = await apiClient.get<Trip>(`/trips/${selectedPlan?._id}`, {headers})
            // Take the retrieved places and make another call to get the place details
            const { data: placesInfo } = await apiClient.post<Place[]>('/places', {places: tripInfo.places}, {headers})
            return {tripSummary: tripInfo, tripPlaces: placesInfo} as DetailedTrip

        } catch {
            return {} as DetailedTrip
        }
    }
    return useQuery<DetailedTrip>({
        queryKey: [selectedPlan],
        queryFn: fetchTripPlaces,
        enabled: !!selectedPlan
    })
}