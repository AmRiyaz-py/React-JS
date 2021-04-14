import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';


export default class ButtonCollection extends React.Component {
    constructor(){
        super()
        
    }
    render() {
        return(
            <div >
                <button type="button" className="adminButton" name= "add" onClick= {(e) => this.props.onClickAdd(e.target.name)} >ADMIN</button>
                {/* <button name= "add" onClick= {(e) => this.props.onClickAdd(e.target.name)}> Admin </button> */}
                {/* <button name= "view" onClick= {(e) => this.props.onClickView(e.target.name)}> View </button> */}
            </div>
        )
    }
}