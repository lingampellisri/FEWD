import axios from "axios";
import React, { use, useState, useEffect } from "react";

function Lab1() {
  const [user, setUser] = useState([]);

  const [showData, setShowData] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setUser(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    const newpost = {
      title: "foo",
      body: "bar",
      userId: 1,
    };

    axios
      .post("https://jsonplaceholder.typicode.com/posts", newpost)
      .then((response) => {
        console.log("Data posted successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error posting data:", error);
      });

    // axios.get("https://jsonplaceholder.typicode.com/posts/2")
    // .then(response=>
    // {
    //     console.log(response.data);
    // })
    // .catch(error=>
    // {
    //     console.log('Error fetching data:', error);
    // })

    // This will run once when the component mounts
    console.log("Component mounted");
  }, []);

  function fetchData() {
    setShowData(true);
  }

  const updateDate = (id) => {
    const updatedPost = {
      title: "Updated Title",
      body: "Updated Body",
      userId: 1,
    };

    axios
      .put(`https://jsonplaceholder.typicode.com/posts/${id}`, updatedPost)
      .then((response) => {
        console.log("Data updated successfully:", response.data);
        setUser((prevUser) =>
          prevUser.map((item) =>
            item.id === id ? { ...item, ...updatedPost } : item
          )
        );
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });
  };

  const deleteDate = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        console.log("Data deleted successfully:", response.data);
        setUser((prevUser) => prevUser.filter((item) => item.id !== id));
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
      });
  };

  // Simple GET request example

  return (
    <div>
      <h1>Lab1</h1>
      {/* 
      <button onClick={fetchData}>Fetch Data</button> */}

      <ul>
        {user.map((item) => (
          <li>
            <h2>{item.id}</h2>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
            <button onClick={() => updateDate(item.id)}>Update</button>

            <button onClick={() => deleteDate(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Lab1;
