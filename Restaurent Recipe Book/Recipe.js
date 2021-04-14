import React from 'react'
import Topic from "./Topic"
import ButtonCollection from "./ButtonCollection"
import AddRecipe from './AddRecipe'
import Menu from './Menu'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';



// import Admin from './Admin'
export default class Recipe extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            buttonname: "",
            Items: [
                // {
                // category: "Paneer",
                // ingrediants: "chilly, pepper",
                // itemName: "Paneer Chilly",
                // price: "190"
                // },
                // {
                // category: "Chicken",
                // ingrediants: "chicken,nonveg",
                // itemName: "Chicken Gravy",
                // price: "210"
                // }
            ],
            backStatus: false,
            showMenu: true,
            toAdd: false,
            username: "",
            password: "",
            adminStatus: false,
            adminVerify: false,
            NewCategory: []
        }
    }
    
    // handleAdmin = () => {
    //     if(this.state.username === "admin" && this.state.password === "admin"){
    //         this.setState({
    //             adminStatus: true
    //         })
    //     }
    // }
    handleClickAdd = (button) =>
    {
        this.setState({
            buttonname: button,
            showMenu: false,
            backStatus: true,
            adminVerify: true
        })
       
    }
    onClickAdd = (e, v) => {
        this.setState({
            Items : [...this.state.Items, e],
            showMenu : true,
            // this is responsible for concatenating the previous category with new category.
            NewCategory: [...this.state.NewCategory,v.newcategory]           
        })
        console.log("Recipe.js---New CATEGORY", this.state.NewCategory)
    }
    showMenu = () => {
        this.setState({
            showmenu : true
        })
    }
    showIngrediants = (e) => {
        
    }
    // handleclickAdd = (e) => {
    //     this.setState({
    //         adminStatus: e,
    //         // showMenu: false,
    //         // backStatus: true
    //     })
    // }
    handleBack = () =>{
        this.setState({
            showMenu : true
        })
    }
    render() {
        window.Recipestate= this.state
        
        return(
            <div className="Recipe">
                
                <Topic />
                {this.state.showMenu === true &&  <Menu Data= {this.state.Items} newCat={this.state.NewCategory} /> }
                                                        
                {/* <Menu data= {this.state.items} onIngrediants={this.showIngrediants}/> */}
                <ButtonCollection onClickAdd= {this.handleClickAdd}/>
                {/* {this.state.adminVerify === true && <Admin adminLogin={this.handleclickAdd}/>} */}
                {this.state.buttonname === "add" && this.state.showMenu === false  && <div> <AddRecipe onClickAdd= {this.onClickAdd} handleBack = {this.handleBack}/> </div>}
                {this.showIngrediants()}
                
                {/* {this.state.backStatus === true &&  <div> <button onClick={this.showMenu}> Back </button> </div>} */}
            </div>
        )
    }
}
//this.state.buttonname === "add" && this.state.showMenu === false && <div> 