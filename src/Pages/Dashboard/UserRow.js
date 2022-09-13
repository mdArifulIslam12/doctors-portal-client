import React from "react";
import toast from "react-hot-toast";

const UserRow = ({ user, index, refetch }) => {
  const { email, role, _id } = user;
  const makeAdmin = () => {
    fetch(`https://young-bayou-33287.herokuapp.com/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failled to make an admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Successfully made an admin");
          refetch();
        }
      });
  };
  const handleDelete = (id) => {
    const deleteConfirm = window.confirm("Are your sure Delete!!");

    if (deleteConfirm) {
      fetch(`http://localhost:5000/user/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            toast.success(`Doctor ${email} is deleted`);
            refetch();
          }
        });
    }
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>
        {role !== "Admin" && (
          <button onClick={makeAdmin} className="btn btn-xs">
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button onClick={() => handleDelete(_id)} className="btn btn-xs">
          Delete User
        </button>
      </td>
    </tr>
  );
};

export default UserRow;
