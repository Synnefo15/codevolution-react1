import React, { Component } from 'react';

class Message extends Component{
    constructor() {
        super()
        this.state={
            message : 'Selamat Datang State'
        }
    }

    changeMessage(){
        this.setState({
            message : 'Ini dari fungsi change message'
        })
    }
    
    render(){
        return (
					<div>
						<h1>{this.state.message}</h1>
                        <button onClick={() => {
                            this.changeMessage()
                        }}>Langganan</button>
					</div>
				);
    }
}

export default Message