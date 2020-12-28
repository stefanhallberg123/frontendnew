import Axios from "axios";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenAlt } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "./startMessage.scss";
import AddMessage from "./Add_message/AddMessage";

export default function StartMessage() {
  // const { id } = this.props;
  const [show, setshow] = useState(false);
  const [message, setMessage] = useState([]);
  // let history = useHistory();

  useEffect(() => {
    const fetchMSG = async () => {
      Axios.get("http://localhost:5000/admin/messages").then((response) => {
        setMessage(response.data);
      });
    };
    fetchMSG();
  }, []);

  const respondeMSG = (msgID) => {
    setshow(true);
    console.log(msgID);
    // let url = `/admin/messages/add/${msgID}`;
    // history.push(url);
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
      {message &&
        message.map((m, i) => {
          return (
            <div key={i}>
              {show ? (
                <AddMessage onShowClick={respondeMSG} message={message} />
              ) : (
                <div>
                  <h1>Meddelanden</h1>
                  <div>
                    <table>
                      <colgroup span={4}></colgroup>
                      <thead>
                        <tr>
                          <th>Ämne</th>
                          <th>Regnr</th>
                          <th>Namn</th>
                          <th>Epost</th>
                          <th>Beskrivning</th>
                          <th>Svara</th>
                          <th>Radera</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td>{m.subject}</td>
                          <td>{m.regnumber.toUpperCase()}</td>
                          <td>{m.name}</td>
                          <td>{m.email}</td>
                          <td className="desc">{m.description}</td>
                          <td>
                            <FontAwesomeIcon
                              icon={faPenAlt}
                              onClick={() => respondeMSG(m._id)}
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
                    </table>
                  </div>
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
}
