import { useQuery } from "@tanstack/react-query"
import usePlaceStore from "../stores/usePlaceStore"
import { apiClient } from "../utils/clients/apiClient"
import { Place } from "../interfaces/interfaces"

const useOptimizePlans = (startingPlace: Place) => {
    const { selectedPlan } = usePlaceStore()

    const fetchOptimization = () => 
        apiClient.post(`/trips/optimize/${selectedPlan?._id}`, {startingPlace: startingPlace.place_id})
        .then(res => res.data)
        .catch(() => console.log("An Error occured fetching data"))

    return useQuery({
        queryKey: ['optimize', selectedPlan?._id],
        queryFn: fetchOptimization,
        enabled: !!selectedPlan
    })
}

export default useOptimizePlans