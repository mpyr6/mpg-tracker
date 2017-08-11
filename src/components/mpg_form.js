import React from 'react';

class MPGForm extends React.Component {
	render() {
		return (
			<form>
				<label>Miles</label>
					<input type="text" />
					<br />
				<label>Gallons</label>
					<input type="text" />
					<br />
				<label>Price</label>
					<input type="text" />
					<br />
				<label>Gas Type</label>
				  <input type="radio" name="type" value="87" checked /> 87
				  <input type="radio" name="type" value="89" /> 89
				  <input type="radio" name="type" value="91" /> 91 
				  <br />
				  <br />
				<button>Submit</button>
			</form>
		)
	}
};

export default MPGForm;