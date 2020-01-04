//jshint esversion:6
import React, { Component } from 'react';
import styled from 'styled-components';
import doctor1 from '../assets/img/doctor1.jpg';
import doctor2 from '../assets/img/doctor2.jpg';
import doctor3 from '../assets/img/doctor3.jpg';

export default class Intro extends Component {
	render() {
		return (
			<DoctorsWrapper className="container">
				<div className="row">
					<div className="col-sm">
						<div className="card hover w-auto mt-5">
							<div className="card-img-top">
								<img src={doctor1} alt="" className="img-fluid" />
							</div>
							<div className="card-footer">
								<h3 className="text-capitalize text-dark ml-3 ">
									gynecologist
								</h3>
								<p className="text-dark m-4">Dr. Serena Williams</p>
								<ul>
									<li>
										<i class="fab fa-facebook fa-3x"></i>
									</li>
									<li>
										<i class="fab fa-google fa-3x"></i>
									</li>
									<li>
										<i class="fab fa-twitter fa-3x"></i>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-sm">
						<div className="card hover mt-5">
							<div className="card-img-top">
								<img src={doctor2} alt="" className="img-fluid" />
							</div>

							<div className="card-footer">
								<h3 className="text-capitalize text-dark ml-3 ">
									cardiologist
								</h3>
								<p className="text-dark m-4">Dr. Eden Harzard</p>
								<ul>
									<li>
										<i class="fab fa-facebook fa-3x"></i>
									</li>
									<li>
										<i class="fab fa-google fa-3x"></i>
									</li>
									<li>
										<i class="fab fa-twitter fa-3x"></i>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-sm">
						<div className="card hover mt-5">
							<div className="card-img-top">
								<img src={doctor3} alt="" className="img-fluid" />
							</div>

							<div className="card-footer">
								<h3 className="text-capitalize text-dark ml-3 ">neurologist</h3>
								<p className="text-dark m-4">Dr. Steven Cameroon </p>
								<ul>
									<li>
										<i class="fab fa-facebook fa-3x"></i>
									</li>
									<li>
										<i class="fab fa-google fa-3x"></i>
									</li>
									<li>
										<i class="fab fa-twitter fa-3x"></i>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</DoctorsWrapper>
		);
	}
}

const DoctorsWrapper = styled.div`
	.card {
		img {
			width: 100%;
			height: 250px;
			border: 1px solid;
			padding: 10px;

			&:hover {
				transform: scale(1.03);
				transition: all 1s linear;
				-moz-box-shadow: 0 0 10px #ccc;
				-webkit-box-shadow: 0 0 10px #ccc;
				box-shadow: 0 0 10px #ccc;
			}
		}
		ul {
			list-style: none;
			display: flex;
			justify-content: space-around;
			li {
				i {
					margin-top: 0;
					font-size: 1.5rem;
					color: #7778ca;
					margin-left: 0;

					&:hover {
						transform: scale(1.2);
						cursor: pointer;
						color: #111129;
					}
				}
			}
		}
	}
`;
