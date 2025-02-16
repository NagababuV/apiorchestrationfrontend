import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import UserDetails from "./pages/UserDetails";
import "./styles.css";  // ✅ Importing single CSS file

const App = () => {
  return (
    <Router>
      <Header />
      <SearchBar />
      <Routes>
        <Route path="/user/:id" element={<UserDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
