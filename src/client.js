"use strict"

import React from 'react';
import ReactDOM from 'react-dom';

import MPGForm from './components/mpg_form.js';

class MyApp extends React.Component {
	render(){
		return (
			<div>
				<h1>Testing</h1>
				<MPGForm />
			</div>
		);
	}
};

ReactDOM.render(
 	<MyApp />,
  	document.getElementById('app')
);
