import React from 'react'
import AttachFileIcon from '@mui/icons-material/AttachFile';
import './FileUppload.css'

function FileUpload() {
    const uploadHandler = () => {

    }
    return (
        <>
            <div className='file-card'>
                <div className='file-input'>
                    <input type='file'>
                    </input>

                    <p className='main'> Поддерживаются файлы типа</p>
                    <p className='info'> PDF,JPG,PNG</p>

                </div>
            </div>

        </>
    )
}

export default FileUpload