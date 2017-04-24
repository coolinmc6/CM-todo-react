import React, { Component } from 'react';

export default class Filter extends Component {
	
	render() {
		return (
			<div>
				<a href="#">All</a>&nbsp;&nbsp;
				<a href="#">Completed</a>&nbsp;&nbsp;
				<a href="#">Incomplete</a>
				<br /><br />
			</div>
		)
	}
}