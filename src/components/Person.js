import React from 'react';

function Person({ person }) {
	return (
		<div>
			<h2>
				namaku {person.name}, berumur {person.age} tahun
			</h2>
		</div>
	);
}

export default Person;
