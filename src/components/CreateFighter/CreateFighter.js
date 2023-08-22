import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateFighter() {
  const [fighterData, setFighterData] = useState({
    name: "",
    photo: "",
    difficulty: 1,
    hp: 10000,
    character_type: "",
    is_your_character: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFighterData({
      ...fighterData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = process.env.REACT_APP_API_URL;
      const result = await axios.post(`${url}/fighters`, fighterData);
      alert("New Fighter Created!");
      navigate(`/fighters/${result.data.id}`);
    } catch (error) {
      console.log(error);
      if (
        error.response.data.error ===
        "You forgot to start your photo url with http:// or https://"
      ) {
        alert("Please enter a valid photo url");
      }
    }
  };

  return (
    <div className="create">
      <div>
        <h2>A New Fighter Has Appeared!</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="row g-2">
          <label className="edit-label">Name:</label>
          <div className="col-md-12">
            <input
              type="text"
              className="form-control"
              placeholder="Name..."
              name="name"
              id="name"
              required
              onChange={handleChange}
              value={fighterData.name}
            />
          </div>
          <div className="col-md-6">
            <label className="edit-label col-md-6">Difficulty:</label>
            <input
              required
              type="number"
              className="form-control"
              min="1"
              max="5"
              step="1"
              name="difficulty"
              id="difficulty"
              onChange={handleChange}
              value={fighterData.difficulty}
            />
          </div>
          <div className="col">
            <label className="edit-label">Hitpoints:</label>
            <input
              required
              type="number"
              className="form-control"
              max="10100"
              name="hp"
              id="hp"
              onChange={handleChange}
              value={fighterData.hp}
            />
          </div>
          <div className="col-md-4">
            <label className="edit-label">Archetype:</label>
            <input
              required
              type="text"
              className="form-control"
              placeholder="Character type..."
              name="character_type"
              id="character_type"
              onChange={handleChange}
              value={fighterData.character_type}
            />
          </div>
          <div className="col-md-2">
            <div className="form-check">
              <br />

              <input
                className="form-check-input "
                type="checkbox"
                name="is_your_character"
                id="is_your_character"
                onChange={handleChange}
                checked={fighterData.is_your_character}
              />
              <label className="form-check-label" htmlFor="gridCheck">
                Your Character?
              </label>
            </div>
          </div>
          <div className="col-md-12">
            <label>Photo:</label>
            <input
              className="form-control"
              type="text"
              name="photo"
              value={fighterData.photo}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-outline-light">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateFighter;
