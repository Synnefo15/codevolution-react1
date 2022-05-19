import React,{Component} from 'react';

class Welcome extends Component{
    render(){ // % Tanpa param props harus pake this 
        return (
            <h3>Welcome Component {this.props.name} umur {this.props.age}</h3>
        )
    }

}

export default Welcome