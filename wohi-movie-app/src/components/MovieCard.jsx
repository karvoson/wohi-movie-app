import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import "/Users/sonjakarvonen/wohi-movie-app/wohi-movie-app/src/App.css";

function MovieCard({ movie , onAdd, onRemove, isFavorite}) {
  const [isAdded, setIsAdded] = useState(false);
  const { title, poster_path, overview, release_date } = movie;

  
  const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

  const handleAdd = () => {
    onAdd(movie); 
    setIsAdded(true); 
  };

  const handleRemove = () => {
    onRemove(movie); 
    setIsAdded(false);
  };


  return (
    <Card className="movie-card">
      {}
      <Card.Img variant="top" src={poster_path ? imageUrl : 'https://via.placeholder.com/500x750?text=No+Image'} />
      
      <Card.Body>
        {}
        <Card.Title>{title}</Card.Title>
        
        {}
        <Card.Subtitle className="mb-2 text-muted">
          Release Date: {release_date}
        </Card.Subtitle>
        
        {}
        <Card.Text>
          {overview.length > 100 ? overview.substring(0, 100) + "..." : overview}
        </Card.Text>
    
         {}
        {isAdded ? (
          <Button variant="success" disabled>
            Added to Favorites!
          </Button>
        ) : isFavorite ? (
          <Button variant="danger" onClick={() => handleRemove()}>
            Remove from Favorites
          </Button>
        ) : (
          <Button variant="primary" onClick={() => handleAdd()}>
            Add to Favorites
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
