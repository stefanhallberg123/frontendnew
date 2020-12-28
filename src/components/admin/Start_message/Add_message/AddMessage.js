import React, { useState, useEffect } from "react";
import "./addMessage.scss";
import { useParams } from "react-router-dom";
import Axios from "axios";

export default function AddMessage() {
  const [repost, setRepost] = useState({
    answer: "",
    email: "",
    subject: "",
  });
  let { id } = useParams();
  const [msg, setMsg] = useState([
    {
      id: id,
    },
  ]);

  // hämtar id via params

  // kopplar id mot id i databasen och lägger det msg som array
  useEffect(() => {
    const fetchMSG = async () => {
      Axios.get(`http://localhost:5000/admin/messages/add/${id}`).then(
        (response) => {
          setMsg(response.data);
        }
      );
    };
    fetchMSG();
  }, [id]);

  // skickar meddelandet till databasen som sedan ska skicka ut det som ett mejl
  const sendMsg = () => {
    // Axios.post(`http://localhost:5000/admin/messages/`);
    console.log(repost);
  };
  // hämtar nya datan från input
  const newData = (e) => {
    setRepost({ [e.target.name]: e.target.value && e.target.name });
  };
  console.log(msg);
  return (
    <div className="message">
      <h1>Svara Meddelande</h1>
      {msg.map((i, m) => {
        return (
          <form onSubmit={sendMsg} key={m}>
            <div>Namn: {i.name}</div>
            <div name="email" onLoad={newData}>
              Epost: {i.email}
            </div>
            <div onLoad={newData} name="subject">
              Ämne: {i.subject}
            </div>
            <div> Regnummer: {i.regnumber}</div>
            <div>Beskrivning: {i.description}</div>
            <h3>Svar:</h3>
            <input onChange={newData} name="answer" type="textarea"></input>
            <button type="submit">Svara</button>
          </form>
        );
      })}
    </div>
  );
}
