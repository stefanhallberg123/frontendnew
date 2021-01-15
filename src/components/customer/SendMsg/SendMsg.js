import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import Axios from "axios";
import "./sendMsg.scss";

export default function SendMsg() {
  // show the form
  const [showModal, setShowModal] = React.useState(false);
  // error validation
  const [error, setError] = React.useState("");
  // confirmed validation
  const [sent, setSent] = React.useState("");
  // when true scroll is locked
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "15px";
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    };
  }, [showModal]);

  // the data to send to db
  const [values, setValues] = React.useState({
    regnumber: "",
    email: "",
    description: "",
    subject: "",
    name: "",
    dataConsent: false,
  });

  // open and close the form
  const openModal = () => {
    setShowModal((c) => !c);
  };
  // adding the data from inputs
  const changeData = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setValues({
      ...values,
      [e.target.name]: value,
    });
  };
  //send to db
  const submit = (e) => {
    e.preventDefault();
    if (
      values.subject === "" &&
      values.email === "" &&
      values.name === "" &&
      values.description === ""
    ) {
      setError("Alla fält förutom registreringsnummer måste vara ifyllda");
    } else if (values.dataConsent === false) {
      setError("Du måste godkänna att vi använder dina uppgifter");
    } else {
      Axios.post(`http://localhost:5000/`, values)
        .then((respone) => {
          console.log(respone.data);
        })
        .catch(function (err) {
          console.log(err);
        });
      setSent("Tack för ditt meddelande. Vi svarar så snabbt vi kan!");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  };
  return (
    <div className="placer">
      <FontAwesomeIcon
        className="emailIcon"
        onClick={openModal}
        icon={faEnvelopeOpen}
      />
      <div className={showModal ? "message" : "notMessage"}>
        <form className="formish" onSubmit={submit}>
          <FontAwesomeIcon
            className="exitDSKTP"
            onClick={openModal}
            icon={faTimesCircle}
          />
          <h1 className="contacth1">Kontakta oss för frågor!</h1>
          <div className="row">
            <div className="col-25">
              <label>Ämne:</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                placeholder="Ange ditt ämne"
                value={values.subject}
                name="subject"
                onChange={changeData}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label> Om frågan handlar om en bil</label>
            </div>
            <div className="col-75">
              <input
                placeholder="Registreringsnummer"
                type="text"
                value={values.regnumber || ""}
                name="regnumber"
                onChange={changeData}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label>Email:</label>
            </div>
            <div className="col-75">
              <input
                placeholder="Ange ditt email"
                type="email"
                value={values.email}
                name="email"
                onChange={changeData}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label>Namn:</label>
            </div>
            <div className="col-75">
              <input
                placeholder="Ange ditt namn"
                type="text"
                value={values.name}
                name="name"
                onChange={changeData}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label>Beskrivning:</label>
            </div>
            <div className="col-75">
              <textarea
                className="textAnswer"
                type="text"
                placeholder="Beskriv din fråga här"
                value={values.description}
                name="description"
                onChange={changeData}
              />
            </div>
          </div>
          <div className="row">
            <label className="gdprInfo">
              Härmed godkänner du att P.ALBilhandel använder och sparar dina
              ovanstående uppgifter för att svara på din fråga:
              <input
                name="dataConsent"
                type="checkbox"
                checked={values.dataConsent}
                value={values.dataConsent}
                onChange={changeData}
              />
            </label>
          </div>
          <div className="row">
            <button className="msgBtn" type="submit">
              Skicka
            </button>
            <div className="error">{error}</div>
            <div className="sent">{sent}</div>
          </div>
        </form>
      </div>
    </div>
  );
}
