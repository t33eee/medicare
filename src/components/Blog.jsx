//jshint esversion:6
import React, { Component } from 'react';
import styled from 'styled-components';
import sugery from '../assets/img/sugery.jpg';
import nurse from '../assets/img/nurse-patient2.jpg';
import man from '../assets/img/man-next.jpg';
import Title from './Title';
import { CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';

export default class Blog extends Component {
	render() {
		return (
			<BlogWrapper className="container">
				<Title id="title" title="latest news" />
				<p className="text-center text-dark">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam,
					consequuntur.
				</p>
				<div className="row">
					<div className="col-sm">
						<div className="card hover w-auto mt-5">
							<div className="card-img-top">
								<img src={man} alt="" className="img-fluid" />
							</div>
							<div className="card-body">
								<CardTitle className="text-capitalize text-primary display-4">
									Lorem ipsum dolor sit amet.
								</CardTitle>
								<Breadcrumb>
									<BreadcrumbItem>
										<small>11th dec.</small>
									</BreadcrumbItem>
									<BreadcrumbItem active>Posted by Admin</BreadcrumbItem>
								</Breadcrumb>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
									ut quasi quia tempore laudantium nihil.
								</p>
							</div>
							<div className="card-footer">
								<ul>
									<li>
										<i class="fas fa-share-alt fa-3x"></i>
									</li>
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
								<img src={sugery} alt="" className="img-fluid" />
							</div>
							<div className="card-body">
								<CardTitle className="text-capitalize text-primary display-4">
									Lorem ipsum dolor sit amet.
								</CardTitle>
								<Breadcrumb>
									<BreadcrumbItem>
										<small>13th dec.</small>
									</BreadcrumbItem>
									<BreadcrumbItem active>Posted by Admin</BreadcrumbItem>
								</Breadcrumb>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
									ut quasi quia tempore laudantium nihil.
								</p>
							</div>

							<div className="card-footer">
								<ul>
									<li>
										<i class="fas fa-share-alt fa-3x"></i>
									</li>
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
								<img src={nurse} alt="" className="img-fluid" />
							</div>
							<div className="card-body">
								<CardTitle className="text-capitalize text-primary display-4">
									Lorem ipsum dolor sit amet.
								</CardTitle>
								<Breadcrumb>
									<BreadcrumbItem>
										<small>15th dec.</small>
									</BreadcrumbItem>
									<BreadcrumbItem active>Posted by Admin</BreadcrumbItem>
								</Breadcrumb>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
									ut quasi quia tempore laudantium nihil.
								</p>
							</div>

							<div className="card-footer">
								<ul>
									<li>
										<i class="fas fa-share-alt fa-3x"></i>
									</li>
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
			</BlogWrapper>
		);
	}
}

const BlogWrapper = styled.div`
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
