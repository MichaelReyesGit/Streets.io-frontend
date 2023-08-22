import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";

function Fighter() {
  let url = process.env.REACT_APP_API_URL;

  const [fighter, setFighter] = useState([]);

  const navigate = useNavigate();

  const { id } = useParams();
  useEffect(() => {
    getFighterById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getFighterById() {
    try {
      let result = await axios.get(`${url}/fighters/${id}`);

      setFighter(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  const deleteFighter = async () => {
    try {
      const response = await axios.delete(`${url}/fighters/${id}`);
      console.log(response);
      const { name } = response.data;
      alert(`${name} has been deleted`);
      navigate("/fighters");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fighter">
      <div className="container">
        <div className="row g-0  position-relative">
          <div className="col-md-6 mb-md-0 p-md-4">
            <img src={fighter.photo} className="w-100" alt="fighter" />
          </div>
          <div className="col-md-6 p-4 ps-md-0">
            <h2 className="mt-0 fighter-name ">{fighter.name}</h2>
            <br />
            <ul className="list-inline">
              <li className="list-inline-item">
                Difficulty: {fighter.difficulty}/5
              </li>
              <li className="list-inline-item">
                &bull;Hitpoints: {fighter.hp}
              </li>
              <li className="list-inline-item">
                &bull; Archetype: {fighter.character_type}
              </li>
            </ul>
            <h5>Notes:</h5>
            <p></p>
          </div>
        </div>
      </div>
      <div className="d-flex page-footer  btns px-3">
        <Link to="/fighters" className="pt-1">
          <button className="btn btn-light">Back</button>
        </Link>
        <Link to={`/fighters/${id}/edit`} className="pt-1 mx-2 ">
          <button className="btn btn-light">Edit</button>
        </Link>
        <Link className="pt-1">
          <button
            type="button"
            className="btn btn-light  "
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Delete
          </button>
        </Link>
        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                  Are You Sure You Wish To Delete?
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  data-bs-dismiss="modal"
                >
                  NO
                </button>
                <button
                  onClick={() => deleteFighter()}
                  type="button"
                  className="btn btn-outline-danger"
                  data-bs-dismiss="modal"
                >
                  YES
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fighter;
