import api from "../api/axios";

// ==============================
// Get All Users
// GET /api/users
// ==============================
export const getUsers = async () => {
  try {
    const response = await api.get("/users");

    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);

    throw error;
  }
};

// ==============================
// Create New User
// POST /api/users
// ==============================
export const createUser = async (userData) => {
  try {
    const response = await api.post("/users", userData);

    return response.data;
  } catch (error) {
    console.error("Error creating user:", error);

    throw error;
  }
};

// ==============================
// Update User
// PUT /api/users/:id
// ==============================
export const updateUser = async (id, userData) => {
  try {
    const response = await api.put(`/users/${id}`, userData);

    return response.data;
  } catch (error) {
    console.error("Error updating user:", error);

    throw error;
  }
};

// ==============================
// Delete User
// DELETE /api/users/:id
// ==============================
export const deleteUser = async (id) => {
  try {
    const response = await api.delete(`/users/${id}`);

    return response.data;
  } catch (error) {
    console.error("Error deleting user:", error);

    throw error;
  }
};