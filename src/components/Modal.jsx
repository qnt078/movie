import React,{useState,useEffect} from "react";
import "../assets/css/modal.css";
import axios from "axios";



const Modal = ({ setOpenModal, title }) => {
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
  
    fetch(`https://www.omdbapi.com/?t=${title}&apikey=49ef34d8`)
      .then(response => response.json())
      .then(data => setMovieData(data))
      .catch(error => console.error(error));
  }, [title]);
    console.log(movieData);

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (event.target.classList.contains('modal')) {
          setOpenModal(false);
        }
      };
  
      window.addEventListener('click', handleClickOutside);
  
      return () => {
        window.removeEventListener('click', handleClickOutside);
      };
    }, [setOpenModal]);






  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={() => setOpenModal(false)}>
        <i className='bx bx-x'></i>
        </span>
        <div className="info">
        <div className="content-img">
        <img src={movieData?.Poster} alt="movie" />
       </div>
        <div className="content-info">
        <h2>{movieData?.Title}</h2>
        <p> {movieData?.Plot}</p>
        <h5>Release Year: <span>{movieData?.Year}</span> </h5>
        <h5>Runtimes: <span>{movieData?.Runtime}</span> </h5>
        <h5>Rating: <span> {movieData?.imdbRating}</span></h5>
        <h5>Actor: <span> {movieData?.Actors}</span> </h5>
        <h5>Director: <span> {movieData?.Director}</span></h5>
        </div>
        </div>
    
      </div>
    </div>
  );
};

export default Modal;

