"use strict"

import React from 'react';
import ReactDOM from 'react-dom';

import MPGForm from './components/mpg_form.js';
import MPGList from './components/mpg_list.js'

class MyApp extends React.Component {
	render(){
		return (
			<div className="container">
				<h2 className="title is-3">MPG Tracker</h2>
				<MPGForm />
				<MPGList />
			</div>
		);
	}
};

ReactDOM.render(
 	<MyApp />,
  	document.getElementById('app')
);
