import React, { useState } from "react";
import { searchUsers } from "../services/api";
import { useNavigate } from "react-router-dom";
import "../styles.css";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    const input = e.target.value;
    setQuery(input);

    if (input.length >= 3) { // Don't call API if query is less than 3 chars
      try {
        const results = await searchUsers(input);
        setUsers(results);
        setNoResults(results.length === 0);
      } catch (error) {
        console.error("Error fetching users:", error);
        setUsers([]);
        setNoResults(true);
      }
    } else {
      setUsers([]);
      setNoResults(false);
    }
  };

  const handleSelectUser = (userId) => {
    navigate(`/user/${userId}`);
    setQuery("");
    setUsers([]);
    setNoResults(false);
  };

  return (
    <div className="search-page">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search by name or SSN..."
          value={query}
          onChange={handleSearch}
        />
        
        {/* Dropdown for search results */}
        {users.length > 0 && (
          <ul className="dropdown">
            {users.map((user) => (
              <li
                key={user.id}
                className="dropdown-item"
                onClick={() => handleSelectUser(user.id)}
              >
                <img src={user.image} alt={user.firstName} className="user-avatar" />
                <div className="user-info">
                  <p className="user-name">
                    {user.firstName} {user.lastName}
                  </p>
                  {/* <p className="user-ssn"><strong>SSN:</strong> {user.ssn}</p>
                  <p className="user-email"><strong>Email:</strong> {user.email}</p> */}
                </div>
              </li>
            ))}
          </ul>
        )}

        {/* No results found message */}
        {noResults && (
          <div className="no-results-popup">
            <p>No matching user found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
