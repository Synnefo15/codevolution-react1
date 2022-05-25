import React, { Component } from 'react';

class Form extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: '',
			comments: '',
			kelamin: '',
		};
	}

	handleUsernameChange = (event) => {
		this.setState({
			username: event.target.value,
		});
	};

	handleCommentChange = (event) => {
		this.setState({
			comments: event.target.value,
		});
	};

	handleKelaminChange = (event) => {
		this.setState({
			kelamin: event.target.value,
		});
	};

	handleSubmit = (event) => {
		alert(`${this.state.username} ${this.state.comments}`);
		event.preventDefault();
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div>
					<label>Nama</label> <br />
					<input
						type="text"
						placeholder="isikan nama anda"
						value={this.state.username}
						onChange={this.handleUsernameChange}
					/>
				</div>
				<div>
					<label>Comments</label> <br />
					<textarea value={this.state.comments} onChange={this.handleCommentChange}></textarea>
				</div>
				<div>
					<label onChange={this.handleKelaminChange}>Kelamin</label>
					<select>
						<option value="pria">Pria</option>
						<option value="wanita">Wanita</option>
						<option value="banci">Banci</option>
					</select>
				</div>
				<button type="submit">submit</button>
			</form>
		);
	}
}

export default Form;
