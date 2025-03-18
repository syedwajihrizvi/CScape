import { APIProvider, MapControl, ControlPosition, useAdvancedMarkerRef } from "@vis.gl/react-google-maps"
import MapSearch from "./MapSearch"
import MapHandler from "./MapHandler"
import GoogleMap from "./GoogleMap"
import { getWeatherIcon } from "../../utils/weather/utils"
import useWeather from "../../hooks/useWeather"
import usePlaceStore from "../../stores/usePlaceStore"
import { useNavigate } from "react-router-dom"
import { useTripPlaces } from "../../hooks/useTripPlaces"

function DisplayMap() {
    const { selectedPlan, place:selectedPlace, handlePlaceSelect:setSelectedPlace } = usePlaceStore()
    const { data } = useWeather()
    const [markerRef, marker] = useAdvancedMarkerRef()
    const { data: tripInfo } = useTripPlaces()
    const navigate = useNavigate()
    const handlePlaceSelect = (place: google.maps.places.PlaceResult) => {
        // When a new place is selected, all other details should be reset
        navigate('/main')
        setSelectedPlace(place)
    }
    console.log("Google Maps API Key:", import.meta.env.VITE_GOOGLE_MAPS_API_KEY ? "Loaded" : "Not Found");
    const renderHandler = () => {
        if (selectedPlan == null || !tripInfo)
            return <MapHandler place={selectedPlace} marker={marker} 
                               location={selectedPlace?.geometry?.location} 
                               viewPort={selectedPlace?.geometry?.viewport as google.maps.LatLngBounds}/>
        // eslint-disable-next-line no-unsafe-optional-chaining
        const { coordinates, viewPort } = tripInfo?.tripSummary
        const lat = parseFloat(coordinates.lat)
        const lng = parseFloat(coordinates.lng)
        const { east, west, south, north } = viewPort
        const southWest = new google.maps.LatLng(parseFloat(south), parseFloat(west))
        const northEast = new google.maps.LatLng(parseFloat(north), parseFloat(east))
        const bounds = new google.maps.LatLngBounds(southWest, northEast);
        return <MapHandler place={tripInfo.tripSummary} marker={marker} location={new google.maps.LatLng(lat, lng)} viewPort={bounds}/>
    }

    return (
            <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY} version="3.55">
                <GoogleMap markerRef={markerRef}/>
                <MapControl position={ControlPosition.RIGHT}>
                    <MapSearch onPlaceSelect={handlePlaceSelect}/>
                </MapControl>
                <MapControl position={ControlPosition.LEFT_BOTTOM}>
                    <img className='map-weather' src={getWeatherIcon(data?.current.weather)} width='80px' height='80px'/>
                </MapControl>
                {renderHandler()}
            </APIProvider>
    )
}

export default DisplayMap