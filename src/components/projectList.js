import React from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import ProjectCard from './projectCard.js';
import './projectList.css';

class ProjectList extends React.Component {
	constructor() {
		super();
		this.state = {
			projects: [],
			projectCards: [],
		};
	};

	componentDidMount() { // ajax here
		axios.get('https://api.abex.dev/projects/get',{
			headers: {
				'Access-Control-Allow-Origin':'*',
			},
			proxy: {
				host: 'localhost',
				port: 3000
			}})
			.then(res => {
				if(res.data[0].length != 0) {
					let cards = [];
					for(let i in res.data[0]) {
						cards.push(<ProjectCard data={res.data[0][i]} key={i}/>);
					}
					this.setState({ projectCards: cards });
				}
			});

	};

	render () {
		return (
			<div id="projectList">
				<Grid container spacing={3}>
					{this.state.projectCards}
				</Grid>
			</div>
		)
	}
}

export default ProjectList;
