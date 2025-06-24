import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AxiosApp() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', email: '' });
  const [editingUserId, setEditingUserId] = useState(null);
  const [editData, setEditData] = useState({ name: '', email: '' });

  const apiURL = 'https://jsonplaceholder.typicode.com/users';

  // Fetch users
  useEffect(() => {
    axios.get(apiURL)
      .then(res => setUsers(res.data))
      .catch(err => console.error('GET Error:', err));
  }, []);

  // Add new user
  const addUser = () => {
    axios.post(apiURL, newUser)
      .then(res => {
        setUsers([...users, res.data]);
        setNewUser({ name: '', email: '' });
      })
      .catch(err => console.error('POST Error:', err));
  };

  // Start editing
  const startEdit = (user) => {
    setEditingUserId(user.id);
    setEditData({ name: user.name, email: user.email });
  };

  // Save edited user
  const saveEdit = (id) => {
    axios.put(`${apiURL}/${id}`, editData)
      .then(res => {
        setUsers(users.map(user => user.id === id ? res.data : user));
        setEditingUserId(null);
        setEditData({ name: '', email: '' });
      })
      .catch(err => console.error('PUT Error:', err));
  };

  // Delete user
  const deleteUser = (id) => {
    axios.delete(`${apiURL}/${id}`)
      .then(() => {
        setUsers(users.filter(user => user.id !== id));
      })
      .catch(err => console.error('DELETE Error:', err));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Axios CRUD</h2>

      <h3>Add New User</h3>
      <input
        type="text"
        placeholder="Name"
        value={newUser.name}
        onChange={e => setNewUser({ ...newUser, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={newUser.email}
        onChange={e => setNewUser({ ...newUser, email: e.target.value })}
      />
      <button onClick={addUser}>Add User</button>

      <h3>User List</h3>
      <ul>
        {users.slice(0, 11).map(user => (
          <li key={user.id}>
            {editingUserId === user.id ? (
              <>
                <input
                  type="text"
                  value={editData.name}
                  onChange={e => setEditData({ ...editData, name: e.target.value })}
                />
                <input
                  type="email"
                  value={editData.email}
                  onChange={e => setEditData({ ...editData, email: e.target.value })}
                />
                <button onClick={() => saveEdit(user.id)}>Save</button>
              </>
            ) : (
              <>
                {user.name} ({user.email}) &nbsp;
                <button onClick={() => startEdit(user)}>Edit</button> &nbsp;
              </>
            )}
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AxiosApp;
