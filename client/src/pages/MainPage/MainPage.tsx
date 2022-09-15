import React from 'react'
import { Stack, Skeleton, Avatar, Typography, Box} from '@mui/material'
import {SearchBar, TagsCard, SearchedDoctorCard} from '../../components'
import {useTypedSelector} from "../../hooks/useTypedSelector";

function MainPage() {
    const {doctors, error, loading} = useTypedSelector(state => state.doctor)

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
                <br/>
                <TagsCard/>
                <br/>
                {loading &&
                    <>
                        <Box sx={{display:'flex', margin:'5px'}}>

                            <Skeleton variant="circular">
                                <Avatar />
                            </Skeleton>
                            <Skeleton variant="rectangular" width="600px">

                            </Skeleton>

                        </Box>
                        <Skeleton variant="rectangular" width="600px" height='500px'>

                        </Skeleton>
                        </>
                }
                {doctors &&
                <>
                    {doctors.map((el:object,index:number) =>
                        <SearchedDoctorCard el={el} key={index}/>
                    )}
                </>
                }




            </Stack>
        </>
    )
}



export default MainPage