import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import styled from 'styled-components';
import Title from './Title';
import { Card, CardText, CardImg } from 'reactstrap';

import sugery from '../assets/img/sugery.jpg';
export default class Testimonial extends Component {
	render() {
		return (
			<CarouselWrapper className=" col col-lg-12 col-md-12 col-sm-12 card-body ">
				<Title title="testimonials" />
				<p className=" text-center">
					Lorem ipsum dolor sit amet, expedita repellat nisi eveniet natus
					officiis porro consequatur.
				</p>
				<Carousel
					style={{
						width: '60%',
						margin: 'auto',
						marginTop: '4rem',
						height: 'auto',
						marginBottom: '4rem'
					}}
				>
					<Card body outline color="info" className="test-card ">
						<CardText>
							<p className="m-3">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Voluptatem quae corrupti tempore eligendi inventore iusto
								perferendis magni iste eos ad. Lorem ipsum dolor sit amet
								consectetur adipisicing elit. Natus, voluptas!
							</p>
							<hr style={{ width: '200px' }} />
						</CardText>
						<div className="card-image">
							<CardImg
								src={sugery}
								text="slide1"
								alt=""
								className="img img-fluid"
							/>
							<div className="text-overlay">
								<h5>John Doe </h5>
							</div>
						</div>
					</Card>
					<Card body outline color="info" className="test-card">
						<CardText>
							<p className="m-3">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Voluptatem quae corrupti tempore eligendi inventore iusto
								perferendis magni iste eos ad. Lorem ipsum dolor sit amet
								consectetur adipisicing elit. Natus, voluptas!
							</p>
							<hr style={{ width: '200px' }} />
						</CardText>
						<div className="card-image">
							<CardImg
								src={sugery}
								text="slide1"
								alt=""
								className="img img-fluid"
							/>
							<div className="text-overlay">
								<h5>John Doe </h5>
							</div>
						</div>
					</Card>
					<Card body outline color="info" className="test-card">
						<CardText>
							<p className="m-3">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Voluptatem quae corrupti tempore eligendi inventore iusto
								perferendis magni iste eos ad. Lorem ipsum dolor sit amet
								consectetur adipisicing elit. Natus, voluptas!
							</p>
							<hr style={{ width: '200px' }} />
						</CardText>
						<div className="card-image">
							<CardImg
								src={sugery}
								text="slide1"
								alt=""
								className="img img-fluid"
							/>
							<div className="text-overlay">
								<h5>John Doe </h5>
							</div>
						</div>
					</Card>
				</Carousel>
			</CarouselWrapper>
		);
	}
}

const CarouselWrapper = styled.div`
background: #DBA2ED;
margin-top: 5rem;
	.test-card {
        .card-image{
        border-radius: 360rem;
        width: 150px;
        height: auto;
        margin: auto;
        position: relative;
		.img {
            display: block;
            height: auto;
			}
			.text-overlay {
				position: absolute;
				bottom: 100%;
				left: 0;
				right: 0;
				background-color: transparent;
				overflow: hidden;
				width: 100%;
				height: 0;
				transition: 0.5s ease;
			}
		&:hover {
			.text-overlay {
				bottom: 0;
				height: 100%;
			}
		
		h5 {
			color: black;
			font-size: 20px;
			position: absolute;
			top: 50%;
			left: 50%;
			-webkit-transform: translate(-50%, -50%);
			-ms-transform: translate(-50%, -50%);
			transform: translate(-50%, -50%);
			text-a;
		}
        }
	}
`;
