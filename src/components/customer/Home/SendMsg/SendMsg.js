import React, { useState } from "react";
import Axios from "axios";

export default function SendMsg() {
  const [values, setValues] = useState({});
  const changeData = (e) => {
    e.persist();
    setValues((values) => ({ ...values, [e.target.name]: e.target.value }));
  };
  console.log(values);

  const submit = (e) => {
    Axios.post(`http://localhost:5000/`, values)
      .then((respone) => {
        console.log(respone.data);
      })
      .catch(function (err) {
        console.log(err);
      });
    e.preventDefault();
  };
  Axios.get("http://localhost/api/api/read.php").then((response) => {
    console.log(response.data);
  });

  return (
    <form onSubmit={submit}>
      <label>
        Ämne:
        <input
          type="text"
          value={values.subject}
          name="subject"
          onChange={changeData}
          required
        />
      </label>
      <label>
        Regnumber:
        <input
          placeholder="Valfritt"
          type="text"
          value={values.regnumber}
          name="regnumber"
          onChange={changeData}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={values.email}
          name="email"
          onChange={changeData}
          required
        />
      </label>
      <label>
        Namn:
        <input
          type="text"
          value={values.name}
          name="name"
          onChange={changeData}
          required
        />
      </label>
      <label>
        Beskrivning:
        <textarea
          type="text"
          placeholder="Skriv din fråga här"
          value={values.description}
          name="description"
          onChange={changeData}
          required
        />
      </label>
      <label>
        GDPR:
        <input type="checkbox" />
      </label>
      <button type="submit">Svara</button>
    </form>
  );
}
