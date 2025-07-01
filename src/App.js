import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, updateUser, deleteUser } from "./features/users/userSlice";

function App() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const [form, setForm] = useState({ id: "", name: "", email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.id) {
      dispatch(updateUser(form));
    } else {
      dispatch(addUser(form.name, form.email));
    }
    setForm({ id: "", name: "", email: "" });
  };

  const handleEdit = (user) => {
    setForm(user);
    console.log("user", user);
  };
  const handleDelete = (id) => dispatch(deleteUser(id));

  return (
    <div>
      <h2>User List</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <button type="submit">{form.id ? "Update" : "Add"}</button>
      </form>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
            <button onClick={() => handleEdit(user)}>✏️</button>
            <button onClick={() => handleDelete(user.id)}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
