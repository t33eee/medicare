//jshint esversion:6
import React, { Component } from 'react';
import styled from 'styled-components';
import Title from './Title';

export default class Services extends Component {
	render() {
		return (
			<ServicesWrapper className="container">
				<div className=" col">
					<Title title="our services" />
					<p className="text-center">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam,
						consequuntur.
					</p>
					<div className="row">
						<div className="col col-lg-4 col-md-12 col-sm-4">
							<div className="card-body mt-5">
								<div>
									<i class="fas fa-x-ray fa-3x"></i>
								</div>
								<br />
								<h3 className="text-capitalize text-center text-light mt-4 ">
									orthopaedics
								</h3>
								<p className="text-light m-4">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
									ipsam architecto animi sed consectetur ratione!
									Necessitatibus, dignissimos.
								</p>
							</div>
						</div>
						<div className="col col-lg-4 col-md-12 col-sm-4">
							<div className="card-body mt-5">
								<i class="fas fa-stethoscope fa-3x"></i> <br />
								<h3 className="text-capitalize text-center  text-light mt-4">
									neurology
								</h3>
								<p className="text-light m-4">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
									ipsam architecto animi sed consectetur ratione!
									Necessitatibus, dignissimos.
								</p>
							</div>
						</div>
						<div className="col col-lg-4 col-md-12 col-sm-4">
							<div className="card-body mt-5">
								<div>
									<i class="fas fa-venus fa-3x"></i>
								</div>
								<br />
								<h3 className="text-capitalize text-center text-light mt-4 ">
									gynecology
								</h3>
								<p className="text-light m-4">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
									ipsam architecto animi sed consectetur ratione!
									Necessitatibus, dignissimos.
								</p>
							</div>
						</div>
						<div className="col col-lg-4 col-md-12 col-sm-4">
							<div className="card-body mt-5">
								<div>
									<i class="fas fa-tooth fa-3x"></i>
								</div>{' '}
								<br />
								<h3 className="text-capitalize text-center text-light mt-4">
									cardiology
								</h3>
								<p className="text-light m-4">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
									ipsam architecto animi sed consectetur ratione!
									Necessitatibus, dignissimos.
								</p>
							</div>
						</div>
						<div className="col col-lg-4 col-md-12 col-sm-4">
							<div className="card-body mt-5">
								<div>
									<i class="fas fa-microscope fa-3x"></i>
								</div>
								<br />
								<h3 className="text-capitalize text-center text-light mt-4 ">
									research
								</h3>
								<p className="text-light m-4">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
									ipsam architecto animi sed consectetur ratione!
									Necessitatibus, dignissimos.
								</p>
							</div>
						</div>
						<div className="col col-lg-4 col-md-12 col-sm-4">
							<div className="card-body mt-5">
								<div className="box">
									<i className="fas fa-user-md fa-3x"></i>
								</div>
								<br />
								<h3 className="text-capitalize text-center text-light mt-4">
									physician
								</h3>
								<p className="text-light m-4">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
									ipsam architecto animi sed consectetur ratione!
									Necessitatibus, dignissimos.
								</p>
							</div>
						</div>
					</div>
				</div>
			</ServicesWrapper>
		);
	}
}

const ServicesWrapper = styled.div`
	.card-body {
		border: groove;
		position: relative;
		background: white;
		cursor: pointer;
		i {
			position: absolute;
			color: #7f18a0;
			top: 12%;
			left: 50%;
			transform: translate(-50%, -50%);
			&:hover {
			}
		}
		&:hover {
			background: #050f3e;

			i {
				color: white;
			}
			h3 {
				color: white !important;
			}
			p {
				color: white !important;
			}
		}
	}
`;
