//jshint esversion:6
import React, { Component } from 'react';
import styled from 'styled-components';

export default class Intro extends Component {
	render() {
		return (
			<IntroWrapper className="container">
				<div className=" col">
					<div className="row">
						<div className="col col-lg-4 col-md-12 col-sm-4">
							<div className="card-body mt-5" style={{ background: '#9900cc' }}>
								<i className="fas fa-heartbeat text-white fa-3x ml-4 mb-3 "></i>{' '}
								<br />
								<h3 className="text-capitalize text-white ml-3 ">cardiology</h3>
								<p className="text-white m-4">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
									ipsam architecto animi sed consectetur ratione!
									Necessitatibus, dignissimos.
								</p>
								<button className="btn ml-2">read more</button>
							</div>
						</div>
						<div className="col col-lg-4 col-md-12 col-sm-4">
							<div className="card-body mt-5" style={{ background: '#66b3ff' }}>
								<i class="fas fa-stethoscope text-white fa-3x ml-4 mb-3"></i>{' '}
								<br />
								<h3 className="text-capitalize text-white ml-3 ">
									consultancy
								</h3>
								<p className="text-white m-4">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
									ipsam architecto animi sed consectetur ratione!
									Necessitatibus, dignissimos.
								</p>
								<button className="btn ml-2">read more</button>
							</div>
						</div>
						<div className="col col-lg-4 col-md-12 col-sm-4">
							<div className="card-body mt-5" style={{ background: '#0066cc' }}>
								<i class="fas fa-ambulance text-white fa-3x ml-4 mb-3"></i>
								<br />
								<h3 className="text-capitalize text-white ml-3 ">emmergency</h3>
								<p className="text-white m-4">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
									ipsam architecto animi sed consectetur ratione!
									Necessitatibus, dignissimos.
								</p>
								<button className="btn ml-2">read more</button>
							</div>
						</div>
					</div>
				</div>
			</IntroWrapper>
		);
	}
}

const IntroWrapper = styled.div`
	.btn {
		background: black;
		color: white;

		&:hover {
			background: blue;
			color: white;
		}
	}
`;
