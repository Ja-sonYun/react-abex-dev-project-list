import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
import './projectCard.css';

class ProjectCard extends React.Component {
	constructor() {
		super();
		this.state = {
			expanded: false,
		};
		this.toggleExpandSection = this.toggleExpandSection.bind(this);
	}

	componentDidMount() {
		console.log(this.props.data);
	}

	toggleExpandSection() {
		this.setState({ expanded: !this.state.expanded });
	}

	render () {
		return (
			<Grid id="project" item xs={6}>
				<Card elevation={3}>
					<CardHeader action={
						<Button size="small" color={this.props.data.status.includes("Done") ? "primary" : "secondary"}>{this.props.data.status}</Button>
					}
								title={this.props.data.title}
								subheader={ "created at " + this.props.data.created}>
					</CardHeader>
					<p>{this.props.data.description}</p>
					<CardActions>
						<Grid justify="space-between" container spacing={3}>
							<Grid item>
								<Button size="small" color="primary" href={'https://'+this.props.data.url}>link</Button>
							</Grid>

							<Grid item>
							<Button className="expand"
									size="small"
									color="primary"
									onClick={this.toggleExpandSection}
									aria-expanded={this.state.expanded}
									aria-label="show todo">
							Show Todo Lists <ExpandMoreIcon />
							</Button>
							</Grid>
						</Grid>
					</CardActions>
					<Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
						<CardContent>
							Todo here
						</CardContent>
					</Collapse>
				</Card>
			</Grid>
		)
	}
}

export default ProjectCard;
