import { dayBreakdown } from "../hooks/useWeather";

export interface Photo {
    photo_reference: string,
    width: number
}

export interface Review {
    author_name: string,
    profile_photo_url: string,
    rating: number,
    relative_time_description: string,
    text: string,
    
}

export interface CScapeReview {
    profile_photo: string,
    first_name: string,
    last_name: string,
    city: string,
    year: string,
    money_saved: number,
    rating: number
}

export interface PlaceDetails {
    name: string,
    openings: string[],
    address: string,
    phone_number: string,
    photos: Photo[],
    reviews: Review[],
    website: string
}
export interface Place {
    geometry: { location: { lat: number; lng: number} } 
    name: string
    vicinity: string
    rating: number
    priceLevel: number
    place_id: string,
    category: string
}

export interface TripPlace {
    category: string,
    placeId: string
}

export interface Trip {
    _id: string,
    name: string,
    slug: string,
    location: string,
    coordinates: { lat: string; lng: string},
    viewPort: {east: string, north: string, west: string, south: string},
    date_created: string,
    places: TripPlace[]
}

export interface Weather {
    current: {
        temperature: number
        weather: string
    }
    Day0: dayBreakdown
    Day1: dayBreakdown
    Day2: dayBreakdown
    Day3: dayBreakdown
    Day4: dayBreakdown
    Day5: dayBreakdown
    Day6: dayBreakdown
    Day7: dayBreakdown
}

export interface DetailedTrip {
    tripSummary: Trip,
    tripPlaces: Place[]

}
