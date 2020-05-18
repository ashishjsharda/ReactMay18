import React, { Component } from 'react';
class Car extends Component {
    state = {  }
    render() { 
        return (<div>
            <h1> This is an example of using Props</h1>
            <h1>{this.props.brand}</h1>
            <h1>Color is {this.props.color}</h1>
        </div>  );
    }
}
 
export default Car;