"use strict"

import React from 'react';
import ReactDOM from 'react-dom';

class MyApp extends React.Component {
	render(){
		return (
			<div>It works!</div>
		);
	}
}

ReactDOM.render(
 	<MyApp />,
  	document.getElementById('app')
);