import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import MovieCard from "../components/MovieCard";

function RecommendationsScreen({addToFavorites}) {
  const [movies, setMovies] = useState([]);  
  const [genres, setGenres] = useState([]); 
  const [selectedGenre, setSelectedGenre] = useState(""); 
  const navigate = useNavigate();

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNGE5YjI0MmZjNjZlNDRiMDY2ZjgyOTAxODJmNWE2MSIsIm5iZiI6MTczMTIzOTQ2Ny41NTg4Njg0LCJzdWIiOiI2NzJiOTU1OTRiMzBlOTI5Y2Q2ZWU5OGEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.-JT7MQ5gXO-4aQrwNi1wwhKPjpDvc1XBW7NnKlBZv78'
      }
    };
    
    const fetchGenres = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en-US', options);
        const data = await response.json();
        setGenres(data.genres);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    const fetchMovies = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log(data);
        setMovies(data.results); 
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchGenres();
    fetchMovies();
  }, []);

  const filteredMovies = selectedGenre
    ? movies.filter((movie) => movie.genre_ids.includes(Number(selectedGenre)))
    : movies;
  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
  };

  const goToFavorites = () => {
    navigate('/favorites');
  };

  

  return (
    <Container className="movie-card-container">
      <h2>Recommended Movies</h2>

        {/* Genre Filter Dropdown */}
        <Form.Select
        aria-label="Filter by genre"
        onChange={handleGenreChange}
        value={selectedGenre}
        className="mb-3"
      >
        <option value="">All Genres</option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </Form.Select>

      <Row>
        {filteredMovies.map((movie) => (
          <Col key={movie.id} sm={12} md={6} lg={4} xl={3}>
            <MovieCard movie={movie} onAdd={addToFavorites} />
          </Col>
        ))}
      </Row>
      <Button onClick={goToFavorites}>Go to Favorites</Button>

    </Container>
  );
}

export default RecommendationsScreen;