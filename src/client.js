"use strict"

import React from 'react';
import ReactDOM from 'react-dom';

import MPGForm from './components/mpg_form.js';

class MyApp extends React.Component {
	render(){
		return (
			<div className="container">
				<h2 className="title">MPG Tracker</h2>
				<div className="columns">
					<div className="column is-5 box">
						<MPGForm />
					</div>
				</div>
			</div>
		);
	}
};

ReactDOM.render(
 	<MyApp />,
  	document.getElementById('app')
);
