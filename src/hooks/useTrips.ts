import { useQuery } from "@tanstack/react-query"
import { apiClient } from "../utils/clients/apiClient"
import { Trip } from "../interfaces/interfaces"

export const useTrips = () => {
    const fetchTrips = () =>
        apiClient.get('/trips', {
            headers: {
                'x-auth-token': localStorage.getItem('x-auth-token')
            }
        })
        .then(res => res.data)
        .catch(err => console.log(err))
    return useQuery<Trip[]>({
        queryKey: ['trips'],
        queryFn: fetchTrips
    })
}
