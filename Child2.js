
import React, { Component } from "react";
import SubChild from './SubChild'

class Child2 extends Component {



state = { data : this.props.dataFromParent } 
 render() {
         
         return (
             <div>
                 Data from parent is:{this.props.dataFromParent}
                <SubChild dataFromParent = {this.state.data} />
   
             </div>
         );
     }
 }



export default Child2;