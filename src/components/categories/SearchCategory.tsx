import { Paper, TextField, Box } from "@mui/material"
import Autocomplete from "@mui/material/Autocomplete"
import { FormEvent, useState } from "react";
import CustomerPaper from "./CategoryPaper";
import usePlaceStore from "../../stores/usePlaceStore";
import { categoryNameToId as allCategories} from "../../utils/categories"
import { useNavigate } from "react-router-dom";

function SearchCategory() {
    const { categories, handleCategorySelect, handleCategoryDelete, handleActiveCategorySelect, activeCategory } = usePlaceStore()
    const navigate = useNavigate()
    const [value, setValue] = useState('')
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
        if (value && !categories.includes(value)) {
            handleCategorySelect(value)
        }
    }

    const handleCategorySingleClick = (category: string) => {
        handleActiveCategorySelect(category)
        if (category == activeCategory) {
            navigate('/')
        } else {
            navigate('/listings')
        }
    }

    const handleCategoryDoubleClick = (index: number) => {
        handleCategoryDelete(index)
        navigate('/')
    }

    return (
        <Box className='view-categories'>
            <Autocomplete className="category__input"
                options={Object.keys(allCategories)}
                value={value}
                onChange={(_, newValue) => setValue(newValue as string)}
                renderInput={params => 
                    <Paper component='form' className="category__input" onSubmit={handleSubmit}>
                        <TextField {...params} label="Points of Interest"/>
                    </Paper>}/>
            <Box display='flex' flexWrap='wrap' gap='1rem' padding='0.5rem'>
                {categories.map((category, index) => 
                    <CustomerPaper category={category} index={index} handleDoubleClick={handleCategoryDoubleClick} handleSingleClick={handleCategorySingleClick}/>
                )}
            </Box>
        </Box>
    )
}

export default SearchCategory