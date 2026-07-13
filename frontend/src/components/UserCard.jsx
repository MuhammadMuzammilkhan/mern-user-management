function UserCard({

  user,

  onEdit,

  onDelete

}) {

  return (

    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "15px",
        marginBottom: "15px",
      }}
    >

      <h3>{user.name}</h3>

      <p>
        <strong>Email:</strong> {user.email}
      </p>

      <p>
        <strong>Phone:</strong> {user.phone}
      </p>

      <p>
        <strong>City:</strong> {user.city}
      </p>

      <button
        onClick={() => onEdit(user)}
      >
        Edit
      </button>

      {" "}

      <button
        onClick={() => onDelete(user._id)}
      >
        Delete
      </button>

    </div>

  );

}

export default UserCard;