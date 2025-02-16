import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getUserById } from "../services/api";
import Loader from "../components/Loader";
import "../styles.css";

const UserDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userData = await getUserById(id);
                setUser(userData);
            } catch (error) {
                console.error("Error fetching user details:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchUser();
    }, [id]);

    if (loading) return <Loader />;
    if (!user) return <p className="error-message">User not found.</p>;

    return (
        <div className="user-details-container">
            <div className="user-card">
                <img
                    src={user.image || `https://robohash.org/${user.id}.png?size=150x150`}
                    alt={user.firstName}
                    className="user-details-avatar"
                />
                <div className="user-info">
                    <h2 className="user-name">
                        {user.firstName} {user.lastName}
                    </h2>
                    <p className="user-email"><strong>Email:</strong> {user.email}</p>
                    <p className="user-ssn"><strong>SSN:</strong> {user.ssn}</p>
                </div>
                <button className="reset-btn" onClick={() => navigate("/")}>Reset</button>
            </div>
        </div>
    );
};

export default UserDetails;
