import React from "react";
import { useParams } from "react-router-dom";

function User() {
    const { id } = useParams();
    
    return (
        <div>
        <h2>User Profile</h2>
        <p>This is the profile page for user with ID: {id}</p>
        </div>
    );
    }
export default User;