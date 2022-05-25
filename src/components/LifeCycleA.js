import React, { Component } from 'react';
import LifeCycB from './LifeCycB';

class LifeCycleA extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: 'rafi',
		};
        console.log(`Ini construk`);
	}

    static getDerivedStateFromProps(props, state){
        console.log(`ini get derived`);
        return null
        
    }
    
    componentDidMount(){
        console.log(`componenDidMount`);
    } // % Dieksekusi terkahir 
    
	render() {
        console.log(`ini render`);
		return (
        <div>
            LifeCycleA
            {/* <LifeCycB /> */}
        </div>);
	}
}

export default LifeCycleA;
