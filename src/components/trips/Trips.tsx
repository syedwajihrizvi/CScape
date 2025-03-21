import { ButtonGroup, List, ListItem, ListItemText, Typography } from "@mui/material"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import TextField from '@mui/material/TextField';
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react"
import { apiClient } from "../../utils/clients/apiClient";
import usePlaceStore from "../../stores/usePlaceStore";
import { useTrips } from "../../hooks/useTrips";
import { getDate, slugify } from "../../utils/common/common";
import { Trip } from "../../interfaces/interfaces";
import { useNavigate } from "react-router-dom";

function Trips() {
    const [showCreate, setShowCreate] = useState(false)
    const [planName, setPlanName] = useState('')
    const { place, selectedPlan, handleSetSelectedPlan } = usePlaceStore()
    const navigate = useNavigate()
    const { data } = useTrips()
    const queryClient = useQueryClient()

    const onPlanSelect = (plan: Trip) => {
        // If a plan is being unselected we should navigate to the city info page
        // else navigate to the new plan page
        console.log('Plan Selected')
        console.log(plan._id)
        handleSetSelectedPlan(plan)
        console.log(selectedPlan?._id)
        if (plan._id == selectedPlan?._id) {
            console.log("Navigate to main")
            navigate('/')
        } else {
            navigate(`/trips/${plan.slug}`)
        }
    }

    const onPlanSubmit = () => {
        apiClient.post('/trips', 
                        {
                            slug: slugify(planName),
                            name: planName, 
                            location: place?.formatted_address, 
                            coordinates: place?.geometry?.location,
                            viewPort: place?.geometry?.viewport
                        }, {
            headers: {
                'x-auth-token': localStorage.getItem('x-auth-token')
            }
        })
        .then(() => {
            setShowCreate(false)
            queryClient.invalidateQueries({queryKey: ['trips']})
        })
        .catch(err => console.log(err))
    }

    return (
        <Box className="plans">
            {!showCreate && 
            <Box className="plans__menu">
                <Button className="btn" onClick={() => setShowCreate(true)}>Create Trip</Button>
                <Button className="btn" disabled={selectedPlan !== null ? false : true}>View Details</Button>
            </Box>}
            {showCreate && 
            <Box className="plans__form">
                <TextField onChange={(event) => setPlanName(event.target.value)}required label="Plan Name"/>
                <ButtonGroup>
                    <Button className="btn" onClick={onPlanSubmit}>Create</Button>
                    <Button className="btn" onClick={() => setShowCreate(false)}>Back</Button>
                </ButtonGroup>
            </Box>
            }
            <List>
                {data?.map(trip => 
                    <ListItem className="trip"
                        onClick={() => onPlanSelect(trip)}
                        sx={{backgroundColor: selectedPlan?._id == trip._id ? 'green' : ''}}
                        secondaryAction={
                            <Typography sx={{fontSize: '0.8rem'}}>{getDate(trip.date_created)}</Typography>
                        }>
                        <ListItemText primary={trip.name} secondary={trip.location}/>
                    </ListItem>
                )}
            </List>
        </Box>
    )
}

export default Trips