import React from "react";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import Axios from "axios";
import "./sendMsg.scss";

// styles for msg-box
const useStyles = makeStyles((theme) => ({
  root: {
    height: 200,
  },
  paper: {
    zIndex: 10,
    position: "fixed",
    // margin: theme.spacing(1),
    width: "100%",
    height: "100%",
    // bottom: theme.spacing(10),
    // right: theme.spacing(10),
  },
}));

export default function SendMsg() {
  // show the form
  const [showModal, setShowModal] = React.useState(false);
  const [error, setError] = React.useState("");
  const [sent, setSent] = React.useState("");

  // the data to send to db
  const [values, setValues] = React.useState({
    regnumber: "",
    email: "",
    description: "",
    subject: "",
    name: "",
    dataConsent: false,
  });
  // adding the settings for material-ui
  const classes = useStyles();
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
      //   e.preventDefault();
      setError("Alla fält förutom registreringsnummer måste vara ifyllda");
    } else if (values.dataConsent === false) {
      //   e.preventDefault();
      setError("Du måste godkänna att vi använder dina uppgifter");
    } else {
      //   e.preventDefault();
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
  // Axios.get("http://localhost/api/api/read.php").then((response) => {
  //   console.log(response.data);
  // });

  return (
    <div className="message">
      <FormControlLabel
        control={<Checkbox checked={showModal} onChange={openModal} />}
        label={<FontAwesomeIcon className="emailIcon" icon={faEnvelopeOpen} />}
      />
      <Slide direction="down" in={showModal} mountOnEnter unmountOnExit>
        <Paper elevation={0} className={classes.paper}>
          <form onSubmit={submit}>
            <FontAwesomeIcon
              className="exitDSKTP"
              onClick={openModal}
              icon={faTimesCircle}
            />
            <h1>Kontakta oss för frågor!</h1>
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
              <label>
                GDPR:
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
                Svara
              </button>
              <div className="error">{error}</div>
              <div className="sent">{sent}</div>
            </div>
          </form>
        </Paper>
      </Slide>
    </div>
  );
}
