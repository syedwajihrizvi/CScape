import { Divider, IconButton, Paper } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase'

import { useMapsLibrary } from "@vis.gl/react-google-maps";
import { useEffect, useRef, useState } from "react";

interface Props {
    onPlaceSelect: (place: google.maps.places.PlaceResult) => void
}

function MapSearch({onPlaceSelect}: Props) {
    const [placeAutocomplete, setPlaceAutoComplete] = useState<google.maps.places.Autocomplete|null>(null)
    const places = useMapsLibrary('places')
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (!places || !inputRef.current)
            return
        const options = {
            types: ['(cities)'],
            fields: ['geometry', 'name', 'formatted_address'],
        }
        setPlaceAutoComplete(new places.Autocomplete(inputRef.current, options))
    }, [places])

    useEffect(() => {
        if (!placeAutocomplete)
            return
        placeAutocomplete.addListener('place_changed', () => {
            onPlaceSelect(placeAutocomplete.getPlace())
        })
    }, [onPlaceSelect, placeAutocomplete])


    return (
        <Paper className='map-search' elevation={8}>

            <InputBase inputRef={inputRef} className='input' placeholder="City"/>
            <Divider/>
            <IconButton type="button" sx={{ p: '10px', backgroundColor:'none'}} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    )
}

export default MapSearch