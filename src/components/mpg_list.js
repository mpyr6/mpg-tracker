import React from 'react';
import axios from 'axios';

import DisplaySnippet from './disp_snippet';


class MPGList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			entries:null
		}
	this.componentDidMount = this.componentDidMount.bind(this);
	}

	componentDidMount() {
		axios.get('/db')
			.then(response => {
				this.setState({
					entries: response.data
				});
				console.log(response.data);
			})
	}

	//render function dictates what is injected into the index.html page
	render() {
		const pastEntries = (this.state.entries === null) ? null : this.state.entries.reverse().slice(0, 4).map(function(entriesArray){
			return(
				<div className="column is-3 box" style={{backgroundColor: '#dbdbdb', margin: "3px 6px 6px 3px"}}>						
					<DisplaySnippet label="Miles driven" info={entriesArray.distance} />
					<DisplaySnippet label="Gallons used" info={entriesArray.galAmount} />
					<DisplaySnippet label="Miles/gallon" info={entriesArray.efficiency} />
					<DisplaySnippet label="Price/Gallon" info={entriesArray.gasPrice} />
					<DisplaySnippet label="Cost of fill-up" info={entriesArray.totalCost} />
				</div>
			)
		});

		return (
			<div className="section" style={{padding: "20px 40px 20px 10px"}}>
				<h4 className="title is-4">Past Entries :</h4>
				<div className="columns">
					<div className="column is-12">
						<div className="columns">
							{pastEntries}
						</div>
					</div>
				</div>
			</div>
		)
	}
};

export default MPGList;