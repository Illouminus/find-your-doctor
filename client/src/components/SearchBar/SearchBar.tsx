import React from 'react'
import { useState, useEffect } from "react";
import cn from "classnames"
import {Box, TextField, Button, InputAdornment} from '@mui/material'
import VaccinesIcon from '@mui/icons-material/Vaccines';
import PlaceIcon from '@mui/icons-material/Place';
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import { debounce } from 'lodash'

import styles from './styles.module.css'

function SearchBar() {
    const [inputs, setInputs] = useState({inputSpecialist:'', inputPlace:''})

    const {doctors, error, loading} = useTypedSelector(state => state.doctor)
    const {fetchDoctors} = useActions()

    const inputsHandler = (e:any) => {

        setInputs((prev) => ({...prev, [e.target.name] : e.target.value}));
        fetchDoctors(inputs.inputSpecialist.toLowerCase(), inputs.inputPlace)
    }


    return (

                <div className={cn(doctors.length > 0 ? styles.top : styles.center)}>
                    <Box sx={{ display: 'flex', flexWrap: 'nowrap', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <form></form>
                        <TextField
                                onChange = {inputsHandler}
                                name = 'inputSpecialist'
                                label="Специалист, жалобы"
                                id="Специалист, жалобы"
                                sx={{ m: 1, width: '25ch' }}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start"><VaccinesIcon/></InputAdornment>
                                }}
                            />
                        <TextField
                            onChange={inputsHandler}
                            name = 'inputPlace'
                            label="Страна, город"
                            id="outlined-start-adornment"
                            sx={{ m: 1, width: '25ch' }}
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><PlaceIcon/></InputAdornment>
                            }}
                        />
                    </Box>
                </div>

    )
}

export default SearchBar