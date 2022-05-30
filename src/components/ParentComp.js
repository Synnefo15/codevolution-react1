import React, { Component, PureComponent } from 'react';
import MemoComp from './MemoComp';
import PureComp from './PureComp';
import RegComp from './RegComp';

class ParentComp extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			name: 'Rafi',
		};
	}

	componentDidMount() {
		setInterval(() => {
			this.setState({
				name: 'rafi didmount',
			});
		}, 2000);
	}

	render() {
        console.log(`===ini parent===`);
		return (
			<div>
				<h3>ParentComp</h3>
				{/* <RegComp name={this.state.name} />
                <PureComp name={this.state.name}/> */}
				<MemoComp name={this.state.name}/>
			</div>
		);
	}
}

export default ParentComp;
