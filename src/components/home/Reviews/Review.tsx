import { Box, Paper, Typography } from "@mui/material"
import { CScapeReview } from "../../../interfaces/interfaces"

interface Props {
    review: CScapeReview
}

function Review({review}: Props) {
    return (
        <Paper className='review' elevation={6} sx={{borderRadius: '2rem'}}>
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                <img src={review.profile_photo} alt="Profile Pic" />
                <Typography sx={{fontSize: '1.5rem'}}>
                        {review.first_name} {review.last_name}
                </Typography>
                <span style={{fontSize: '1rem'}}>{review.city}</span> 
                <span style={{fontSize: '1rem', fontWeight: 'bold'}}>{review.year}</span> 
            </Box>
            <Box>
                <span className="review__content">
                    <span style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <p style={{fontSize: '1rem', margin: 0}}>${review.money_saved}</p>
                        <p style={{fontSize: '0.6rem', margin: 0}}>Saved</p>
                    </span>
                    |
                    <span style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <p style={{fontSize: '1rem', margin: 0}}>{review.rating}</p>
                        <p style={{fontSize: '0.6rem', margin: 0}}>Rating</p>
                    </span>
                </span>
            </Box>
        </Paper>
    )
}

export default Review