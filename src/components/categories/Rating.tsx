import { Chip } from "@mui/material"

export const renderRating = (rating: number | undefined) => {
    let backgroundColor = '#F44336'
    if (rating) {
        if (rating === 5.0)
            backgroundColor = '#00E5FF';  // Bright Cyan
        else if (rating > 4.5)
            backgroundColor = '#8BC34A';  // Light Green
        else if (rating >= 4.0 && rating <= 4.5)
            backgroundColor = "#FFEB3B";  // Yellow
        else if (rating >= 3.0 && rating < 4.0)
            backgroundColor = "#FF9800";  // Orange
        else
            backgroundColor = "#F44336";  // Red
        return <Chip sx={{ backgroundColor: backgroundColor, padding: "0.1rem", borderRadius: 0, color: 'black' }} label={rating?.toFixed(1)} />
    }
    return <Chip sx={{ backgroundColor: "black", color: "black", padding: "0.1rem", borderRadius: 0 }} label="N/A" />
    
}