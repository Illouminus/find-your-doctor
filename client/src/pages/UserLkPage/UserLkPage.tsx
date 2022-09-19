import React, { useState, useEffect} from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector';
import axios from "axios";

const UserLkPage = () => {

  const { user } = useTypedSelector(state => state.user);
  console.log("ISIISISISI", user);

  const [ userLk, setUserLk ] = useState();

  useEffect(() => {
    axios.get(`http://localhost:4000/api/user/${user.id}`)
      .then((resFromServer) => {
      const data = resFromServer.data;
      setUserLk(data);
    });
  }, []);

  return (
    <>
    <div>UserLkPage</div>
    </>
  )
}

export default UserLkPage;
