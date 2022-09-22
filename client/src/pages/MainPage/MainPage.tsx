import React from 'react'
import { Stack, Skeleton, Avatar, Typography, Box, Card} from '@mui/material'
import {SearchBar, TagsCard, SearchedDoctorCard, ParentMap} from '../../components'
import {useTypedSelector} from "../../hooks/useTypedSelector";
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import s from './mainPage.module.css'


function MainPage() {
    const {doctors, error, loading} = useTypedSelector(state => state.doctor)
    console.log('Доктора', doctors);
    
    return (
        <>
            <Stack sx={{ display: 'flex',
                alignElements: 'flex-start',
                alignItems: 'center',
                p: 1,
                m: 1,

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
                <div>
                {doctors &&
                <div className={s.content_container}>
                    <div className={s.cards_box}>
                        {doctors.map((el:object,index:number) =>
                            <Box mt ={3}>
                            <SearchedDoctorCard el={el} key={index}/>
                            </Box>
                        )}
                    </div>
                    {doctors.length > 0 && 
                    <div className={s.map_container}>
                        <ParentMap docs={doctors} />
                    </div>}
                </div>
                }
                </div>


            </Stack>
        </>
    )
}



export default MainPage