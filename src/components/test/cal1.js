import { Calendar } from 'react-date-range';
import React, {Component} from 'react';

export default class MyComponent extends Component {
	handleSelect(date){
		console.log(date); // native Date object
	}
	render(){
		return (
			<Calendar
				date={new Date()}
				onChange={this.handleSelect}
			/>
		)
	}
}
