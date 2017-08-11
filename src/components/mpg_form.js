import React from 'react';

class MPGForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			miles:'', 
			gallons:'', 
			price:''
		}

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

	handleSubmit(event) {
		event.preventDefault();
		console.log(this.state)
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>Miles
					<input name="miles" type="text" onChange={this.handleInputChange}/>
				</label>
					<br />
				<label>Gallons
					<input name="gallons" type="text" onChange={this.handleInputChange}/>
				</label>
					<br />
				<label>Price
					<input name="price" type="text" onChange={this.handleInputChange}/>
				</label>
				  <br />
				  <br />
				<input type="submit" value="Submit" />
			</form>
		)
	}
};

export default MPGForm;