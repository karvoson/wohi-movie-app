import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import MovieCard from '../components/MovieCard';

function HomeScreen({addToFavorites}) {
  const [popular, setPopular] = useState([]);
  const navigate = useNavigate();

  const handleGetRecommendations = () => {
    navigate('/recommendations');
  };

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNGE5YjI0MmZjNjZlNDRiMDY2ZjgyOTAxODJmNWE2MSIsIm5iZiI6MTczMTIzOTQ2Ny41NTg4Njg0LCJzdWIiOiI2NzJiOTU1OTRiMzBlOTI5Y2Q2ZWU5OGEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.-JT7MQ5gXO-4aQrwNi1wwhKPjpDvc1XBW7NnKlBZv78'
      }
    };
    
    const fetchPopular = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log(data);
        setPopular(data.results); 
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchPopular();
  }, []);

  return (
    <Container>
      <Row>
          <h1>Welcome to the Movie Recommendations App</h1>
          </Row>
         <Row>
          <Col>
          <Button className="button" variant="primary" onClick={handleGetRecommendations}>
            Get Recommendations
          </Button>
        </Col>
      </Row>
      <Row>
        <h2>Top Rated Movies</h2>
      </Row>
      <div>
      <Row>
        {popular.map((movie) => (
          <Col key={movie.id} sm={12} md={6} lg={4} xl={3}>
            <MovieCard movie={movie} onAdd={addToFavorites} />
          </Col>
        ))}
      </Row>
      </div>
  
    </Container>
    

    
  );
}
export default HomeScreen;