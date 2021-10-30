
import React, { Component } from "react";

class SubChild extends Component {




 render() {
         
         return (
             <div>
                 Data (subchild) from parent is:{this.props.dataFromParent}

             </div>
         );
     }
 }



export default SubChild;