import React, { Component } from 'react';

class LifeCycB extends Component {
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

	componentDidMount() {
		console.log(`componenDidMount`);
	}

	render() {
		console.log(`ini render`);
		return <div>LifeCycB</div>;
	}
}

export default LifeCycB;
