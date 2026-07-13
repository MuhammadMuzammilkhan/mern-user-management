import { useEffect, useState } from "react";

import {
  getUsers,
  createUser,
  deleteUser,
  updateUser,
} from "./services/userService";

import AddUserForm from "./components/AddUserForm";

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

    <div style={{ padding: "20px" }}>

      <h1>User Management System</h1>

      <p>

        Total Users : {users.length}

      </p>

      <hr />

      <AddUserForm

        onAdd={handleAddUser}

        onUpdate={handleUpdate}

        editingUser={editingUser}

      />

      <hr />

      <UserDashboard

        users={users}

        onEdit={handleEdit}

        onDelete={handleDelete}

      />

    </div>

  );

}

export default App;