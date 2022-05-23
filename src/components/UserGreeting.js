import React, { Component } from 'react';

class UserGreeting extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoggedin: false,
		};
	}

	render() {
		// % Opsi 1
		// if (this.state.isLoggedin) {
		//     return(
		//         <div>Selamat datang admin</div>
		//     )
		// }else{
		//     return(
		//         <div>Selamat data tamu</div>
		//     )
		// }

		// % Opsi 2. Lebih baik dari 1
		// let message
		// if (this.state.isLoggedin) {
		//     message= <div>Halo Admin Rafi</div>
		// } else {
		//     message = <div>Halo Tamu</div>
		// }
		// return(
		//     <div>
		//         {message}
		//     </div>
		// )

		// % Opsi 3. Ternary
		return this.state.isLoggedin ? <div>Halo Admin Rafi</div> : <div>Halo tamu</div>;

		// return (
		// <div>
		//     <div>Selamat datang tamu</div>
		//     <div>Selamat datang rafi</div>
		// </div>
		// );
	}
}

export default UserGreeting;
