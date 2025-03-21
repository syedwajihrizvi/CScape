import { CircularProgress, Divider, IconButton, Link, ListItem, ListItemText, Typography } from "@mui/material"
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import List from "@mui/material/List"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import CallIcon from '@mui/icons-material/Call';
import StarIcon from '@mui/icons-material/Star';
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import { useParams, useNavigate } from "react-router-dom"
import { Place } from "../../interfaces/interfaces"
import { apiClient } from "../../utils/clients/apiClient"
import usePlaceStore from "../../stores/usePlaceStore"
import usePlaceDetails from "../../hooks/usePlaceDetails"
import { useTrips } from "../../hooks/useTrips"
import PlacePhotos from "./PlacePhotos"
import { useState } from "react"
import { useQueryClient } from "@tanstack/react-query";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function PlaceDetails() {
    const queryClient = useQueryClient()
    const navigate = useNavigate()
    const { id } = useParams()
    const [addPlace, setAddPlace] = useState(false)
    const [selectedTrip, setSelectedTrip] = useState<string | null>(null)
    const { place, handleSelectedPlace, selectedPlace, selectedPlan } = usePlaceStore()
    const { data } = usePlaceDetails(id as string)
    const { data: trips, isFetching } = useTrips()

    const handleBack = () => {
        if (selectedPlan != null) {
            navigate(`/trips/${selectedPlan.slug}`)
        } else {
            navigate('/listings')
            handleSelectedPlace(selectedPlace as Place)
        }
    }
    const notify = (message: string, type: string) => {
        if (type == "success") {
            toast.success(message);
        } else {
            toast.error(message);
        }
    }

    const handleTripSelect = (tripId: string) => {
        if (selectedTrip == tripId) {
            setSelectedTrip(null)
        } else {
            setSelectedTrip(tripId)
        }
    }

    const renderCheckIcon = (tripId: string) => {
        if (selectedTrip == tripId)
            return <CheckBoxOutlinedIcon/>
        return <CheckBoxOutlineBlankOutlinedIcon/>
    }

    const handleSubmitPlace = () => {
        if (selectedTrip != null) {
            apiClient.put(`/trips/${selectedTrip}`, 
                {placeInfo: {placeId: id, category: selectedPlace?.category}}, 
                {headers: {'x-auth-token': localStorage.getItem('x-auth-token')}})
               .then(() =>notify("Successfully Added!", "success"))
               .catch(err => notify(err.response.data, "error")) 
        }
        else {
            notify("No Trips selected", "error")
        }
                
    }

    const handleRemovePlace = () => {
        apiClient.delete(`/trips/places/${selectedPlan?._id}`,
            {headers: {'x-auth-token': localStorage.getItem('x-auth-token')},
            data: {place_id: selectedPlace?.place_id}})
            .then(() => {
                notify("Successfully removes place from trip", "success")
                queryClient.invalidateQueries({queryKey: [selectedTrip]})
            })
            .catch(() => notify("Failed to remove place from trip", "error"))
        navigate('/')
        handleSelectedPlace(selectedPlace as Place)
    }

    return (
        <Box className="place-details">
            <h1>{data?.name}</h1>
            <Button className="btn" sx={{marginBottom: '0.5rem'}}onClick={handleBack}>Back</Button>
            {data?.openings &&
            <Accordion sx={{marginBottom: '1rem'}}>
                <AccordionSummary
                         expandIcon={<ArrowDownwardIcon />}
                         aria-controls="panel1-content"
                         id="panel1-header">
                    <Typography>View Openings</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <List>
                    {data.openings.map(opening => 
                    <>
                        <ListItem>
                            <Typography variant='body2' fontWeight='bold'>{opening}</Typography>
                        </ListItem>
                        <Divider/>
                    </>
                )}
                </List>
                </AccordionDetails>
            </Accordion>
                }
            {data?.reviews &&
            <Box sx={{overflowX: 'hidden'}}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ArrowDownwardIcon/>}
                        aria-controls="panel1-content"
                        id="panel2-header">
                            <Typography>Reviews ({data.reviews.length})</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    {data?.reviews.map(review => 
                        <Accordion>
                        <AccordionSummary
                            expandIcon={<ArrowDownwardIcon/>}
                            aria-controls="panel1-content"
                            id="panel2-header">
                            <Box>
                                <Typography>{review.author_name}</Typography>
                                <Typography variant="subtitle2">{review.relative_time_description.charAt(0).toUpperCase() + review.relative_time_description.slice(1)}</Typography>
                                {[...Array(review.rating)].map(() => <StarIcon sx={{color: 'gold'}}/>)}
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>{review.text}</Typography>
                        </AccordionDetails>
                        </Accordion>
                    )}
                    </AccordionDetails>
                </Accordion>
            </Box>
            }
            <Link display='block' href={data?.website}>Visit Website</Link>
            {
                !selectedPlan && 
                    <Button sx={{backgroundColor: 'black', color: 'white'}} onClick={() => setAddPlace(!addPlace)}>
                    {!addPlace && "Add to Trip"}
                    {addPlace && "Close"}
                </Button>
            }
            {
                selectedPlan && 
                <Button sx={{backgroundColor: 'black', color: 'white'}} onClick={() => handleRemovePlace()}>
                    Remove from Trip
                </Button>
            }
            {
                addPlace && 
                <>
                {isFetching && <CircularProgress/>}
                {!isFetching && 
                <>
                    {trips && <Typography>Current Trips in {place?.formatted_address}</Typography>}
                    {!trips && <Typography>No current trips for this city</Typography>}
                    <List>
                    {
                        trips?.map(trip => 
                            trip.location == place?.formatted_address && <>
                                <ListItem disableGutters secondaryAction={
                                    <IconButton onClick={() => handleTripSelect(trip._id)} edge="end" arira-label="add">
                                        {renderCheckIcon(trip._id)}
                                    </IconButton>
                                }>
                                    <ListItemText>
                                        <Typography>{trip.name}</Typography>
                                    </ListItemText>
                                </ListItem>
                                <Divider sx={{color: 'white'}}/>
                            </>
                        )
                    }
                </List>
                <Button onClick={handleSubmitPlace} sx={{backgroundColor: 'red', color: 'white'}}>Submit</Button>
                <ToastContainer position="bottom-center" role="error" theme="dark" />
                </>
                }
                </>
            }
            <List>
                <ListItem className="place-details__list-item" disableGutters secondaryAction={
                    <IconButton edge="end" aria-label="address">
                      <FmdGoodIcon sx={{color: 'dodgerblue'}}/>
                    </IconButton>
                  }>
                    <ListItemText>
                        <Typography variant="body1" fontWeight='bold'>{data?.address}</Typography>
                    </ListItemText>
                </ListItem>
                <Divider/>
                <ListItem className="place-details__list-item" disableGutters secondaryAction={
                    <IconButton edge="end" aria-label="address">
                      <CallIcon sx={{color: 'red'}}/>
                    </IconButton>
                  }>
                    <ListItemText>
                        <Typography variant="body1" fontWeight='bold'>{data?.phone_number}</Typography>
                    </ListItemText>
                </ListItem>
            </List>
            {data?.photos && <PlacePhotos photos={data?.photos}/>}
        </Box>
    )
}

export default PlaceDetails