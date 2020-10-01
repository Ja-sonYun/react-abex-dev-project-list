import React from 'react';
import axios from 'axios';

class ProjectList extends React.Component {
	constructor() {
		super();
	};
	componentDidMount() { // ajax here
		axios.get('https://api.abex.dev/projects/get')
			.then(res => {
				console.log(res);
			});

	};
	render () {
		return (
			<p>asd</p>
		)
	}
}

export default ProjectList;
