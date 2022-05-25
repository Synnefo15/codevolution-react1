import React from 'react';

function Column() {
	const items = [];
	return (
		<React.Fragment>
			{
            items.map((item) => (
				<React.Fragment key={item.id}>
                    <h1>Title</h1>
                    <p></p>
                </React.Fragment>
			))
            }
			<td>Name</td>
			<td>Rafi</td>
		</React.Fragment>
	);
}

// % frament biar gk usa pake div

export default Column;
