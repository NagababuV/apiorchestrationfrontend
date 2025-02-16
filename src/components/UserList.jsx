import React, { useState, useEffect } from "react";
import UserCard from "./UserCard"; // Import UserCard component

const UserList = ({ users, onSelect }) => {
  if (!users || users.length === 0) {
    return <p className="no-results">No users found.</p>;
  }

  return (
    <ul className="user-list">
      {users.map((user) => (
        <UserCard key={user.id} user={user} onSelect={onSelect} />
      ))}
    </ul>
  );
};

export default UserList;
