import React from "react";

import {TableCell} from "@mui/material";
import './Selectable.css'

function Selectable(props:any) {
    const { selectableRef, isSelected, isSelecting, fourDays, hour, numb } = props;
    return (

    <TableCell ref={selectableRef} sx = {{backgroundColor:fourDays[numb].timetable[hour]? '#81c784' : '#ffca28' }}><p>{hour}:00</p>
        </TableCell>

    );
}

export default Selectable;
