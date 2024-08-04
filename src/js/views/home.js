import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";
import ContacCard from "../component/ContacCard";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [contacts, setContacts] = useState([]);
  console.log(contacts);
  function crearAngeda() {
    fetch("https://playground.4geeks.com/contact/agendas/BernardoNurvia", {
      method: "POST",
    })
      .then((response) => {
        console.log(response);
        if (response.ok) {
          return response.json();
        } else {
          throw "ha ocurrido un error";
        }
      })
      .then((data) => {
        getContacts();
      })
      .catch((e) => {
        console.log(e);
      });
  }
  function getContacts() {
    fetch("https://playground.4geeks.com/contact/agendas/BernardoNurvia")
      .then((response) => {
        console.log(response);
        if (response.status == 200) {
          return response.json();
        } else {
          crearAngeda();
        }
      })
      .then((data) => {
        setContacts(data.contacts);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  useEffect(() => {
    actions.getContacts();
  }, []);
  return (
    <div className="container text-center mt-5">
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <h1 className="mt-3 nameAgenda">Agenda de Bernardo Nurvia</h1>
        <Link to="/add-new-contact/">
          <button className="mb-2 btn btn-success">Add a new contact</button>
        </Link>
      </div>

      {store.contacts.map((contact) => {
        return (
          <ContacCard
            contact={contact}
            getContacts={getContacts}
            key={contact.id}
          />
        );
      })}
    </div>
  );
};
