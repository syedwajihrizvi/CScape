import { useMap } from "@vis.gl/react-google-maps"
import { useEffect } from "react"

interface Props {
    place: google.maps.places.PlaceResult | null,
    marker: google.maps.marker.AdvancedMarkerElement | null,
    location: google.maps.LatLng | undefined,
    viewPort: google.maps.LatLngBounds | google.maps.LatLngBoundsLiteral
}

function MapHandler({place, marker, location, viewPort}: Props) {
    const map = useMap()

    useEffect(() => {
        if (!map || !place || !marker) return
        if (viewPort) {
            map.fitBounds(viewPort)
        }
        marker.position = location
    }, [map, place, marker, location, viewPort])

    return null
}

export default MapHandler