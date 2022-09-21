import React from 'react'
import AttachFileIcon from '@mui/icons-material/AttachFile';
import styles from './styles.module.css'

function FileUpload() {
    const uploadHandler = () => {

    }
    return (
        <>
            <div className={styles.file_card}>
                <div className={styles.file_input}>
                    <input type='file' className={styles.input}>
                    </input>

                    <p className={styles.main}> Поддерживаются файлы типа</p>
                    <p className={styles.info}> PDF,JPG,PNG</p>

                </div>
            </div>

        </>
    )
}

export default FileUpload