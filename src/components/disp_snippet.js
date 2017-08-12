"use strict"

import React from 'react';
import axios from 'axios';

class DisplaySnippet extends React.Component {
	render() {
		return (					
			<div>
				<h5 style={{display: 'inline-block'}}>{this.props.label} : &nbsp;</h5>
				<h4 style={{display: 'inline-block', fontWeight: 'bold'}}>{this.props.info}</h4>
			</div>
		)
	}
}

export default DisplaySnippet;