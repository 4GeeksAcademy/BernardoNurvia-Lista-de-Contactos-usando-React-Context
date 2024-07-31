import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/addNewContact.css";

export const AddNewContact = () => {
  const { store, actions } = useContext(Context);
const [inputName, setInputName]= useState ("");

  return (
    <div className="container mt-5">
      <h2 className="text-center">Add a new contact</h2>
      <div className="form">
        <label className="form-label mt-2" htmlFor="fullNameInput" >Full Name</label>
        <input className="form-control " type="text" id="fullNameInput" placeholder="Enter Full Name" onChange={()=>{
          setInputName(e.target.value)
        }}/>
        <label className="form-label mt-2" htmlFor="emailInput">Email</label>
        <input className="form-control" type="email" id="emailInput" placeholder="Enter Email"/>
        <label className="form-label mt-2" htmlFor="phoneInput">Phone</label>
        <input className="form-control" type="number" id="phoneInput" placeholder="Enter Phone"/>
        <label className="form-label mt-2" htmlFor="addrressInput">Address</label>
        <input className="form-control" type="text" id="addressInput" placeholder="Enter Address" />
      </div>
      <div className="d-grid mt-2">
        <button type="submit" className="btn btn-primary mt-2">
          Save
        </button>
      </div>
      <Link to="/">
        <a className="">or get back to contact</a>
      </Link>
    </div>
  );
};
