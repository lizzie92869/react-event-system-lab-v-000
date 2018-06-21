import React from 'react';

class EyesOnMe extends React.Component {

	printGood = () => {
		console.log('Good!');
	}

	printEyes = () => {
		console.log('Hey! Eyes on me!');
	}

	render(){
		return(
			<div>
				<button onFocus={this.printGood} onBlur={this.printEyes}/> hello
			</div>

		)
	}
}

export default EyesOnMe;