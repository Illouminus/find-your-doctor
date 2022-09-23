import React from 'react'
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import ImageListItem from '@mui/material/ImageListItem';
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import ImageList from '@mui/material/ImageList';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import {Stack} from "@mui/material";


// @ts-ignore
function Modal({props}) {
    const [handleClickOpen, handleClose, openModal] = props

    return (
        <Dialog open={openModal} onClose={handleClose}>
            <DialogContent sx={{width:500, height:500}} >
                <Stack sx={{width:350, ml:'auto', mr:'auto', mu:'auto'}}>
                <ImageListItem
                ><img src="/educational/Video_checkbox.gif" />

                     <span>Чтобы отметить свободный час, кликните по чекбоксу.</span>

                </ImageListItem>
                <ImageListItem
                ><img src="/educational/Video upperClick.gif"/>

                        <span>Чтобы выделить всю неделю, нажмите на чекбокс над датой.</span>

                </ImageListItem>
                <ImageListItem
                ><img src="/educational/Video upperClick.gif"/>
                  <span>Выделяйте сразу несколько часов не отпуская мышь.</span>

                </ImageListItem>
                </Stack>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Ок</Button>
            </DialogActions>
        </Dialog>
    )
}

export default Modal