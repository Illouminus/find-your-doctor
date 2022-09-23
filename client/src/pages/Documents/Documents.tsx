import axios from 'axios'
import { useEffect, useState } from 'react'
import { Upload, } from '../../components'
import { useTypedSelector } from '../../hooks/useTypedSelector';
import OneFile from './OneFile';
import s from './styles.module.css'
// import {CalendarDoc} from '../../components/CalendarDoc/CalendarDoc'
const Documents = () => {
  const user = useTypedSelector(state => state.user.user)
  console.log(user.id)
  const id = {id : user.id};
  const [links, setLinks] = useState([])
  console.log(links)

  useEffect(() => {
    (async () => {
      try {
          const response = await axios.post('http://localhost:4000/getDocuments',  id)
          console.log(response.data);
          if (response.data) {
            response.data.forEach((data: any) => {
              setLinks((prev):any => [...prev, data])
            })
          } else {          
          }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [user]);


  const deleteHeandler = (link: any) => {

    const idDoc = link.id

    console.log()
    axios.post('http://localhost:4000/deleteDocuments', {idDoc, id}).then(data => data).catch(error => error)
    return setLinks(links.filter(item => item !== link))
  }


  return (
    <div className={s.containerDoc}>
      {/* <Upload /> */}
      <div className={s.containerList}>
        {links.map((link) => (
          <OneFile link={link} deleteHeandler={deleteHeandler}/>
        ))}
      </div>
    </div>
    // <CalendarDoc />
  )
}

export default Documents