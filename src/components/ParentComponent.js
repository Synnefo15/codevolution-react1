import React, { Component } from 'react';
import ChildComponent from './ChildComponent';


class ParentComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			parentName: 'Parent',
		};

        this.greetParent=this.greetParent.bind(this)
	}

    greetParent(childName){
        alert(`Hallo ${this.state.parentName} from ${childName}`)
    }

	render() {
		return (
        <div>ParentComponent
            <ChildComponent greetHandler={this.greetParent}/>
        </div>);
	}
}

export default ParentComponent;
