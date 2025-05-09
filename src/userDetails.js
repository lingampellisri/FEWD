import React, { useState } from "react";
import "./UserDetails.css"; // Make sure the CSS file is in the same folder

function UserDetails() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [branch, setBranchName] = useState("");

  const onHandleSubmit = () => {
    alert(`Full Name: ${firstname} ${lastname}
Age: ${age}
Email: ${email}
Branch: ${branch}`);
  };

  return (
    <div className="user-form-container">
      <input
        type="text"
        placeholder="Enter firstname"
        value={firstname}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter lastname"
        value={lastname}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter branch"
        value={branch}
        onChange={(e) => setBranchName(e.target.value)}
      />
      <button onClick={onHandleSubmit}>Submit</button>
    </div>
  );
}

export default UserDetails;
