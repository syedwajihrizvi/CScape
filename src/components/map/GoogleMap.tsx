import { Map, AdvancedMarker, AdvancedMarkerRef, Pin, InfoWindow } from "@vis.gl/react-google-maps"
import { useMultiplePlaces } from "../../hooks/usePlaces"
import { Place } from "../../interfaces/interfaces"
import usePlaceStore from "../../stores/usePlaceStore"
import { categoryColors } from "../../utils/categories"
import Box from "@mui/material/Box"
import { Typography } from "@mui/material"
import { renderRating } from '../categories/Rating';
import { useNavigate } from "react-router-dom"
import { useTripPlaces } from "../../hooks/useTripPlaces"
import { idToCategoryName } from "../../utils/categories"

interface Props {
    markerRef: (m: AdvancedMarkerRef | null) => void
}

export interface CategoricalPlaces {
    category: string,
    places: Place[]
}

function GoogleMap({markerRef}: Props) {
    const { categories, selectedPlace, selectedPlan, selectedInfoWindowPlace, handleSetSelectedInfoWindowPlace, handleSelectedInfoWindowAndSelectedPlace } = usePlaceStore()
    const { data: places } = useMultiplePlaces()
    const { data: tripInfo, isFetching } = useTripPlaces()
    const navigate = useNavigate()
    const handleSelectingMarker = (place: Place) => {
        if (place.name == selectedPlace?.name)
            navigate(`/`)
        else
            navigate(`/places/${place.place_id}`)
        handleSelectedInfoWindowAndSelectedPlace(place)
    }
    return (
        <Map mapId={'cbc095307e35fe6d'} defaultZoom={12} 
             defaultCenter={{ lat: 40.7128, lng: -74.0060}} 
             fullscreenControl={false}>
                <AdvancedMarker ref={markerRef} position={null}>
                    <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} />
                </AdvancedMarker>
                {!selectedPlan && 
                    places?.map(categoryPlaces =>
                        categoryPlaces.category && categories.includes(idToCategoryName[categoryPlaces.category as keyof typeof idToCategoryName]) && categoryPlaces.places.map(place => 
                        <AdvancedMarker position={place.geometry.location} onClick={() => handleSelectingMarker({...place, category: idToCategoryName[categoryPlaces.category as keyof typeof idToCategoryName]})}>
                            <Pin
                            background={categoryColors[idToCategoryName[categoryPlaces.category as keyof typeof idToCategoryName] as keyof typeof categoryColors]['backgroundColor']} 
                            glyphColor={'#000'} borderColor={'#000'}/>
                        </AdvancedMarker>
                        )
                    )
                }
                {selectedPlan && !isFetching && 
                    tripInfo?.tripPlaces?.map(tripPlace => 
                        <AdvancedMarker position={tripPlace.geometry.location} onClick={() => handleSelectingMarker(tripPlace)}>
                        <Pin
                        background={categoryColors[tripPlace.category as keyof typeof categoryColors]['backgroundColor']} 
                        glyphColor={'#000'} borderColor={'#000'}/>
                    </AdvancedMarker>
                    )
                }
                {selectedInfoWindowPlace && 
                <InfoWindow position={selectedInfoWindowPlace?.geometry.location} 
                            onClose={() => handleSetSelectedInfoWindowPlace(selectedInfoWindowPlace as Place)}>
                    <Box className="place-info">
                        <Box className="place-info__title">
                            <Typography variant="body1" fontWeight='bold' noWrap={true}>{selectedInfoWindowPlace.name}</Typography>
                            <Typography variant="body2">{renderRating(selectedInfoWindowPlace.rating)}</Typography>
                        </Box>
                        <Box>
                            <Typography variant="subtitle2" sx={{color: "black"}}>{selectedInfoWindowPlace.vicinity}</Typography>
                        </Box>
                    </Box>
                </InfoWindow>}
        </Map>
    )
}

export default GoogleMap