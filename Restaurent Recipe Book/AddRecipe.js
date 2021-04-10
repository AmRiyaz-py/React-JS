import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

export default class AddRecipe extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            itemName: "",
            ingrediants: "",
            button: "",
            price: "",
            category: "",
            newcategory: "",
            categoryList: [""],
            displayNewCategory: false,
            dsiplayAdmin: false
        }
    }
    handleNewCategory = (e) => {
        this.setState({ newcategory: e.target.value })
    }
    addNewCategory = () => {
        this.setState({ categoryList: [...this.state.categoryList, this.state.newcategory] })
        // console.log('ADDING',this.state.categoryList)

    }


    handleItem = (e) => {
        this.setState({
            itemName: e.target.value
        })
    }
    handleIngrediants = (e) => {
        this.setState({
            ingrediants: e.target.value
        })
    }
    handlePrice = (e) => {
        this.setState({
            price: e.target.value
        })
    }
    handleCategory = (e) => {
        this.setState({
            category: e.target.value
        })
    }
    handleSave = () => {

        if (this.state.itemName !== "" && this.state.price !== 0 && this.state.ingrediants !== "" && this.state.category !== "") {
            this.setState({
                itemName: "",
                ingrediants: "",

            })
            this.props.onClickAdd({
                itemName: this.state.itemName,
                ingrediants: this.state.ingrediants,
                price: this.state.price,
                category: this.state.category
            }, { categoryList: this.state.categoryList })
        }
        else {
            alert("Enter Full Information")
        }


    }

    handleNewCategoryStatus = () => {
        this.setState({
            displayNewCategory: true
        })
    }



    render() {
        const Category = [this.state.categoryList.map((single) =>
            <option value={single}> {single} </option>
        )]

        return (



            <div className='AddRecipe'>
                    <h4 className="secondTitle">Add Recipe Page</h4>

                <div class="row">
                    <div class="col-md-2">
                        <div className="allLabels">
                            Category:
                        </div>
                    </div>

                    <div class="col-md-6">
                        <select value={this.state.value} onChange={this.handleCategory} className="RecipeDropdown">
                            {Category}
                        </select>
                        <button className="addCat" onClick={this.handleNewCategoryStatus} >+</button>
                    </div>
                </div>



                {/* ADDING CATEGORY */}

                {
                    this.state.displayNewCategory === true &&
                    <div>
                                <input type='text' className="addInputCat" value={this.state.newcategory} onChange={this.handleNewCategory}></input>
                                <button onClick={this.addNewCategory}>ADD</button>
                                    <div className="alertAdd" role="alert">
                                        <strong>Add category,</strong> Press ADD 
                                    </div>
                    </div>
                }


                <br></br>
                <div class="row">
                    <div class="col-md-2">
                        <div className="allLabels">
                            Food Name:
                        </div>
                    </div>
                    <div class="col-md-6">
                        <input type="text" className="" placeholder="Enter FoodName Here" value={this.state.itemName} onChange={this.handleItem} />
                    </div>
                </div>

                <br></br>
                <div class="row">
                    <div class="col-md-2">
                        <div className="allLabels">
                            Price:
                        </div>
                    </div>

                    <div class="col-md-6">
                        <input type="text" className="" placeholder="Enter Price Here" value={this.state.price} onChange={this.handlePrice} />
                    </div>
                </div>


                <br></br>
                <div class="row">
                    <div class="col-md-2">
                        <div className="allLabels">
                            Ingrediants:
                        </div>
                    </div>

                    <div class="col-md-6">
                        <input type="text" className="" placeholder="Enter Ingredients Here" value={this.state.ingrediants} onChange={this.handleIngrediants} />                    </div>
                </div>


                <br></br>
                <div class="row">
                    <div class="col-md-2">
                    </div>
                    <div class="col-md-6">
                        <div className="row" >
                            <div class="col-md-2">
                                <button onClick={() => this.props.handleBack()} className=""> MENU </button>
                            </div>


                            <div class="col-md-6">
                                <button className="saveButton" onClick={this.handleSave} > SAVE </button>
                            </div>
                        </div>

                    </div>



                </div>

            </div >
        )
    }
}
