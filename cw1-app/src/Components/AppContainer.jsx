import React, { Component } from "react";
import UserInformation from './UserInformation.jsx'

class AppContainer extends Component{
    constructor(props){
        super(props);
        this.state={}
    }
    render(){
// pull in test data
        const rawData=require('../rawData.js')
// sanity
        console.log(` ${rawData[0].email}`);
        return(
            <div> 
            <h1>User Collection App</h1>
            {rawData.map((post)=>{
                return(
             <AppContainer key={post}  postData={post}/>
             
                )
            })
}
                
            </div>
        )
    }
}
export default AppContainer