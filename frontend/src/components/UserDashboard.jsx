import UserCard from "./UserCard";

function UserDashboard({

  users,

  onEdit,

  onDelete,

}) {

  return (

    <div>

      {/* Dashboard Header */}

      <div className="flex justify-between items-center mb-6">

        <div>

          <h2 className="text-2xl font-bold text-gray-800">

            Admin Dashboard

          </h2>

          <p className="text-gray-500">

            Manage all registered users.

          </p>

        </div>

        <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">

          {users.length} Users

        </span>

      </div>

      {

        users.length === 0 ? (

          <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl py-16 text-center">

            <h3 className="text-2xl font-semibold text-gray-500">

              No Users Found

            </h3>

            <p className="text-gray-400 mt-2">

              Add your first user using the form above.

            </p>

          </div>

        ) : (

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {

              users.map((user) => (

                <UserCard

                  key={user._id}

                  user={user}

                  onEdit={onEdit}

                  onDelete={onDelete}

                />

              ))

            }

          </div>

        )

      }

    </div>

  );

}

export default UserDashboard;