import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/addNewContact.css";

export const AddNewContact = () => {
  const { store, actions } = useContext(Context);
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [inputAddress, setInputAddress] = useState("");

  const handleSave = () => {
    const newContact = {
      name: inputName,
      email: inputEmail,
      phone: inputPhone,
      address: inputAddress,
    }; console.log(newContact);
    fetch("https://playground.4geeks.com/todo/user/https://playground.4geeks.com/contact/agendas/BernardoNurvia/contacts", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newContact)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Contact added:', data);
        actions.AddNewContact(data); // Actualizar el estado global con el nuevo contacto
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  };
  return (
    <div className="container mt-5">
      <h2 className="text-center">Add a new contact</h2>
      <div className="form">
        <label className="form-label mt-2" htmlFor="fullNameInput">
          Full Name
        </label>
        <input
          className="form-control "
          type="text"
          id="fullNameInput"
          placeholder="Enter Full Name"
          onChange={(e) => setInputName(e.target.value)}
        />
        <label className="form-label mt-2" htmlFor="emailInput">
          Email
        </label>
        <input
          className="form-control"
          type="email"
          id="emailInput"
          placeholder="Enter Email" onChange={(e)=> setInputEmail(e.target.value)}
        />
        <label className="form-label mt-2" htmlFor="phoneInput">
          Phone
        </label>
        <input
          className="form-control"
          type="number"
          id="phoneInput"
          placeholder="Enter Phone" onChange={(e) => setInputPhone(e.target.value)}
        />
        <label className="form-label mt-2" htmlFor="addrressInput">
          Address
        </label>
        <input
          className="form-control"
          type="text"
          id="addressInput"
          placeholder="Enter Address" onChange={(e)=> setInputAddress(e.target.value)}
        />
      </div>
      <Link to="/">
        <div className="d-grid mt-2">
          <button
            type="submit"
            className="btn btn-primary mt-2"
            onClick={handleSave}
          >
            Save
          </button>
        </div>

        <a className="">or get back to contact</a>
      </Link>
    </div>
  )
  }