import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Fighters.css";

function Fighters() {
  let url = process.env.REACT_APP_API_URL;

  const [fightersData, setFightersData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getFightersData() {
    try {
      setLoading(true);
      let result = await axios.get(`${url}/fighters`);
      setFightersData(result.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getFightersData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleFavorite = async (fighterId) => {
    try {
      const updatedFightersData = fightersData.map((fighter) => {
        if (fighter.id === fighterId) {
          return { ...fighter, is_your_character: !fighter.is_your_character };
        }
        return fighter;
      });

      setFightersData(updatedFightersData);

      await axios.put(`${url}/fighters/${fighterId}`, {
        ...fightersData.find((fighter) => fighter.id === fighterId),
        is_your_character: !fightersData.find(
          (fighter) => fighter.id === fighterId
        ).is_your_character,
      });
    } catch (error) {
      console.log(error);
    }
  };

  function mapData() {
    return fightersData.map((fighter) => {
      return (
        <div key={fighter.id} className="col">
          <div className="card h-100 ">
            <div
              className="favorite"
              onClick={() => toggleFavorite(fighter.id)}
            >
              {fighter.is_your_character ? (
                <i className="fas fa-heart"></i>
              ) : (
                <i className="far fa-heart"></i>
              )}
            </div>
            <img src={fighter.photo} alt={fighter.name} className="m-2 h-100" />
            <div className="card-body">
              <h3 className="card-title">{fighter.name}</h3>
              <p className="card-text">Difficulty: {fighter.difficulty}/5</p>
              <Link
                to={`/fighters/${fighter.id}`}
                className="btn btn-outline-dark"
              >
                View Tips
              </Link>
            </div>
          </div>
        </div>
      );
    });
  }
  return (
    <div className="fighters">
      <div className="page-footer  btns pt-4"></div>
      <div className="container mb-4">
        {loading ? (
          <div className="loader">Loading...</div>
        ) : (
          <div className="row row-cols-1  row-cols-md-2 row-cols-lg-3 g-4 mt-4">
            {fightersData.length === 0 ? (
              <div>search the globe for strong fighters!</div>
            ) : (
              mapData()
            )}
          </div>
        )}
      </div>
      <div className=" page-footer  btns pt-4"></div>
    </div>
  );
}

export default Fighters;
