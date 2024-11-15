import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MovieCard from "../components/MovieCard";

function FavoritesScreen({ favorites, onRemove }) {
  return (
    <Container>
      <Row>
      <h2> Your Favorites</h2>
      </Row>
      {favorites.length === 0 ? (
        <p>No favorites added yet!</p>
      ) : (
    
      <Row >
    
        {favorites.map((favorite) => (
          <Col key={favorite.id} sm="auto" md="auto" lg="auto" xl="auto">
           <MovieCard
              movie={favorite}
              onRemove={onRemove}  
              isFavorite={true}  
            />
          </Col>
        ))}
  
      </Row>
      )}
    </Container>
  );
};

export default FavoritesScreen;