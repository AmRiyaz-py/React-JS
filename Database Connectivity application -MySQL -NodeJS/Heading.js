import React from 'react'
// import dbb from './public/dbb.JPG'

class Heading extends React.Component {
    constructor() {
        super()
    }


    render() {

        return (

            <div className='Heading'>
                <div className='row'>
                    <div className='col-md-11 col-sm-11'>
                        SQL Connectivity Application
                    </div>
                    <div className='col-md-1 col-sm-1'>
                        <img className='img' src='data.png' ></img>
                    </div>
                </div>
            </div>
        )
    }
}
export default Heading