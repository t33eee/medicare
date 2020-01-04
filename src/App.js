//jshint esversion:6
import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';

import styled from 'styled-components';
import './assets/vendor/nucleo/css/nucleo.css';
import './assets/vendor/font-awesome/css/font-awesome.min.css';
import './assets/scss/App.scss';
import Intro from './components/Intro';
import Offer from './components/Offer';
import Services from './components/Services';
import Dept from './components/departments';
import Doctors from './components/Doctors';
import Testimonial from './components/Testimonial';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
	return (
		<AppWrapper className="App">
			<Navbar />
			<Header />
			<Intro />
			<About />
			<Offer />
			<Services />
			<Dept />
			<Doctors />
			<Testimonial />
			<Blog />
			<Footer />
		</AppWrapper>
	);
}

export default App;

const AppWrapper = styled.div``;
