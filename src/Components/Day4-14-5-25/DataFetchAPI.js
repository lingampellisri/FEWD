import React from "react";
import axios from "axios";
import { useEffect,useState } from "react";
import { combineSlices } from "@reduxjs/toolkit";

function DataFetch()
{

    useEffect(()=>
    {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res=>
        {
            console.log(res);
            setPosts(res.data);
        })
        .catch(err=>
        {
            console.log(err);
        }
        );
        
    },[])

    const [posts,setPosts]=useState([]);

    return <div>

    <ul>
        {
            posts.map(post =>
            (
                <li key={post.id}> {post.title}</li>
            )
            )
        }
    </ul>

    </div>
}

export default DataFetch;