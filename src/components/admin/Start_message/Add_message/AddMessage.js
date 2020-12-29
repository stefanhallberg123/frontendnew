import React, { useState, useEffect } from "react";
import "./addMessage.scss";
import { useParams } from "react-router-dom";
import Axios from "axios";

export default function AddMessage() {
  // id from params
  let { id } = useParams();

  // kopplar id mot id i databasen och lägger det msg som array
  useEffect(() => {
    const fetchMSG = async () => {
      Axios.get(`http://localhost:5000/admin/messages/add/${id}`).then(
        (response) => {
          setMsg(response.data);
          setEmail(response.data[0].email);
          setSubject(response.data[0].subject);
        }
      );
    };
    fetchMSG();
  }, [id]);
  const [msg, setMsg] = useState([]);
  const [email, setEmail] = useState("");
  const [answer, setAnswer] = useState("");
  const [subject, setSubject] = useState("");

  // skickar meddelandet till databasen som sedan ska skicka ut det som ett mejl
  const sendMsg = (e) => {
    e.preventDefault();
    Axios.post(`http://localhost:5000/admin/message/add/${id}`, {
      email,
      answer,
      subject,
    })
      .then((respone) => {
        console.log(respone.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  return (
    <div className="message">
      <h1>Svara Meddelande</h1>
      {msg.map((i, m) => {
        return (
          <form onSubmit={sendMsg} key={m}>
            <div>Namn: {i.name}</div>
            <div>Email: {i.email}</div>
            <div>Ämne: {i.subject}</div>
            <div> Regnummer: {i.regnumber}</div>
            <div>Fråga: {i.description}</div>
            <h3>Svar:</h3>
            <input
              onChange={(e) => setAnswer(e.target.value)}
              name="answer"
              type="textarea"
            ></input>
            <button type="submit">Svara</button>
          </form>
        );
      })}
    </div>
  );
}
