import { useEffect, useState } from "react";

import {
  getUsers,
  createUser,
  deleteUser,
  updateUser,
} from "./services/userService";

import AddUserForm from "./components/AddUserForm";
import "./index.css";

import UserDashboard from "./components/UserDashboard";

function App() {

  // ==========================
  // State
  // ==========================

  const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState(true);

  const [editingUser, setEditingUser] = useState(null);

  // ==========================
  // Fetch Users
  // ==========================

  const fetchUsers = async () => {

    try {

      const data = await getUsers();

      setUsers(data);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  useEffect(() => {

    fetchUsers();

  }, []);

  // ==========================
  // Add User
  // ==========================

  const handleAddUser = async (userData) => {

    try {

      const newUser = await createUser(userData);

      setUsers((previousUsers) => [

        ...previousUsers,

        newUser,

      ]);

    } catch (error) {

      console.log(error);

    }

  };

  // ==========================
  // Edit Placeholder
  // ==========================

  const handleEdit = (user) => {

    setEditingUser(user);

  };

 // ==========================
// Update User
// ==========================

const handleUpdate = async (id, userData) => {

  try {

    // Send PUT request to backend
    const updatedUser = await updateUser(id, userData);

    // Update React state
    setUsers((previousUsers) =>

      previousUsers.map((user) =>

        user._id === id

          ? updatedUser

          : user

      )

    );

    // Exit edit mode
    setEditingUser(null);

  }

  catch (error) {

    console.log(error);

  }

};

  // ==========================
  // Delete Placeholder
  // ==========================

  // ==========================
// Delete User
// ==========================

const handleDelete = async (id) => {

  const confirmDelete = window.confirm(

    "Are you sure you want to delete this user?"

  );

  if (!confirmDelete) {

    return;

  }

  try {

    await deleteUser(id);

    setUsers((previousUsers) =>

      previousUsers.filter(

        (user) => user._id !== id

      )

    );

  } catch (error) {

    console.log(error);

  }

};

return (

  <div className="min-h-screen bg-gray-100">

    {/* Header */}

    <header className="bg-blue-600 text-white shadow-md">

      <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">

        <div>

          <h1 className="text-3xl font-bold">

            User Management System

          </h1>

          <p className="text-blue-100 mt-1">

            MERN Stack CRUD Application

          </p>

        </div>

        <div className="text-right">

          <p className="text-sm">

            Total Users

          </p>

          <h2 className="text-3xl font-bold">

            {users.length}

          </h2>

        </div>

      </div>

    </header>

    {/* Main Content */}

    <main className="max-w-7xl mx-auto p-8">

      {/* Form */}

      <div className="bg-white rounded-xl shadow-md p-6 mb-8">

        <AddUserForm

          onAdd={handleAddUser}

          onUpdate={handleUpdate}

          editingUser={editingUser}

        />

      </div>

      {/* Dashboard */}

      <div className="bg-white rounded-xl shadow-md p-6">

        <UserDashboard

          users={users}

          onEdit={handleEdit}

          onDelete={handleDelete}

        />

      </div>

    </main>

  </div>

);

}

export default App;