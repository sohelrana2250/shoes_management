import React from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const userData = useLoaderData();

  return (
    <>
      <h1 className="text-2xl text-center font-serif">
        Total User :{userData?.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>Nationality</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {userData &&
              userData.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.email}</td>
                  <td>{user.nationality}</td>
                  <td>{user.address}</td>
                  <td>
                    <button className="btn btn-sm btn-primary mr-2">
                      Edit
                    </button>
                    <button className="btn btn-sm btn-error">Delete</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Users;
