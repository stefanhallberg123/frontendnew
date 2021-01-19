import "./startMessage.scss";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenAlt } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../Navbar/Navbar";

export default function StartMessage(props) {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    const fetchMSG = async () => {
      Axios.get("http://localhost:5000/admin/messages").then((response) => {
        setMessage(response.data);
      });
    };
    fetchMSG();
  }, []);

  const respondeMSG = (msgID) => {
    let url = `/admin/messages/add/${msgID}`;
    props.history.push(url);
  };

  const deleteMSG = (id) => {
    let url = `http://localhost:5000/admin/messages/${id}`;
    Axios.delete(url).then((res) => {
      const del = message.filter((msg) => id !== msg._id);
      setMessage(del);
    });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div>
        <h1>Meddelanden</h1>
        <div className="tbl">
          <table>
            <colgroup span={4}></colgroup>
            <thead>
              <tr className="top">
                <th>Regnr</th>
                <th>Ämne</th>
                <th>Namn</th>
                <th className="notOnPhone">Epost</th>
                <th className="notOnPhone">Beskrivning</th>
                <th>Svara</th>
                <th>Radera</th>
              </tr>
            </thead>

            {message &&
              message.map((m, i) => {
                return (
                  <tbody key={i}>
                    <tr className="bot">
                      <td>{m.regnumber}</td>
                      <td>{m.subject}</td>
                      <td>{m.name}</td>
                      <td className="notOnPhone">{m.email}</td>
                      <td className="notOnPhone">{m.description}</td>
                      <td>
                        <FontAwesomeIcon
                          icon={faPenAlt}
                          onClick={() => respondeMSG(m._id, m.subject, m.email)}
                        />
                      </td>
                      <td>
                        <FontAwesomeIcon
                          icon={faTrashAlt}
                          onClick={() => deleteMSG(m._id)}
                        />
                      </td>
                    </tr>
                  </tbody>
                );
              })}
          </table>
        </div>
      </div>
    </div>
  );
}
