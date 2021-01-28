/*
Program:- Making a Basic Calculator in React

Author:- Ammar Riyaz

Last Modified:- 2020 October
*/

//getting react components from react module
import React , { Component } from 'react';
//importing App.css file 
import './App.css';
//importing mathjs package 
import * as math from 'mathjs';
import { evaluate } from 'mathjs';


//making class App 
class App extends Component{
  //creating constructor
  constructor(){
    super();
    //setting values for result,numbers,operators and equation
    this.state={result:0, numbers :[0,1,2,3,4,5,6,7,8,9],
      operators:['+','-','*','/','=','C'],equation:'' 
    }


  }//closing constructor


  //making method when any number is clicked
  NumberClick= (numbers) =>{
    this.setState({equation:this.state.equation+ numbers})
  }


  //creating method for = button
  OperatorClick = (operators)=>{
    if(operators==='='){
      //by math.evaluate function CALCULATION is shown in equation when ever '=' is pressed
      this.setState({result:math.evaluate(this.state.equation)})
    }
  
    //making condition when Clear button is pressed
    else if(operators === 'C'){
      this.setState({result:0})//result will be zero
      this.setState({equation:''})//equation will be empty
    }
  
    //unless any of the digit pressed and operators will show
    else {this.setState({equation:this.state.equation+ operators})}

  }
  
  
  //This render section is describing how the UI should be looklike
  render(){
    return(
      <div className='App'>
        <h1>CALCULTOR IN REACT</h1>
        <div>
          {/*making a loop to create buttons for numbers*/}
          {this.state.numbers.map((numbers,index)=>{
            return(
              <button onClick={()=> this.NumberClick(numbers)} key={index} > {numbers}</button>

            )


          })
          }{/*Loop end*/}
          
          


        </div>

        <div>
          {/*creating another loop for creating buttons for operators*/}
          {this.state.operators.map((operators,index)=>{
            return(
              <button key = {index} onClick={()=>this.OperatorClick(operators)}>{operators}  </button>
            )
          })}{/*loop end*/}

        </div>
        <div className='Result'>
          {/*displaying normal text and setting equation and result*/}
          <p>

             EQUATION IS: {this.state.equation}
          </p>
          <p>
            ANSWER IS : {this.state.result}
          </p>
          
        </div>
      </div>


    )
  }

}
export default App;//exposing the App component to other modules
