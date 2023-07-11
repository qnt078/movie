import React, { useState } from "react";
import Modal from "./Modal";

const ListMovie = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleCardClick = (movie) => {
    setSelectedMovie(movie);
    setModalOpen(true);
  };

  return (
    <div>
      <div className="list-item">
        {props.data?.map((item, index) => {
          return (
            
            <div
              className="list-movie"
              key={index}
              style={{ width: '250px', height: '450px' }}
              onClick={() => handleCardClick(item)}
            >
              <img
                src={item.Poster}
                alt="movie"
                onClick={() => {
                  setModalOpen(true);
                }}
              />

              <div className="movie-info">
                <h3>{item.Title}</h3>
                <p></p>
              </div>
            </div>
          );
        })}
      </div>

      {modalOpen && <Modal setOpenModal={setModalOpen}   title={selectedMovie?.Title} />}
    </div>
  );
};

export default ListMovie;
