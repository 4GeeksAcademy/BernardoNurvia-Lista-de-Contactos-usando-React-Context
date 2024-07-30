import React from "react";
import imgHe from "./../../img/avatarMaker3.png";


const ContacCard = () => {

  return (
    <div>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={imgHe}
              className="img-fluid m-auto"
              style={{ borderRadius: "100%", width: "12rem"}}
              alt="Imagen de avatar"
            />
          </div>
          <div className="col-md-8">
            <div className="conatainer card-body ">
              <div className="row ">
                <h5 className="col card-title">Bernardo Nurvia</h5>
                <i className="col-1 bi bi-pencil-fill"></i>
                <i className="col-1 bi bi-trash-fill"></i>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <i className="bi bi-geo-alt-fill"> Address: </i>5842 Hillcrest
                  Rd
                </li>
                <li className="list-group-item">
                  <i className="bi bi-telephone-fill"> Phone: </i>(870) 288-4149
                </li>
                <li className="list-group-item">
                  <i className="bi bi-envelope-at-fill"> e-mail: </i>
                  mike.ana@expalme.com
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
