import usePlaceStore from "../stores/usePlaceStore"
import { useQuery } from "@tanstack/react-query"
import { apiClient } from "../utils/clients/apiClient"
import { categoryNameToId } from "../utils/categories"
import { CategoricalPlaces } from "../components/map/GoogleMap"

export const usePlaces = (useActiveCategory:boolean = false) => {
    const { place, categories:selectedCategories, activeCategory } = usePlaceStore()
    const lat = place?.geometry?.location?.lat() as number
    const lng = place?.geometry?.location?.lng() as number
    const location = `${lat},${lng}`

    
    const categoryQuery =  useActiveCategory && activeCategory ? activeCategory:selectedCategories[selectedCategories.length-1]
    const categoriesToQuery = [categoryQuery]
    const categoryToQueryArray = categoriesToQuery.map(category => categoryNameToId[category as keyof typeof categoryNameToId]) 

    const fetchPlaces = () => {
        return apiClient.post<CategoricalPlaces[]>('/places/nearby', {location, type:categoryToQueryArray})
        .then(res => res.data)
        .catch(err => console.log(err))
    }

    return useQuery({
        queryKey: [location, categoryQuery],
        queryFn: () => fetchPlaces(),
        placeholderData: (prev) => prev,
        enabled: !!categoryQuery
        },
    )
}

export const useMultiplePlaces = () => {
    const { place, categories:selectedCategories } = usePlaceStore()
    const lat = place?.geometry?.location?.lat() as number
    const lng = place?.geometry?.location?.lng() as number
    const location = `${lat},${lng}`

    
    const categoriesToQuery = selectedCategories
    const categoryToQueryArray = categoriesToQuery.map(category => categoryNameToId[category as keyof typeof categoryNameToId]) 

    const fetchPlaces = () => {
        return apiClient.post<CategoricalPlaces[]>('/places/nearby', {location, type:categoryToQueryArray})
        .then(res => res.data)
        .catch(err => console.log(err))
    }

    return useQuery({
        queryKey: [location, categoriesToQuery],
        queryFn: () => fetchPlaces(),
        placeholderData: (prev) => prev,
        enabled: !!categoriesToQuery
        },
    )    
}
export default usePlaces