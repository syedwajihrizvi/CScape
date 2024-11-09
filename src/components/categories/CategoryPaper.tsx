import Paper from "@mui/material/Paper"
import { styled } from '@mui/material/styles'
import { categoryColors } from "../../utils/categories";
import usePlaceStore from "../../stores/usePlaceStore";
import CheckIcon from '@mui/icons-material/Check';
import { Typography } from "@mui/material";

const CategoryPaper = styled(Paper)(({ theme }) => ({
    width: 'fit-content',
    height: 'fit-content',
    fontWeight: 'bold',
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center',
    transition: 'all 0.5s',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    "&:hover": {
        cursor: 'pointer',
        transform: 'scale(1.1)'
    }
}));

interface Props {
    category: string,
    index: number,
    handleDoubleClick: (index: number) => void,
    handleSingleClick: (category: string) => void
}

function CustomerPaper({category, index, handleDoubleClick, handleSingleClick}: Props) {
    const { activeCategory } = usePlaceStore()
    return (
        <CategoryPaper 
        key={index} variant='elevation'
        sx={{backgroundColor: categoryColors[category as keyof typeof categoryColors]}}
        elevation={8} onDoubleClick={() => handleDoubleClick(index)}
        onClick={() => handleSingleClick(category)}>
            <Typography fontWeight={800}>{category}</Typography>
                {category == activeCategory && <CheckIcon sx={{position: 'absolute', top: -5, left: -5,
                                color: 'white', background: 'green',  borderRadius: '50%', 
                                boxSizing: 'content-box', fontSize: '1rem'}}/>}
        </CategoryPaper>
    )
}

export default CustomerPaper