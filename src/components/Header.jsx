//jshint esversion:6
import React, { Component } from 'react';
import header from '../assets/img/header.jpg';
import styled from 'styled-components';

export default class Header extends Component {
	render() {
		return (
			<HeaderWrapper>
				<div class="container-fluid">
					<div class=" col col-lg-12 col-md-12 col-sm-12 container">
						<img
							src={header}
							alt="pic"
							className="img-fluid"
							style={{ width: '100%', height: '100vh', overflow: 'hidden' }}
						/>
						<div class="content col col-lg-12 ">
							<h5
								class="welcome text-capitalize text-center text-white shadow-xs"
								style={{ marginTop: 170 }}
							>
								welcome to mediCare
							</h5>
							<h1 className="welcome-supp text-center text-uppercase text-white shadow-xs">
								we care about your health
							</h1>
							<p className="welcome-p text-center text-white shadow-xs">
								<small>
									Lorem ipsum dolor sit amet consectetur <br />
									voluptatem deserunt mollitia!
								</small>
							</p>
							<button className="btn btn-primary m-3">Apointment</button>
						</div>
					</div>
				</div>
			</HeaderWrapper>
		);
	}
}

const HeaderWrapper = styled.div`
	.container {
		position: relative;
		margin: 0 auto;
	}

	.container .content {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		padding: 50px;
		background: rgb(0, 0, 0);
		background: rgba(0, 0, 0, 0.5);
		color: #f1f1f1;
		width: 30 %;
		height: 100%;

		button {
			top: 50%;
			left: 48%;
			transform: translate(-50%, -50%);
		}
	}
`;
