import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

export default function AddMessage({ message }) {
  // const msgID = useParams();
  // const [message, setMessage] = useState({});

  // useEffect(() => {
  //   const fetchMSG = async () => {
  //     Axios.get(`http://localhost:5000/admin/message/add/${msgID}`).then(
  //       (response) => {
  //         setMessage(response.data);
  //       }
  //     );
  //   };
  //   fetchMSG();
  // }, [msgID]);
  console.log(message);

  return <div>{/* <div>{message.subject}</div> */}</div>;
}
