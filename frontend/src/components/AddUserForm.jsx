import { useEffect, useState } from "react";

function AddUserForm({

  onAdd,

  onUpdate,

  editingUser,

}) {

  // ==========================
  // Form State
  // ==========================

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [phone, setPhone] = useState("");

  const [city, setCity] = useState("");

  // ==========================
  // Fill form while editing
  // ==========================

  useEffect(() => {

    if (editingUser) {

      setName(editingUser.name);

      setEmail(editingUser.email);

      setPhone(editingUser.phone);

      setCity(editingUser.city);

    }

  }, [editingUser]);

  // ==========================
  // Submit Form
  // ==========================

  const handleSubmit = (e) => {

    e.preventDefault();

    // Validation

    if (

      !name ||

      !email ||

      !phone ||

      !city

    ) {

      alert("All fields are required.");

      return;

    }

    const userData = {

      name,

      email,

      phone,

      city,

    };

    if (editingUser) {

      onUpdate(editingUser._id, userData);

    } else {

      onAdd(userData);

    }

    // Clear Form

    setName("");

    setEmail("");

    setPhone("");

    setCity("");

  };

  return (

    <form onSubmit={handleSubmit}>

      <h2>

        {editingUser

          ? "Update User"

          : "Add New User"}

      </h2>

      <input

        type="text"

        placeholder="Full Name"

        value={name}

        onChange={(e) =>

          setName(e.target.value)

        }

      />

      <br /><br />

      <input

        type="email"

        placeholder="Email"

        value={email}

        onChange={(e) =>

          setEmail(e.target.value)

        }

      />

      <br /><br />

      <input

        type="text"

        placeholder="Phone Number"

        value={phone}

        onChange={(e) =>

          setPhone(e.target.value)

        }

      />

      <br /><br />

      <input

        type="text"

        placeholder="City"

        value={city}

        onChange={(e) =>

          setCity(e.target.value)

        }

      />

      <br /><br />

      <button type="submit">

        {editingUser

          ? "Update User"

          : "Add User"}

      </button>

    </form>

  );

}

export default AddUserForm;