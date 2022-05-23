import React from 'react';
import Person from './Person';

function NameList() {
	const names = ['Rafi', 'Cahya', 'Putra', 'Muhammad'];
	const nameList = names.map((name) => <h2>{name}</h2>);
    const people = [
			{ id: 1, name: 'rafi', age: 21 },
			{ id: 2, name: 'cahya', age: 31 },
			{ id: 3, name: 'putra', age: 41 },
		];
	const peopleList = people.map((person) => (
        <Person person={person} />
    ));
    
	
	return (
		<div>
			<div>name list :{nameList}</div>
			<div>person list : {peopleList}</div>
		</div>
	);
}

export default NameList;
