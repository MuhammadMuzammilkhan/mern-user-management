import UserCard from "./UserCard";

function UserDashboard({

  users,

  onEdit,

  onDelete,

}) {

  return (

    <div>

      <h2>Admin Dashboard</h2>

      {

        users.length === 0 ? (

          <p>No Users Found</p>

        ) : (

          users.map((user) => (

            <UserCard

              key={user._id}

              user={user}

              onEdit={onEdit}

              onDelete={onDelete}

            />

          ))

        )

      }

    </div>

  );

}

export default UserDashboard;