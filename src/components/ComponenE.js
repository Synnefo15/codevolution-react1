import React, { Component } from 'react';
import ComponentF from './ComponentF';
import UserContext from './userContext';

class ComponenE extends Component {

    static contextType = UserContext
    
	render() {
		return (
			<div>
                Component E {this.context}
                <ComponentF />
			</div>
		);
	}
}

// ComponenE.contextType = UserContext

export default ComponenE;
