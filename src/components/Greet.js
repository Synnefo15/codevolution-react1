import React from 'react';

// &---- Functional ----
// function Greet() {
//     return <h1>Hallo Fungsi Rafi</h1>
// }

// &---- Const func ----
const Greet = ({name,age}) => {
    return (
			<div>
				<h1>
					Hallo Class {name} age {age}
				</h1>
			</div>
		);
}

export default Greet