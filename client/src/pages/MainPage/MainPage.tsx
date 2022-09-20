import React from 'react'
import { Stack, Skeleton, Avatar, Typography, Box, Card} from '@mui/material'
import {SearchBar, TagsCard, SearchedDoctorCard} from '../../components'
import {useTypedSelector} from "../../hooks/useTypedSelector";
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



function MainPage() {
    const {doctors, error, loading} = useTypedSelector(state => state.doctor)

    return (
        <>
            <Stack sx={{ display: 'flex',
                alignElements: 'flex-start',
                alignItems: 'flex-start',
                p: 1,
                m: 1,
                ml: '50vh',
                // height: 100,
                borderRadius: 1,}}>
                <SearchBar/>
                <br/>
                {/*<TagsCard props={null}/>*/}
                <br/>
                {loading &&
                    <>
                        <Box sx={{display:'flex', margin:'5px'}}>

                            <Skeleton variant="circular">
                                <Avatar />
                            </Skeleton>
                            <Skeleton variant="rounded"  width="600px">

                            </Skeleton>

                        </Box>
                        <Skeleton variant="rounded" width="600px" height='500px'>

                        </Skeleton>
                        </>
                }
                {doctors &&
                <>
                    {doctors.map((el:object,index:number) =>
                        <Box mt ={3}>
                        <SearchedDoctorCard el={el} key={index}/>

                        </Box>
                    )}
                </>
                }




            </Stack>
        </>
    )
}



export default MainPage