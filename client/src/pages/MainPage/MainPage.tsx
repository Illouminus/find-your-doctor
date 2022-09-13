import React from 'react'
import { Stack} from '@mui/material'
import {SearchBar} from '../../components'

function MainPage() {

    return (
        <>
            <Stack sx={{ display: 'flex',
                alignItems: 'center',
                p: 1,
                m: 1,
                margin: '30vh',
                height: 100,
                borderRadius: 1,}}>
                <SearchBar/>

            </Stack>
        </>
    )
}

export default MainPage