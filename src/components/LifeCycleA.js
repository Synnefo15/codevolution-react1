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

	static getDerivedStateFromProps(props, state) {
		console.log(`ini get derived`);
		return null;
	}

	shouldComponentUpdate() {
		console.log(`ini ShouldComponent`);
		return true;
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log(`ini snapshot before`);
		return null;
	}

	componentDidUpdate() {
		console.log(`component did update`);
		return null;
	}

	componentDidMount() {
		console.log(`componenDidMount`);
	} // % Dieksekusi terkahir

	changeState = () => {
		this.setState({
			name: 'codevolution ',
		});
	};

    

	render() {
		console.log(`ini render`);
		return (
			<div>
				LifeCycleA
				<button onClick={this.changeState}>Change State</button>
				<LifeCycB />
			</div>
		);
	}
}

export default LifeCycleA;
