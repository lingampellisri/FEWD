import React, { Component } from "react";

class Form extends Component
{
    constructor()
    {
        super();
        this.state={
            username :" "
        }
    }

    onhandleChange=(event)=>
    {
        this.setState(
            {
                username:event.target.value
            }
        )
    }

    render()
    {
        return <form>
            <div>
                <label>User Name
                </label>
                   <input type="text"  value={this.state.username}  onChange={this.onhandleChange}  />

                   <h3>UserName is  {this.state.username}</h3>
            </div>
        </form>
    }
}

export default Form;