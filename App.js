import React, { Component } from 'react'
import Child2 from './Child2'

class App extends Component {


state = { data : "Hello World" } 


render() {
        
        return (
            <div>
                <Child2 dataFromParent = {this.state.data} />
            </div>
        );    }
}



export default App;