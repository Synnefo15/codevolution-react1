import React, { Component } from 'react';

class Counter extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
		};
	}

	increment() {
		// this.setState({ count: this.state.count + 1 }, () => {
		// 	console.log(`Callback value ${this.state.count}`);
		// }); // % pake setstate biar bisa dirender di Ui

		this.setState((prevState,props) => ({ count:prevState.count + 1})) // % Biar UI-nya pas kalo dirender sesuai increFive 
		
		console.log(this.state.count); // % nilainya nanti gk sama. makanya pake arr func kaya yg atas 
	}

	incrementFive(){
		this.increment()
		this.increment()
		this.increment()
		this.increment()
		this.increment()
	}

	render() {
		return (
			<div>
				<div>Counter - {this.state.count}</div>
				<button
					onClick={() => {
						this.incrementFive();
					}}
				>
					Increment
				</button>
			</div>
		);
	}
}

export default Counter;
