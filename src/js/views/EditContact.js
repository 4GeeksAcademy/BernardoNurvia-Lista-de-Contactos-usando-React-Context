import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

const EditContact = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  //asi ubico los parametros id dentro de contacts
  console.log(params.idContact);
  //useState para cambiar los input modificados por el user
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  //para cargar los datos del contacto al entrar en EditContact
  useEffect(() => {
    let datosContacto = store.contacts.find(
      (contact) => contact.id == params.idContact
    );
    // cambio el valor de la variable name para usarlo como value en el input name
    setName(datosContacto.name);
    setEmail(datosContacto.email);
    setPhone(datosContacto.phone);
    setAddress(datosContacto.address);
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center">Edit contact</h2>
      <div className="form">
        <label className="form-label mt-2" htmlFor="fullNameInput">
          Full Name
        </label>
        <input
          value={name} //variable que me traigo
          className="form-control "
          type="text"
          id="fullNameInput"
          placeholder="Enter Full Name"
          //registro los cambios hechos por el user en el input
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label className="form-label mt-2" htmlFor="emailInput">
          Email
        </label>
        <input
          value={email}
          className="form-control"
          type="email"
          id="emailInput"
          placeholder="Enter Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label className="form-label mt-2" htmlFor="phoneInput">
          Phone
        </label>
        <input
          value={phone}
          className="form-control"
          type="number"
          id="phoneInput"
          placeholder="Enter Phone"
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <label className="form-label mt-2" htmlFor="addrressInput">
          Address
        </label>
        <input
          value={address}
          className="form-control"
          type="text"
          id="addressInput"
          placeholder="Enter Address"
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
      </div>
      <Link to="/">
        <div className="d-grid mt-2">
          <button
            type="submit"
            className="btn btn-primary mt-2"
            //salva cambios llamando a una acction definida en flux.js y devuelve a home usando <Link>
            onClick={() => {
              actions.AddNewContact();
            }}
          >
            Save
          </button>

          <button className="btn btn-danger mt-2">Cancel</button>
        </div>
      </Link>
    </div>
  );
};

export default EditContact;
