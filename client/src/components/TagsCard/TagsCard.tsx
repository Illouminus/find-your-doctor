import React from 'react'
import {Box, Chip} from '@mui/material'
import './TagsCard.css'

function TagsCard() {
    return (
        <Box
            className = 'chipContainer'
        >
            <Chip label='Урологи' variant="outlined" size="small" clickable />
            <Chip label='Урологи' variant="outlined" size="small"  clickable/>
            <Chip label='Урологи' variant="outlined" size="small" clickable />
            <Chip label='Урологи' variant="outlined" size="small" clickable />
            <Chip label='Урологи' variant="outlined" size="small" clickable />
            <Chip label='Урологи' variant="outlined" size="small" clickable />
            <Chip label='Урологи' variant="outlined" size="small" clickable />

        </Box>
    )
}

export default TagsCard