import { Box, Button, List, ListItem, ListItemIcon, Paper, Typography } from "@mui/material"
import { apiClient } from "../../utils/clients/apiClient"
import usePlaceStore from "../../stores/usePlaceStore"
import { useTripPlaces } from "../../hooks/useTripPlaces"
import { CheckCircleOutline } from "@mui/icons-material"
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react"
import { convertDetailedTripToDict } from "../../utils/apis/trips"
import { DetailedTrip, Place } from "../../interfaces/interfaces"

function OptimizeTrip() {
    const { selectedPlan } = usePlaceStore()
    const { data: places } = useTripPlaces()
    const [firstPlace, setFirstPlace] = useState<number | null>(null)
    const [optimizedPlaces, setOptimizedPlaces] = useState<Place[] | null>(null)
    const selectFirstPlace = (idx: number) => {
        if (idx == firstPlace)
            setFirstPlace(null)
        else
            setFirstPlace(idx)
    }

    const generatePlan = () => {
        apiClient.post(`/trips/optimize/${selectedPlan?._id}`, 
                       {startingPlace: places?.tripPlaces[firstPlace as number]}, 
                       {headers: {'x-auth-token': localStorage.getItem('x-auth-token')}})
        .then(res => {
            const tripMap = convertDetailedTripToDict(places as DetailedTrip)
            const optimizedOrder : Place[] = res.data.map((placeId:string) => tripMap[placeId as keyof typeof tripMap])
            setOptimizedPlaces(optimizedOrder)
        })
        .catch(err => console.log(err))
        toast.success("Generating Plan")
    }

    return (
        <Box>
            <Typography variant="h4">{selectedPlan?.name}</Typography>
            <Typography variant="h5">Choose a the first place you want to visit</Typography>
            <List>
                {places?.tripPlaces.map((place, idx) => 
                <ListItem>
                    <ListItemIcon onClick={() => selectFirstPlace(idx)} sx={{cursor: 'pointer', '&:hover': {transform: 'scale(1.1)'}}}>
                        {idx == firstPlace && <CheckCircleOutline color="success"/>}
                        {idx != firstPlace && <RadioButtonUncheckedIcon/>}
                    </ListItemIcon>
                    {place.name}
                </ListItem>
                )}
            </List>
            {places && places.tripPlaces.length > 0 && firstPlace != null && <Button 
            onClick={generatePlan} sx={{color: 'black', backgroundColor: 'white', padding: '0.5rem 1rem', margin: '1rem'}}>
                Generate
            </Button>}
            {optimizedPlaces != null && 
            <Box sx={{padding: '0.5rem'}}>
                <Typography variant="h5">Visit the places in the following order to minimize travel time</Typography>
                <Paper sx={{padding: '1rem'}}>
                    {optimizedPlaces.map(place => 
                    <Typography variant="body1">
                        {place.name}
                    </Typography>)}
                </Paper>
            </Box>
            }
            <ToastContainer position="bottom-center" role="error" theme="dark" />
        </Box>
    )
}

export default OptimizeTrip