import React from 'react';

// &---- Functional ----
// function Greet() {
//     return <h1>Hallo Fungsi Rafi</h1>
// }

// &---- Const func ----
const Greet = (props) => {
    return (
			<div>
				<h1>
					Hallo Class {props.name} age {props.age}
				</h1>
                {props.children}
			</div>
		);
}

export default Greet