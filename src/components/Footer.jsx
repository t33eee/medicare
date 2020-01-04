//jshint esversion:6
import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../assets/img/logo.png';

export default class Footer extends Component {
	render() {
		return (
			<FooterWrapper className=" col col-lg-12 col-md-12 col-sm-12 container mt-5">
				<div className="row">
					<div className="col-sm">
						<div className="logo-div">
							<img src={logo} alt="" srcset="" />
							<p className="text-white">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Blanditiis at velit provident quis quo ab alias excepturi vel.
							</p>
							<h3 className="text-mutted text-uppercase">stay connected</h3>
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

					<div className="col-sm">
						<div className="services-div mt-5">
							<h3 className="text-capitalize text-white">our services</h3>
							<ul className="text-white">
								<li>> Cardiology</li>
								<li>> Dental</li>
								<li>> Gynecology</li>
								<li>> Laboratory</li>
								<li>> Health Tips</li>
								<li>> Appointment</li>
							</ul>
						</div>
					</div>

					<div className="col-sm">
						<div className="mt-5">
							<h3 className="text-capitalize text-white">Newsletter</h3>
							<p className="text-white">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Blanditiis at velit provident quis quo ab alias excepturi vel.
							</p>
							<div class="input-group mb-3">
								<div class="input-group-prepend">
									<span class="input-group-text" id="basic-addon1">
										@
									</span>
								</div>
								<input
									type="text"
									class="form-control"
									placeholder="E-mail"
									aria-label="Username"
									aria-describedby="basic-addon1"
								/>
								<div class="input-group-append ">
									<i className=" far fa-paper-plane fa-2x text-primary btn btn-outline-secondary input-group-text"></i>
								</div>
							</div>
						</div>
					</div>
				</div>
			</FooterWrapper>
		);
	}
}

const FooterWrapper = styled.div`
        background: #050f3e;
        .logo-div{
            img {
			width: 10rem;
			height: 10rem;
			padding: 10px;
		}
		ul {
			list-style: none;
			display: flex;
			justify-content: space-around;
			li {
                margin-left: 0;
				i {
					margin-top: 0;
					font-size: 1.5rem;
					color: #7778ca;
					margin-left: 0;

					&:hover {
						transform: scale(1.2);
						cursor: pointer;
						color: white;
					}
				}
			}
		}
	}
        }
        .services-div{
            ul{
                list-style: none;
            }
        }
         .services2-div{
            margin-top: 8rem;
            ul{
                list-style: none;
            }
        }
		
`;
