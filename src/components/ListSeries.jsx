import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "./Modal";
const ListSeries = (props) => {

  const [data, setData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleCardClick = (movie) => {
    setSelectedMovie(movie);
    setModalOpen(true);
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.omdbapi.com/?s=look&type=series&apikey=49ef34d8"
        );
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  const series = data?.Search;

  return (
    <div>
      <div className="list-item">
        {series?.map((item, index) => {
          return (
            <div
              className="list-movie"
              key={index}
              style={{ width: "250px", height: "450px" }}
              onClick={() => handleCardClick(item)}
            >
              <img src={item.Poster} alt="movie" />
              <div className="movie-info">
                <h3>{item.Title}</h3>
                <p>{item.Year}</p>
              </div>
            </div>
          );
        })}
      </div>
      {modalOpen && <Modal setOpenModal={setModalOpen}   title={selectedMovie?.Title} />}
    </div>
  );
};

export default ListSeries;
