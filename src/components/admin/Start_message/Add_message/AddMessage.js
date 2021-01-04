import React, { useState, useEffect } from "react";
import "./addMessage.scss";
import { useParams, useHistory } from "react-router-dom";
import Axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../Navbar/Navbar";
export default function AddMessage() {
  // id from params
  let { id } = useParams();
  const history = useHistory();
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
    setTimeout(() => {
      history.goBack();
    }, 2000);
  };

  return (
    <div className="message">
      <Navbar></Navbar>
      <FontAwesomeIcon
        icon={faAngleLeft}
        onClick={() => history.goBack()}
        className="exit"
      />
      <h1>Svara Meddelande</h1>
      {msg.map((i, m) => {
        return (
          <form onSubmit={sendMsg} key={m}>
            <div className="row">
              <div className="col-75">
                <input defaultValue={`Namn: ${i.name}`} type="text" />
              </div>
            </div>
            <div className="row">
              <div className="col-75">
                <input defaultValue={`Email: ${i.email}`} type="text" />
              </div>
            </div>
            <div className="row">
              <div className="col-75">
                <input defaultValue={`Ämne: ${i.subject}`} type="text" />
              </div>
            </div>
            <div className="row">
              <div className="col-75">
                <input defaultValue={`Regnummer: ${i.regnumber}`} type="text" />
              </div>
            </div>
            <div className="row">
              <div className="col-75">
                <input defaultValue={`Fråga: ${i.description}`} type="text" />
              </div>
            </div>
            <h3>Svar:</h3>
            <textarea
              onChange={(e) => setAnswer(e.target.value)}
              name="answer"
              type="textarea"
              placeholder={"Skriv ditt svar här..."}
            ></textarea>
            <div className="row">
              <button className="msgBtn" type="submit">
                Svara
              </button>
            </div>
          </form>
        );
      })}
    </div>
  );
}
