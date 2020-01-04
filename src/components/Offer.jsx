//jshint esversion:6
import React, { Component } from 'react';
import CountUp from 'react-countup';
import styled from 'styled-components';

export default class Offer extends Component {
	render() {
		return (
			<OfferWrapper className=" container-fluid offer">
				<div className="row">
					<div className="col col-lg-3 col-md-12 col-sm-12">
						<div
							className="card-body mt-5"
							style={{ background: 'transparent' }}
						>
							<div className="content">
								<ul>
									<li>
										<i class="fas fa-user-md fa-3x"></i>
										<CountUp
											start={0}
											end={373}
											duration={2.75}
											separator=" "
											decimals={0}
										>
											{({ countUpRef, start }) => (
												<div>
													<span ref={countUpRef} onMouseEnter={start} />
												</div>
											)}
										</CountUp>
										<h1 className="text-capitalize text-white">Doctors</h1>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col col-lg-3 col-md-12 col-sm-12">
						<div
							className="card-body mt-5"
							style={{ background: 'transparent' }}
						>
							<div className="content">
								<ul>
									<li>
										<i class="fas fa-heart fa-3x"></i>
										<CountUp
											start={0}
											end={373}
											duration={2.75}
											separator=" "
											decimals={0}
										>
											{({ countUpRef, start }) => (
												<div>
													<span ref={countUpRef} onMouseEnter={start} />
												</div>
											)}
										</CountUp>
										<h1 className="text-capitalize text-white">ratings</h1>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col col-lg-3 col-md-12 col-sm-12">
						<div
							className="card-body mt-5"
							style={{ background: 'transparent' }}
						>
							<div className="content">
								<ul>
									<li>
										<i class="fas fa-medkit fa-3x"></i>
										<CountUp
											start={0}
											end={373}
											duration={2.75}
											separator=" "
											decimals={0}
										>
											{({ countUpRef, start }) => (
												<div>
													<span ref={countUpRef} onMouseEnter={start} />
												</div>
											)}
										</CountUp>
										<h1 className="text-capitalize text-white">clients</h1>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col col-lg-3 col-md-12 col-sm-12">
						<div
							className="card-body mt-5"
							style={{ background: 'transparent' }}
						>
							<div className="content">
								<ul>
									<li>
										<i class="fas fa-ambulance fa-3x"></i>
										<CountUp
											start={0}
											end={373}
											duration={2.75}
											separator=" "
											decimals={0}
										>
											{({ countUpRef, start }) => (
												<div>
													<span ref={countUpRef} onMouseEnter={start}>
														{' '}
														<i class="fas fa-ambulance fa-3x"></i>
													</span>
												</div>
											)}
										</CountUp>
										<h1 className="text-capitalize text-white">emergency</h1>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</OfferWrapper>
		);
	}
}

const OfferWrapper = styled.div`
	ul {
		li {
			list-style: none;
			margin: 3rem;
			i {
				margin-left: 3rem;
				color: white;
			}
			span {
				margin-left: 3.5rem;
				font-size: 1.5rem;
				color: white;
			}
		}
	}
`;
