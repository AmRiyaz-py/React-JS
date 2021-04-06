
import React from 'react'
import Heading from './Heading';
import UserIn from './UserIn';
import "./App.css"
import MaterialTable from 'material-table'
import SideButtonLink from './SideButtonLink';
// import { makeStyles } from '@material-ui/core';
// import { createMuiTheme }  from '@material-ui/core/styles'
// import { ThemeProvider } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.min.css';


const axios = require("axios");
class Display extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            queryData: [],
            textAreaOutput: "",
            validation: "",
            check: false,
            result: [],
            status: "status",
            homeStatus: false,
            errorStatus: false,
            homeClick: false,
            errorClick: false,
            errorList: ["Error will print here as Demo"]


        };
    }

    handleClick = (r) => {


        //a = 'HELLO JERRY MAN'
        // b = a.split(" ")  
        // c = b[0].toLowerCase() 
        // b.shift() //CAPITAL FIRST LETTER IS HERE BY POPPING
        // b.unshift(c).toString()//
        // console.log('inputQuery',b.join(" "))//by join all the ele of an arr.
        //chekcing for first space in the query for checking select and lowercase it

        // const inputQuery = r.split(" ")  //MAKING ARRAY DIFF SPACE
        // const lowerQuery = inputQuery[0].toLowerCase() // SELECT IS SMALL HERE

        // inputQuery.shift() //CAPITAL FIRST LETTER IS HERE BY POPPING

        // //  console.log('line38', inputQuery)

        // inputQuery.unshift(lowerQuery)
        // // console.log('line42', inputQuery)

        // var temp = inputQuery.join(" ")

        // console.log('new Array', inputQuery,temp)




        //will check about empty textarea
        // if (r !== "") {
        if (r !== "" && r.toLowerCase().includes('select', 'update', 'delete')) {

            // console.log('before')
            this.setState({
                textAreaOutput: r,
                validation: "",

                // check: r.includes("select", "Select", "SELECT")//CHECKING FOR KEYWORD
            })

            this.handleValid(r)
        }//ifclose

        else {
            this.setState({
                validation: "No Query Found",
                check: false
            })
        }

    }//handleclickCLose

    //for validation
    handleValid = (QueryArg) => {
        //changing this to show the error msg in the validation part
        axios.post('/ammar', { queryy: QueryArg }).then(res => {

            if (res.data.success === true && res.data.result.length !== 0) {
                // console.log('IF con', res.data.result)
                this.setState({
                    queryData: res.data.result,
                    validation: "Query Executed.",

                    check: true,
                    result: Object.keys(res.data.result[0])
                })
            }
            else if (res.data.success === true && res.data.result.length === 0) {
                // console.log('line 61')
                this.setState({
                    validation: "No Data has been Found", check: false

                })

            }
            else if (res.data.success === false && res.data.error.length !== 0) {
                // console.log('line 66')
                this.setState({
                    validation: res.data.error,
                    check: false,
                    errorList: [...this.state.errorList, res.data.error]


                })

            }

            else {
                this.setState({
                    validation: "WRONG QUERY",
                    errorList: [...this.state.errorList, res.data.error]
                })
            }
        })

        // console.log('after')//axiosClose

    }
    handleHome = () => {

        this.setState({
            homeStatus: !this.state.homeStatus,
            homeClick: !this.state.homeClick,
            errorClick: false,
            queryStatus: false,
            errorStatus: false,
            tableStatus: false,
        })

    }
    handleError = () => {
        this.setState({ status: "Error is working" })
        this.setState({
            errorStatus: !this.state.errorStatus,
            errorClick: !this.state.errorClick,
            homeClick: false,
            homeStatus: false,
            queryStatus: false,
            tableStatus: false
        })
    }

    render() {
        // console.log('line150',typeof(Object.keys(this.state.queryData)) )
        // console.log(typeof(3))
        // console.log('inside render for queryData', this.state.queryData)
        // console.log('homeClick',this.state.homeClick)
        // console.log('errorClick',this.state.errorClick)
        // console.log('errlist',this.state.errorList)

        var column = []
        this.state.result.map((col) => {

            var a = {}
            a["title"] = col
            a["field"] = col
            console.log('col name', col, typeof (this.state.queryData[0][col]))

            // a.cellStyle = {
            //     textAlign: "left"
            // }
            if (typeof (this.state.queryData[0][col]) === 'number') {
                a.cellStyle = {
                    textAlign: "right", paddingRight: '46px'
                }
                console.log('line167')
            }

            column.push(a)
        })
        // console.log('checking col',column)
        //mapping of table ends here


        //   classes = useStyles();
        // const theme = createMuiTheme({
        //     typography: {
        //       fontFamily: '-webkit-body',fontSize: 15,
        //       },root : { borderTopWidth: 1, borderColor: 'red',borderStyle: 'solid'} 
        //                             });
        //theme is ending here

        // console.log('checking result', this.state.result)
        // console.log('inside render',this.state)

        return (
            
           
            <div>
            <div className='mainBack1'>
                {/* white BG */}

                <div className='row'>
                    <div className='col-md-1 col-sm-2'>
                        <SideButtonLink
                            Home={this.handleHome}
                            Error={this.handleError} />
                    </div>
                {/* </div> */}


                {/* CR for Home Button */}
                {
                    this.state.homeStatus ?

                        (
                            <div >

                                <div className='row'>
                                    <div className='col-md-11 col-sm-11'>
                                        <Heading />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-11'>
                                        <UserIn ammar={this.handleClick} />
                                    </div>
                                </div>
                                <div>
                                    <p className="labelOutput">Output :-</p>
                                    <br></br>

                                    <div className='row'>
                                        <div className='col-md-10 col-sm-8'>
                                            <div className='table'>

                                                

                                                <MaterialTable columns={column}
                                                    data={this.state.queryData}
                                                    title=""
                                                    options={{
                                                        search: false,
                                                        // paging : false, showTitle : false 

                                                        exportButton: true,
                                                        toolbar: false
                                                    }}


                                               
                                                />

                                                
                                            </div>

                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                        :
                        (
                            <div>

                            </div>
                        )
                }
                {/* CR end */}
                {/* CR for Error Button */}
                {
                    this.state.errorStatus ?
                        (

                            <div >
                                <div className='row'>
                                    <div className='col-md-11' >
                                        <Heading />
                                    </div>
                                </div>

                                <br></br>
                                <div className='msgLabel'>
                                    {/* <div className='labelQuery'> */}
                                    Error Message :-<br></br>
                                </div>
                                <br></br>
                                <div className='row'>
                                    <div className='col-md-11'>
                                        <div className='errHistory'>
                                            {this.state.errorList.map((a) => {
                                                return (
                                                    <div className='query' >

                                                        <li >
                                                            {a}
                                                        </li>
                                                    </div>
                                                )
                                            }
                                            )}
                                        </div>
                                    </div>
                                </div>
                                
                            </div>

                        )
                        :
                        (
                            <div>

                            </div>
                        )
                }
                {/* CR end */}

            </div>
            </div>

            

            </div>
            // </div>
        )
    }
}
export default Display;

