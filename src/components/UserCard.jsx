import React from "react";

const UserCard = ({ user, onSelect }) => {
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onSelect(user.id);
    }
  };

  return (
    <li
      className="user-card"
      onClick={() => onSelect(user.id)}
      onKeyPress={handleKeyPress}
      tabIndex={0} // Enables keyboard navigation
    >
      {/* User Avatar */}
      <img
        src={user.image || "https://via.placeholder.com/60"}
        alt={`${user.firstName} ${user.lastName}`}
        className="user-avatar"
        loading="lazy"
      />

      {/* User Info */}
      <div className="user-info">   
        <p className="user-name">
          {user.firstName} {user.lastName}
        </p>
        <p className="user-ssn">
          <strong>SSN:</strong> {user.ssn || "N/A"}
        </p>
        <p className="user-email">{user.email || "No email available"}</p>
      </div>

      {/* View Button */}
      <button className="view-btn" onClick={() => onSelect(user.id)}>
        View
      </button>
    </li>
  );
};

export default UserCard;
