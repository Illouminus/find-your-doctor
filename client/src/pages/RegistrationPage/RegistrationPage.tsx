import React, { useState } from 'react'
import { DocReg, PatientReg } from '../../components/Register/index'


export const RegistrationPage: React.FC = () => {

const [whoReg, setWhoReg] = useState<boolean>(false);

    
    return (
        <div>
            {whoReg ? (
                <PatientReg setWhoReg={setWhoReg} whoReg={whoReg} />
            ) : (
                    <DocReg setWhoReg={setWhoReg} whoReg={whoReg} />
            )}
        </div>
    )
}
