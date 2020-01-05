//jshint esversion:6
import React, { Component } from 'react';
import Title from './Title';
import doctors from '../assets/img/doctors-intro.jpg';

export default class About extends Component {
	render() {
		return (
			<div className="container">
				<Title title="About Us" />
				<p className=" text-center">
					Lorem ipsum dolor sit amet, expedita repellat nisi eveniet natus
					officiis porro consequatur.
				</p>
				<div className="col">
					<div className="row">
						<div className="col col-lg-6 col-md-12 col-sm-12">
							<div className="card-body mt-5">
								<h3 className="text-uppercase text-primary ml-3">
									our hospital history{' '}
								</h3>
								<h4 className="text-capitalize text-primary ml-3 ">
									because we care
								</h4>
								<p className="text-light">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
									ipsam architecto animi sed consectetur ratione!
									Necessitatibus, dignissimos.
								</p>
								<blockquote
									className="text-light"
									style={{ fontStyle: 'italic' }}
								>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
									voluptas quaerat aspernatur laborum laboriosam.
									<small style={{ marginLeft: 200 }}>-Dr. Ronaldo</small>
								</blockquote>
								<button className="btn ml-2">read more</button>
							</div>
						</div>
						<div className="col col-lg-6 col-md-12 col-sm-12">
							<div className=" card-body mt-5">
								<img
									src={doctors}
									alt=""
									className=" pl-4 img-fluid"
									style={{ width: 420, overflow: 'hidden' }}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
