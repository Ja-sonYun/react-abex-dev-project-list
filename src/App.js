import React from 'react';
import Header from './layouts/header.js';
import Footer from './layouts/footer.js';
import ProjectList from './components/projectList.js';
import './App.css';

function App() {
	return (
		<div className="App">
			<Header />
			<div className="main-content">
				<ProjectList />
			</div>
			<Footer />
		</div>
	);
}

export default App;
