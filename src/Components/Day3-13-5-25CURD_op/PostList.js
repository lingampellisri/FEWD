import React,{Component} from "react";
import axios from "axios";

class PostList extends Component
{
    constructor()
    {
        super();
        this.state={
            post:[]
        }

    }
    componentDidMount()
        {
            axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(Response=>
            {
                console.log(Response);
                this.setState({post:Response.data})
            })
            .catch(error=>
            {
                console.log(error)
            })
        }

    render()
    {
        return(
            <div>
                   <h1>List of posts</h1> 
                   {
                   this.state.post.length ?
                    this.state.post.map(posts=> <div key={posts.id}> {posts.title}</div>) : null
                   }
            </div>
        )
    }
}

export default PostList;