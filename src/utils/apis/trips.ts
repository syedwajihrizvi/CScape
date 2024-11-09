import { DetailedTrip, Place } from "../../interfaces/interfaces";

export const convertDetailedTripToDict = (trip: DetailedTrip) => {
    const tripMap: {[key: string] : Place} = {}
    trip.tripPlaces.forEach(place => {
        tripMap[place.place_id as keyof typeof tripMap] = place
    })
    return tripMap
}