

import React, {Component} from 'react'

class UserInformation extends Component{
    constructor(props){
        super(props);
        this.state={}
    }
    render(){
        return(
<div>
        <p>ID:{this.props.postData.id}</p>
        <p>username:{this.props.postData.id}</p>
        <p>email:{this.props.postData.email}</p>
        <p>Address:{this.props.postData.Address}</p>
        
        <hr/>

</div>
        )
    }
}
export default UserInformation