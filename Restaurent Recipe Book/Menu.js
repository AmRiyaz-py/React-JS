import React from 'react'
import './App.css'
export default class Menu extends React.Component {

    // abc = (e) => {
    //     console.log("menu.js", e)
    //     this.setState({
    //         menu : [...this.state.menu, e]
    //     })
    // }
    // showIngrediants = (e) => {
    //     //console.log("Ingrediants", e)
    //     this.props.onIngrediants({e})


    // const list1 = [this.state.menu.map((a) => 
    //     <div> <li>  Ingrediants:  {a.ingrediants}</li> </div>   
    //     )]
    // return (
    //     <div>
    //         {list1}
    //     </div>
    // )

    //}
    render() {
        //console.log("Menu.js", this.props)
        var a = {}
        this.props.newCat.map((category) => {
            var result = []
            //console.log("category", category)
            this.props.Data.map((item) => {
                if (category === item.category) {
                    result = [...result, item]
                }
                a[category] = result
            })
        })
        console.log("a", a)
        //console.log("Result", result)



        return (
            <div>
                <div  className="menuTitle" ><h4>Menu</h4></div>
                {Object.keys(a).map((key, index) => {
                    return (
                        <div>
                            <div style={{ fontSize: "25px" }} className="CatList" >
                                <u> {key}</u> </div>
                            <div>
                                {a[key].map((value, index1) => {
                                    console.log('in map 2 - value', value)
                                    return (

                                        <div className="list1" >        
                                            <div class="row">
                                                <div class="col-md-9">
                                                    <div className="recipeName">
                                                <b>{value.itemName} </b>
                                                    </div>
                                                </div>
                                                <div class="col-md-2">
                                                Rs. <b>{value.price}</b>  <br></br>
                                                </div>
                                                <div class='col-md-11'>
                                                    <div className="ingredientsName">
                                                {value.ingrediants}
                                                </div>
                                                </div>
                                            </div>
                                        
                                        
                                         
                                         
                                       
                                        </div> 
                                    )
                                })
                            }</div>
                        </div>
                    );
                })}
            </div>
        )
    }
}




// category= {Chicken, Mutton}
// List= {{itemaname:Chicken, price: 500, ingrediants:fsfsf, category:Chicken}, {}, {}}


// Const a={Chicken{
//     {itemaname:Chicken, price: 500, ingrediants:fsfsf, category:Chicken},
//     {itemaname:Chicken, price: 500, ingrediants:fsfsf, category:Chicken},
// },
// Mutton{
    // {itemaname:Chicken, price: 500, ingrediants:fsfsf, category:Mutton},
//     {itemaname:Chicken, price: 500, ingrediants:fsfsf, category:Mutton},
//}
// []
// []
// []
// }