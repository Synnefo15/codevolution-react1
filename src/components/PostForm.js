import React, { Component } from 'react';

class PostForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			nama: '',
			usia: '',
		};
	}

    changeHandler = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state);
    }
    
	render() {
        const{nama,usia} = this.state
		return (
			<React.Fragment>
				<form onSubmit={this.submitHandler}>
					<div>
						<label>Nama</label>
						<input type="text" name="nama" value={nama} onChange={this.changeHandler} />
					</div>
					<div>
						<label>Usia</label>
						<input type="number" name="usia" value={usia} onChange={this.changeHandler} />
					</div>
                    <button type='submit'>Simpan</button>
				</form>
			</React.Fragment>
		);
	}
}

export default PostForm;
