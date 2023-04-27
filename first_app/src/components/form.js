
import React,{Component} from 'react'

class Form extends Component{
    constructor(props){
        super(props)
        this.state={
            username:"",
            comments:"",
            topic:"react",
        }
        this.userNameChange=this.userNameChange.bind(this)
    }

    userNameChange=(event)=>{
        this.setState({
            username:event.target.value
        })
    }
    commentChange=(event)=>{
        this.setState({
            comments:event.target.value
        })
    }
    topicChange=(event)=>{
        this.setState({
            topic:event.target.value
        })
    }
    submit=(event)=>{
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }

    render(){
        return(
            <form onSubmit={this.submit}>
                <div>
                    <label>Username</label>
                    <input type="text" value={this.state.username} onChange={this.userNameChange}/>
                </div>
                <div>
                    <label>Comments</label>
                    <textarea value={this.state.comments} onChange={this.commentChange}></textarea>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={this.state.topic} onChange={this.topicChange}>
                    <option value="react">React</option>
                    <option value="angular">Angular</option>
                    <option value="vue">Vue</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form