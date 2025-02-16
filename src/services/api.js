import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/users";

// Search users with free text
export const searchUsers = async (query) => {
    if (query.length < 1) return []; // Don't call API if query is less than 3 chars

    try {
        const response = await axios.get(`${API_BASE_URL}/search`, { params: { query } });
        return response.data;
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
};

// Fetch user by ID
export const getUserById = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching user:", error);
        return null;
    }
};
