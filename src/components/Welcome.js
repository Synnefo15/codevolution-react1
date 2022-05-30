import React,{Component} from 'react';



class Welcome extends Component{
    render(){ // % Tanpa param props harus pake this 
        const{name,age}=this.props // % destrukturing 
        // const {state1, state2} = this.state
        return (
            <h3>Welcome Visitor {name} umur {age}</h3>
        )
    }

}

export default Welcome