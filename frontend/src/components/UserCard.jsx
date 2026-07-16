function UserCard({

  user,

  onEdit,

  onDelete,

}) {

  return (

    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6 border border-gray-200">

      {/* Avatar + User Info */}

      <div className="flex items-center gap-4 mb-5">

        <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">

          {user.name.charAt(0).toUpperCase()}

        </div>

        <div>

          <h3 className="text-xl font-bold text-gray-800">

            {user.name}

          </h3>

          <p className="text-gray-500">

            {user.email}

          </p>

        </div>

      </div>

      {/* User Details */}

      <div className="space-y-2 text-gray-700">

        <p>

          <span className="font-semibold">

            📞 Phone:

          </span>{" "}

          {user.phone}

        </p>

        <p>

          <span className="font-semibold">

            📍 City:

          </span>{" "}

          {user.city}

        </p>

      </div>

      {/* Action Buttons */}

      <div className="flex gap-3 mt-6">

        <button

          onClick={() => onEdit(user)}

          className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg font-semibold transition duration-300"

        >

          Edit

        </button>

        <button

          onClick={() => onDelete(user._id)}

          className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-semibold transition duration-300"

        >

          Delete

        </button>

      </div>

    </div>

  );

}

export default UserCard;