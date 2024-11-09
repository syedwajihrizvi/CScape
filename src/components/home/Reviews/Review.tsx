import { Box, Paper, Typography } from "@mui/material"
import ExpandableText from "./ExpandableText"
import { CScapeReview } from "../../../interfaces/interfaces"

interface Props {
    review: CScapeReview
}

function Review({review}: Props) {
    return (
        <Paper className='review' elevation={6}>
            <img src={review.profile_photo} alt="Profile Pic" />
            <Box>
                <Typography sx={{fontWeight: 'bold'}}>{review.first_name} {review.last_name}</Typography>
                <Typography variant="body2">
                    <span style={{fontWeight: 'bold'}}>{review.city}, {review.year}</span> 
                    : <ExpandableText text={review.review}/>
                </Typography>
            </Box>
        </Paper>
    )
}

export default Review