import React, { useContext } from "react";
import imgHe from "./../../img/avatarMaker3.png";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";


const ContacCard = ({ contact, getContacts }) => {
  const { store, actions } = useContext(Context);
  function deleteContact(id) {
    fetch(
      "https://playground.4geeks.com/contact/agendas/BernardoNurvia/contacts/" +
        id,
      { method: "DELETE" }
    )
      .then((response) => response.text)
      .then((data) => actions.getContacts());
  }
  const navigate = useNavigate()
  return (
    <div>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={imgHe}
              className="img-fluid m-auto"
              style={{ borderRadius: "100%", width: "12rem" }}
              alt="Imagen de avatar"
            />
          </div>
          <div className="col-md-8">
            <div className="conatainer card-body ">
              <div className="row ">
                <h5 className="col card-title">{contact.name}</h5>
                <i className="col-1 bi bi-pencil-fill" onClick={()=>{
                  navigate(`/edit-contact/${contact.id}`)
                }}></i>
                
                <i
                  className="col-1 bi bi-trash-fill"
                  onClick={() => {
                    deleteContact(contact.id);
                  }}
                ></i>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <i className="bi bi-geo-alt-fill"> Address: </i>
                  {contact.address}
                </li>
                <li className="list-group-item">
                  <i className="bi bi-telephone-fill"> Phone: </i>
                  {contact.phone}
                </li>
                <li className="list-group-item">
                  <i className="bi bi-envelope-at-fill"> e-mail: </i>
                  {contact.email}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContacCard;
