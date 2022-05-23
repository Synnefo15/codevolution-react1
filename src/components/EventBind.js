import React, { Component } from 'react';

class EventBind extends Component {
	constructor(props) {
		super(props);

		this.state = {
			message: 'Hello ini pesan dari event',
		};

		// this.clickHandler = this.clickHandler.bind(this) // % yg umum dipakai
	}

	// clickHandler(){
	//     this.setState({
	//         message:'Good bye'
	//     })

	//     console.log(this);
	// }

	clickHandler = () => { this.setState({
		message:"da dah"
	}) }

	render() {
		return (
			<div>
				<div>{this.state.message}</div>
				{/* <button onClick={this.clickHandler.bind(this)}>Click</button> // % ini opsi 1  */}
				{/* <button onClick={() => { this.clickHandler() }}>Click</button> /* ini opsi 2 */}
				{<button onClick={this.clickHandler}>Tekan</button> /* opsi 3 */}
			</div>
		);
	}
}

export default EventBind;
