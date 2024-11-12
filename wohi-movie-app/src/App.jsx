import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import RecommendationsScreen from "./screens/RecommendationsScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import AppNavbar from './components/NavBar';

function App() {
  const [favorites, setFavorites] = useState([]);

   const addToFavorites = (movie) => {
    if (!favorites.includes(movie)) {
      setFavorites([...favorites, movie]);
    }
  };

  const removeFromFavorites = (movie) => {
    setFavorites(favorites.filter((fav) => fav.id !== movie.id));
  };

  return (
    <Router>
      <AppNavbar />
      <Routes>
        <Route path="/" 
        element={<HomeScreen addToFavorites={addToFavorites} />} />
        <Route path="/recommendations" 
        element={<RecommendationsScreen addToFavorites={addToFavorites} />} />
        
        <Route
          path="/favorites"
          element={<FavoritesScreen favorites={favorites} onRemove={removeFromFavorites} />}
        />
      </Routes>
    </Router>
  );
}

export default App;