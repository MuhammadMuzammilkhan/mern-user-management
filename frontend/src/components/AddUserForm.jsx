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

    }

    else {

      onAdd(userData);

    }

    setName("");

    setEmail("");

    setPhone("");

    setCity("");

  };

  return (

    <form

      onSubmit={handleSubmit}

      className="space-y-6"

    >

      <div>

        <h2 className="text-2xl font-bold text-gray-800">

          {editingUser

            ? "Update User"

            : "Add New User"}

        </h2>

        <p className="text-gray-500 mt-1">

          Fill in the details below.

        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div>

          <label className="block text-sm font-medium text-gray-700 mb-2">

            Full Name

          </label>

          <input

            type="text"

            placeholder="Enter full name"

            value={name}

            onChange={(e) =>

              setName(e.target.value)

            }

            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"

          />

        </div>

        <div>

          <label className="block text-sm font-medium text-gray-700 mb-2">

            Email Address

          </label>

          <input

            type="email"

            placeholder="Enter email"

            value={email}

            onChange={(e) =>

              setEmail(e.target.value)

            }

            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"

          />

        </div>

        <div>

          <label className="block text-sm font-medium text-gray-700 mb-2">

            Phone Number

          </label>

          <input

            type="text"

            placeholder="Enter phone number"

            value={phone}

            onChange={(e) =>

              setPhone(e.target.value)

            }

            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"

          />

        </div>

        <div>

          <label className="block text-sm font-medium text-gray-700 mb-2">

            City

          </label>

          <input

            type="text"

            placeholder="Enter city"

            value={city}

            onChange={(e) =>

              setCity(e.target.value)

            }

            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"

          />

        </div>

      </div>

      <div>

        <button

          type="submit"

          className={`px-6 py-3 rounded-lg text-white font-semibold transition duration-300 ${editingUser
            ? "bg-yellow-500 hover:bg-yellow-600"
            : "bg-blue-600 hover:bg-blue-700"
            }`}

        >

          {editingUser

            ? "Update User"

            : "Add User"}

        </button>

      </div>

    </form>

  );

}

export default AddUserForm;