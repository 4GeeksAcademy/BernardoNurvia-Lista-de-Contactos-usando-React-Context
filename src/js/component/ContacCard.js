import React from "react";
import 
const ContacCard = () => {
  return (
    <div>
      <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src="..." className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Name</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item"><i className="bi bi-geo-alt-fill"> Address: </i>xxx</li>
                <li className="list-group-item"><i className="bi bi-telephone-fill"> Phone: </i>xxxx</li>
                <li className="list-group-item"> <i className="bi bi-envelope-at-fill"> e-mail: </i>xxxx</li>
              </ul>                          
              <p className="card-text">
                <small className="text-body-secondary">
                  Last updated 3 mins ago
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContacCard;
