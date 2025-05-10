import React, { Component } from "react";

class Form extends Component
{
    constructor()
    {
        super();
        this.state={
            username :" ",
            Age: 0,
            comments :" ",
            topics :" "
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
      onhandleChangeAge=(event)=>
    {
        this.setState(
            {
                Age:event.target.value
            }
        )
    }

      onhandleChangeText=(event)=>
    {
        this.setState(
            {
                comments:event.target.value
            }
        )
    }


         onhandleChangeTopic=(event)=>
        {
        this.setState(
            {
                topics:event.target.value
            }
        )
         }


         onFormSubmit=()=>
         {
            alert(`
                usename is : ${this.state.username}
                Age is : ${this.state.Age}
                Comments is : ${this.state.comments}
                Topics is : ${this.state.topics}
               Thank you for the Reponse`)
         }



    render()
    {
        return <form onSubmit={this.onFormSubmit}>
            <div>
                <label>User Name
                </label>
                   <input type="text"  value={this.state.username}  onChange={this.onhandleChange}  />
                   <br/>

                   <label>Age</label>

                    <input type="text"  value={this.state.Age}  onChange={this.onhandleChangeAge}  />
                        <br/>

                    <label>comments</label>

                    <textarea value={this.state.comments} onChange={this.onhandleChangeText} ></textarea>
                        <br/>
                     <label>Course Topics</label>


                    <select onChange={this.onhandleChangeTopic}>
                         <option value={"select any Option"}  >Select</option>
                        <option value="react">React</option>
                         <option value="Angular">Angular</option>
                          <option value="VUE.js">VUE.js </option>
                    </select>

                    <br/>
                    <button  type="submit">submit</button>




                   <h3>UserName is  {this.state.username}</h3>
                   <h3>Age is  {this.state.Age}</h3>
                   <h3>Comments is  {this.state.comments}</h3>
                   <h3>Topics is  {this.state.topics}</h3>
            </div>
        </form>
    }
}

export default Form;