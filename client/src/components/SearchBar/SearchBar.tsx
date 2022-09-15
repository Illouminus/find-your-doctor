import React from 'react'
import {useState, useEffect} from "react";
import {Box, TextField, Button, InputAdornment} from '@mui/material'
import VaccinesIcon from '@mui/icons-material/Vaccines';
import PlaceIcon from '@mui/icons-material/Place';
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {debounce} from 'lodash'
function SearchBar() {
    const [inputs, setInputs] = useState({inputSpecialist:'', inputPlace:''})

    const {doctors, error, loading} = useTypedSelector(state => state.doctor)
    const {fetchDoctors} = useActions()


    const inputsHandler = (e:any) => {
        setInputs((prev) => ({...prev, [e.target.name] : e.target.value}));
        fetchDoctors(inputs.inputSpecialist, inputs.inputPlace)
    }
    const debouncedOnChange = debounce(inputsHandler, 2000)


    return (

                <Box sx={{ display: 'flex', flexWrap: 'nowrap', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

                    <TextField
                            onChange = {debouncedOnChange}
                            name = 'inputSpecialist'
                            label="Специолист, жалобы"
                            id="Специолист, жалобы"
                            sx={{ m: 1, width: '25ch' }}
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><VaccinesIcon/></InputAdornment>
                            }}
                        />
                    <TextField
                        onChange={debouncedOnChange}
                        name = 'inputPlace'

                        label="Страна, город"
                        id="outlined-start-adornment"
                        sx={{ m: 1, width: '25ch' }}
                        InputProps={{
                            startAdornment: <InputAdornment position="start"><PlaceIcon/></InputAdornment>
                        }}
                    />
                    <Button className='btn' variant="outlined">Найти</Button>
                </Box>

    )
}

export default SearchBar