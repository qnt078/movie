import React, { useEffect, useState } from "react";
import '../assets/css/home.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import axios from "axios";
import movies from "../API/fake-data/movie";
import ListSeries from "../components/ListSeries";
import ListMovie from "../components/ListMovie";
import banner1 from "../API/image/banner1.png"
import banner2 from "../API/image/banner2.jpg"
import banner3 from "../API/image/banner3.jpg"
const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://www.omdbapi.com/?s=galaxy&apikey=49ef34d8');
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);


  
  
  
  
  
  

  return (
    <div className ="container--fluid home">
        <div className="carousel">
        <Carousel controls={false} pause="focus" interval={2000} >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner1}
          alt="Slide 1"
        />
        <Carousel.Caption>
          <h3>{movies[0].Title}</h3>
          <p>{movies[0].Plot}</p>
          <div className="button">
          <button> 
          
           Watch Now
           </button>
          <button>View Info</button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="Slide 2"
        />
        <Carousel.Caption>
        <h3>{movies[1].Title}</h3>
          <p>{movies[1].Plot}</p>
          <div className="button">
          <button> 
          
           Watch Now
           </button>
          <button>View Info</button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner3}
          alt="Slide 3"
        />
        <Carousel.Caption>
        <h3>{movies[2].Title}</h3>
          <p>{movies[2].Plot}</p>
          <div className="button">
          <button> 
          
           Watch Now
           </button>
          <button>View Info</button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
      <div className="body-content">
        <div className="list-content">
          <h1>Popular</h1>
        </div>
        
        <ListMovie data = {data.Search}/>

      </div>
      <div className="body-content">
        <div className="list-content">
          <h1>Series</h1>
        </div>
        
        <ListSeries/>

      </div>
      
        
    
    </div>
  );
};

export default Home;
