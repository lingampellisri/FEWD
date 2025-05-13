import React, {Component} from "react";
import axios from "axios";
class PostData extends Component{
    constructor()
    {
        super();

        this.state={
            userId:'',
            title:'',
            body:''
        }
    }

    onHandaleChange=(e)=>
    {
            this.setState({[e.target.name]:e.target.value});
    }
    submitHandler =(e)=>
    {
        e.preventDefault();
        console.log(this.state);
        axios.post("https://jsonplaceholder.typicode.com/posts",this.state)
        .then(response=>
        {
            console.log(response);
        }
        )
        .catch(error=>
        {
            console.log(error);
        })
        
    }


    render()
    {
        const{ userId,title,body}=this.state;
        return ( <div>
                <form onSubmit={this.submitHandler} >
                    <input name="userId" type="text" value={userId} onChange={this.onHandaleChange} />

                 <input name="title" type="text" value={title} onChange={this.onHandaleChange} />

                  <input name="body" type="text" value={body}  onChange={this.onHandaleChange}/>

                  <button type="submit" >Submit</button>
                </form>
            </div>
        )
    }
}

export default PostData;