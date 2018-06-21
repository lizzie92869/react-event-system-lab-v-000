import React from 'react';

class Keypad extends React.Component {

	askPassword = () => {
		console.log('Entering password...');
	}

	render(){
		return(
			<div>
				<input type='password' onKeyUp={this.askPassword}/>Password
			</div>

		)
	}
}

export default Keypad;