import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MovieCard from "../components/MovieCard";

function FavoritesScreen({ favorites, onRemove }) {
  return (
    <Container>
      <h2> Your Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorites added yet!</p>
      ) : (
      <Row>
        {favorites.map((favorite) => (
          <Col key={favorite.id} sm={12} md={6} lg={4} xl={3}>
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
