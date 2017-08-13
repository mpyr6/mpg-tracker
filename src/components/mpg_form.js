import React from 'react';
import axios from 'axios';

import DisplaySnippet from './disp_snippet';

//this reactjs file will define a single class, which is the form that handles data entry. Files may contain more than one class, but for the sake of simplicity, I'll add future components to our application by creating other files

class MPGForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			miles:null, 
			gallons:null, 
			price:null,
			gasType:null,
			totalCost:null,
			mpg:null
		}

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleCalcs = this.handleCalcs.bind(this);
		this.handleOptionChange = this.handleOptionChange.bind(this);
	}

	//handleInputChange is called on every change to the inputs (every key-click), this updates the application state to whatever is in the box.
	handleCalcs() {
		var calcCost = (this.state.gallons === null || this.state.price === null ) ? null : (this.state.gallons*this.state.price).toFixed(2);
		var calcMPG = (this.state.gallons === null || this.state.miles === null) ? null : (this.state.miles/this.state.gallons).toFixed(2);

		var finalMPG = (isFinite(calcMPG)) ? calcMPG : null;
		var finalCost = (calcCost !== 0 && isFinite(calcCost)) ? calcCost : null;

		this.setState({
		  totalCost: calcCost,
		  mpg: finalMPG
		});
	}

	handleClear() {
		this.setState({
			miles:null, 
			gallons:null, 
			price:null,
			gasType:null,
			totalCost:null,
			mpg:null
		})
	}

	handleOptionChange(event) {
		this.setState({
		  gasType: event.target.value
		});
	 }

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
		const dataSet=[{
			distance: this.state.miles,
			galAmount: this.state.gallons,
			efficiency: this.state.mpg,
			gasPrice: this.state.price,
			fuel: this.state.gasType,
			totalCost: this.state.totalCost
		}]
		axios.post("/db", dataSet)
	}

	//render function dictates what is injected into the index.html page
	render() {
		return (
			<div className="section box" style={{paddingTop:'20px', paddingBottom:'20px'}}>
				<h4 className="title is-4">New Entry :</h4>
				<div className="columns">
					<div className="column is-5">
						<form onSubmit={this.handleSubmit}>
							<div className="field">
								<label className="label">Miles</label>
								<input 	className="input"
										name="miles"
										type="text" 
										onChange={this.handleInputChange}
										onKeyUp={this.handleCalcs}/>
							</div>
							<div className="field">
								<label className="label">Gallons</label>
								<input 	className="input"
										name="gallons"
										type="text" 
										onChange={this.handleInputChange}
										onKeyUp={this.handleCalcs}/>
							</div>
							<div className="field">
								<label className="label">Price per Gallon</label>
								<input 	className="input"
										name="price"
										type="text" 
										onChange={this.handleInputChange}
										onKeyUp={this.handleCalcs}/>
							</div>
							<div className="control">
							<label className="label">Fuel Type</label>
							  
							  <label className="radio" style={{marginRight: "15px"}}>
							    <input 	type="radio" 
							    		name="gasType" 
							    		value={87}
							    		style={{marginRight: "6px"}} 
							    		checked={this.state.gasType == 87} 
							    		onChange={this.handleOptionChange}
							    		/> 87 </label>

							  <label className="radio" style={{marginRight: "15px"}}>
							    <input 	type="radio"
							    		name="gasType"
							    		value={89}
							    		style={{marginRight: "6px"}} 
							    		checked={this.state.gasType == 89}
							    		 onChange={this.handleOptionChange} 
							    		/> 89 </label>

							  <label className="radio" style={{marginRight: "15px"}}>
							    <input 	type="radio" 
							    		name="gasType"
							    		value={91}
							    		style={{marginRight: "6px"}} 
							    		checked={this.state.gasType == 91}
							    		onChange={this.handleOptionChange}
							    		/> 91 </label>
							</div>
							<div className="field">
								<hr />
								<input className="button is-info" type="submit" value="Submit" />
								<button className="button is-danger" style={{marginLeft: "3px"}} onClick={this.handleClear}>Clear Form</button>
							</div>
						</form>
					</div>
					<div className="column is-1"></div>
					<div className="column is-5">
						<div className="content">
							<br />
							<DisplaySnippet label="Miles driven" info={this.state.miles} />
							<DisplaySnippet label="Gallons used" info={this.state.gallons} />
							<DisplaySnippet label="Miles/Gallon" info={this.state.mpg} />
							<hr />
							<DisplaySnippet label="Type of Fuel" info={this.state.gasType} />
							<DisplaySnippet label="Price/Gallon" info={this.state.price} />
							<DisplaySnippet label="Cost of fill-up" info={this.state.totalCost} />
						</div>
					</div>
				</div>
			</div>


		)
	}
};

export default MPGForm;