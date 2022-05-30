import React from 'react';

function Hero({ heroname }) {
	if (heroname === 'Joker') {
        throw new Error('not hero')
	}
	return <div>{heroname}</div>;
}

export default Hero;
