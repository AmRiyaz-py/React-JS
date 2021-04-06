import React from 'react'
import './App.css'

class SideButtonLink extends React.Component{
    constructor(props){
        
        super(props)
        this.state={
            home : "",
            error : "",
            homeWhiteCheck : false,
            errorWhiteCheck : false
        }
        
    }
    homeWhiteCheckFun = () =>{
        this.props.Home(this.state.home)
        this.setState({homeWhiteCheck : !this.state.homeWhiteCheck})
        this.setState({errorWhiteCheck : false})
    }
    errorWhiteCheckFun =() =>{
        this.props.Error(this.state.error)
        this.setState({errorWhiteCheck : !this.state.errorWhiteCheck})
        this.setState({homeWhiteCheck : false})
    }
    handleTabImg = ()=>{
        alert('your application is reloaded')
        window.location.reload();
    }
    render(){
        return(
            
            <div className='mainBack2'>
               
                <img className='img2' src='tab.png' onClick={()=>this.handleTabImg()} ></img>

                <div className='showme'>imagggee</div>
                
                
                
                {/* curve upper home button */}
                {/* bottom */}
                <div className= {this.state.homeWhiteCheck ? ' bottom3 backWhite' : 'bottom3 backBlue' } ></div>
                {/* top */}
                <div className={this.state.homeWhiteCheck ? '   bottomRadius3 backBlue' : 'top3 backBlue'} ></div>
                <div >
                <button type='submit' onClick={()=>this.homeWhiteCheckFun()} className= {this.state.homeWhiteCheck ? 'homeWhite' : 'btnHome'} ><i className="fa fa-home"></i></button>
                </div>
               

                {/* home button bottom curve */}
                {/* bottom */}
                <div className= {this.state.homeWhiteCheck ? ' bottom backWhite' : 'bottom backWhite' } ></div>
                {/* top */}
                <div className={this.state.homeWhiteCheck ? '   topRadius  backBlue' : this.state.errorWhiteCheck ? 'bottomRadius backBlue' : 'top backBlue'} ></div>
                
                
                <div>
                <button type='submit' onClick={()=>this.errorWhiteCheckFun()} className={this.state.errorWhiteCheck ? 'errorWhite' : 'btnError'} ><i className="fa fa-bars"></i></button>
                </div>

                {/* error button buttom curve */}
                {/* bottom */}
                <div className={this.state.errorWhiteCheck ? 'bottom2 backWhite'  : 'bottom2 backBlue'}></div>
                {/* top */}
                <div  className={this.state.errorWhiteCheck ? 'topRadius2 backBlue ' : 'top2 backBlue'}></div>
            </div>
                
        )
    }
}
export default SideButtonLink;   