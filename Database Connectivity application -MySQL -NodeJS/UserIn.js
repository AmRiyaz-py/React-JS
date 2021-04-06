
import React from 'react'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';

class UserIn extends React.Component {
    constructor() {
        super()
        this.state = {
            textAreaInput: ""
        }
    }
    fetchTextArea = (e) => {
        this.setState({ textAreaInput: e.target.value })
        //console.log('checking e',this.state.textAreaInput)

    }
    render() {

        return (
            <div className='userIn'>


                <p className="labelQuery">Query :-</p>
                {/* cols="145" rows="6" */}
                <textarea className='textArea' value={this.state.textAreaInput} onChange={this.fetchTextArea} placeholder="Input Your SQL Query Here"  ></textarea>
                <br></br>
                <div className='buttonclass'>
                <button type='submit' className="button" onClick={() => this.props.ammar(this.state.textAreaInput)} >Fire Query</button>
            </div>
            </div>

        )
    }
}
export default UserIn