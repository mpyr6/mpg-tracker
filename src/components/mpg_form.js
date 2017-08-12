import React from 'react';
import axios from 'axios';

//this reactjs file will define a single class, which is the form that handles data entry. Files may contain more than one class, but for the sake of simplicity, I'll add future components to our application by creating other files

class MPGForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			miles:null, 
			gallons:null, 
			price:null
		}

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	//handleInputChange is called on every change to the inputs (every key-click), this updates the application state to whatever is in the box.
	handleInputChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState({
		  [name]: value
		});
	 }

	//takes the current state and posts it to the /db route.
	handleSubmit(event) {
		event.preventDefault();
		const dataSet=[{
			distance: this.state.miles,
			galAmount: this.state.gallons,
			gasPrice: this.state.price
		}]
		axios.post("/db", dataSet)
	}

	//render function dictates what is injected into the index.html page
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div className="field">
					<label className="label">Miles</label>
						<input 	className="input"
								name="miles"
								type="text" 
								onChange={this.handleInputChange}/>
				</div>
				<div className="field">
					<label className="label">Gallons</label>
					<input 	className="input"
							name="gallons"
							type="text" 
							onChange={this.handleInputChange}/>
				</div>
				<div className="field">
					<label className="label">Price per Gallon</label>
					<input 	className="input"
							name="price"
							type="text" 
							onChange={this.handleInputChange}/>
				</div>
				<div className="field">
					<hr />
					<input className="button is-info" type="submit" value="Submit" />
				</div>
			</form>
		)
	}
};

export default MPGForm;