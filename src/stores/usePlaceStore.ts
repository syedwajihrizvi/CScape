import { create } from 'zustand'
import { Place, Trip } from "../interfaces/interfaces"

interface PlaceStore {
    place: google.maps.places.PlaceResult | null,
    name: string | null,
    categories: string[],
    activeCategory: string | null,
    selectedPlace: Place | null,
    selectedPlan: Trip | null,
    selectedInfoWindowPlace : Place | null,
    handlePlaceSelect: (place: google.maps.places.PlaceResult | null) => void,
    handleNameSelect: (name: string | null) => void,
    handleCategorySelect: (category: string) => void,
    handleCategoryDelete: (index: number) => void,
    handleActiveCategorySelect: (category: string) => void,
    handleSelectedPlace: (place: Place) => void,
    handleSetSelectedPlan: (plan: Trip | null) => void,
    handleSetSelectedInfoWindowPlace: (place: Place) => void
    handleSelectedInfoWindowAndSelectedPlace: (place: Place) => void,
    handleDeletingSelectedPlan: () => void
}

const usePlaceStore = create<PlaceStore>(set => ({
    place: null,
    name: null,
    categories: [],
    activeCategory: null,
    selectedPlace: null,
    selectedPlan: null,
    selectedInfoWindowPlace: null,
    handlePlaceSelect: (place: google.maps.places.PlaceResult | null) => set(state => {
        return {...state, place}
    }),
    handleNameSelect: (name: string | null) => set(state => {
        return {...state, name}
    }),
    handleCategorySelect: (category: string) => set(state => {
        if (state.categories.includes(category)) {
            return state
        } else {
            return {...state, categories: [...state.categories, category]}
        }
    }),
    handleCategoryDelete: (index: number) => set(state => {
        const categoryName = state.categories[index]
        const newCategories = state.categories.filter((_,idx) => idx != index)
        return {...state, 
                categories: newCategories, 
                activeCategory: state.activeCategory == categoryName ? null : state.activeCategory,
                selectedPlace: null }
    }),
    handleActiveCategorySelect: (category: string) => set(state => {
        const newCategory = state.activeCategory == category ? null : category
        return {...state, activeCategory: newCategory, selectedPlace: newCategory != null ? state.selectedPlace : null}
    }),
    handleSelectedPlace: (place: Place) => set(state => {
        if (place.name == state.selectedPlace?.name) {
            return {...state, selectedPlace: null}
        }
        return {...state, selectedPlace: place}
    }),
    handleSetSelectedPlan: (plan: Trip | null) => set(state => {
        return {...state, selectedPlan: state.selectedPlan?._id == plan?._id ? null : plan}
    }),
    handleSetSelectedInfoWindowPlace: (place: Place) => set(state => {
        if (place.name == state.selectedInfoWindowPlace?.name) {
            return {...state, selectedInfoWindowPlace: null}
        }
        return {...state, selectedInfoWindowPlace: place}
    }),
    handleSelectedInfoWindowAndSelectedPlace: (place: Place) => set(state => {
        return {...state, selectedInfoWindowPlace: place, selectedPlace: place}        
    }),
    handleDeletingSelectedPlan: () => set(state => {
        return {...state, selectedInfoWindowPlace: null, selectedPlan: null, selectedPlace: null}
    })
}))

export default usePlaceStore