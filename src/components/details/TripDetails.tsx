import { Box, Button, List, Skeleton, Typography } from "@mui/material"
import usePlaceStore from "../../stores/usePlaceStore"
import { getDate } from '../../utils/common/common';
import { useTripPlaces } from "../../hooks/useTripPlaces";
import Listing from "../categories/Listing";
import { Place } from "../../interfaces/interfaces";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { apiClient } from "../../utils/clients/apiClient";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function TripDetails() {
    const queryClient = useQueryClient()
    const { selectedPlan } = usePlaceStore()
    const { data: places, isFetching } = useTripPlaces()
    const { handleSelectedInfoWindowAndSelectedPlace, handleDeletingSelectedPlan } = usePlaceStore()
    const navigate = useNavigate()

    const notifySuccess = () => {
        toast.success("Successfully Deleted Trip!")
    }

    const notifyError = () => {
        toast.error("Failed to remove trip!")
    }

    const handleSelectingPlace = (place: Place) => {
        handleSelectedInfoWindowAndSelectedPlace(place)
        navigate(`/main/places/${place.place_id}`)
    }

    const handleDeletePlan = () => {
        apiClient.delete(`/trips/${selectedPlan?._id}`,
            {headers: {'x-auth-token': localStorage.getItem('x-auth-token')}})
        .then(() => {
            notifySuccess()
            queryClient.invalidateQueries({queryKey: ['trips']})
            // Change selected plan and navigate
            handleDeletingSelectedPlan()
            navigate('/main')
        })
        .catch(() => notifyError())
    }

    const handleMakeTripPlan = () => {
        navigate(`/main/trips/${selectedPlan?.slug}/optimize`)
    }

    return (
        <Box className="main__grid--details plan-details">
            <Typography variant="h4">{selectedPlan?.name}</Typography>
            <Typography variant="h6">{selectedPlan?.location}</Typography>
            <Typography variant="caption">Date Created: {getDate(selectedPlan?.date_created as string)}</Typography>
            {isFetching && 
                <List>
                    <Skeleton variant="rectangular" width='100%' height={40} sx={{margin: '1rem'}}/>
                    <Skeleton variant="rectangular" width='100%' height={40} sx={{margin: '1rem'}}/>
                    <Skeleton variant="rectangular" width='100%' height={40} sx={{margin: '1rem'}}/>
                    <Skeleton variant="rectangular" width='100%' height={40} sx={{margin: '1rem'}}/>
                    <Skeleton variant="rectangular" width='100%' height={40} sx={{margin: '1rem'}}/>
                </List>
            }
            {!isFetching && places?.tripPlaces && places?.tripPlaces.length > 0 && 
                <List>
                    {places.tripPlaces.map(place => 
                    <Listing place={place} handleSelectingPlace={handleSelectingPlace}/>)}
                </List>
            }
            {places?.tripPlaces.length == 0 &&
            <h1>No Places in Trips</h1>
            }
            {places && places?.tripPlaces.length > 0 && <Button sx={{backgroundColor: 'black', padding: '1rem', color: 'white'}} onClick={handleMakeTripPlan}>Make a Trip Plan</Button>}
            <Button sx={{backgroundColor: 'black', padding: '1rem', color: 'white', margin: '1rem'}} onClick={handleDeletePlan}>Delete Trip</Button>
            <ToastContainer position="top-center"/>
        </Box>
    )
}

export default TripDetails