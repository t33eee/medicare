import React, { useState } from 'react';
import {
	TabContent,
	TabPane,
	Nav,
	NavItem,
	NavLink,
	Card,
	Button,
	Row,
	Col
} from 'reactstrap';
import classnames from 'classnames';
import styled from 'styled-components';
import Title from './Title';

import dentist from '../assets/img/dentist.jpg';
import meeting from '../assets/img/meeting.jpg';
import nurse from '../assets/img/nurse-patient3.jpg';
import facility from '../assets/img/op-facility.jpg';

const Dept = (props) => {
	const [activeTab, setActiveTab] = useState('1');

	const toggle = (tab) => {
		if (activeTab !== tab) setActiveTab(tab);
	};

	return (
		<DeptWrapper className="container-fluid dept-wrapper">
			<Title id="title" title="our departments" />
			<p className="text-center text-white">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam,
				consequuntur.
			</p>
			<div className="dept">
				<Nav tabs className="">
					<NavItem className="m-auto nav-item">
						<NavLink
							className={classnames({ active: activeTab === '1' })}
							onClick={() => {
								toggle('1');
							}}
						>
							<p className="text-uppercase">orthopedics</p>
						</NavLink>
					</NavItem>
					<NavItem className="m-auto nav-item">
						<NavLink
							className={classnames({ active: activeTab === '2' })}
							onClick={() => {
								toggle('2');
							}}
						>
							<p className="text-uppercase ">neurology</p>
						</NavLink>
					</NavItem>
					<NavItem className="m-auto nav-item">
						<NavLink
							className={classnames({ active: activeTab === '3' })}
							onClick={() => {
								toggle('3');
							}}
						>
							<p className="text-uppercase ">gynecology</p>
						</NavLink>
					</NavItem>
					<NavItem className="m-auto nav-item">
						<NavLink
							className={classnames({ active: activeTab === '4' })}
							onClick={() => {
								toggle('4');
							}}
						>
							<p className="text-uppercase ">dental</p>
						</NavLink>
					</NavItem>
				</Nav>

				<Row>
					<TabContent activeTab={activeTab}>
						<TabPane tabId="1">
							<Row>
								<Col sm="6" md="12" lg="12">
									<Card body className="mb-5">
										<Row>
											<Col lg="6" md="6" sm="12">
												<Card body>
													<img src={meeting} alt="" className="img-fluid" />
												</Card>
											</Col>
											<Col lg="6" md="6" sm="12">
												<Card body>
													<h3 className="text-capitalize text-center text-light mt-4 ">
														orthopedic department
													</h3>
													<p className="text-light m-3">
														Lorem ipsum dolor sit amet consectetur adipisicing
														elit. Esse ipsam architecto animi sed consectetur
														ratione! Necessitatibus, dignissimos. Lorem ipsum
													</p>
													<Button btn>learn more </Button>
												</Card>
											</Col>
										</Row>
									</Card>
								</Col>
							</Row>
						</TabPane>
						<TabPane tabId="2">
							<Row>
								<Col sm="6" md="12" lg="12">
									<Card body className="mb-5">
										<Row>
											<Col lg="6" md="6" sm="12">
												<Card body>
													<img src={facility} alt="" className="img-fluid" />
												</Card>
											</Col>
											<Col lg="6" md="6" sm="12">
												<Card body>
													<h3 className="text-capitalize text-center text-light mt-4 ">
														neurology department
													</h3>
													<p className="text-light m-3">
														Lorem ipsum dolor sit amet consectetur adipisicing
														elit. Esse ipsam architecto animi sed consectetur
														ratione! Necessitatibus, dignissimos. Lorem ipsum
													</p>
													<Button btn>learn more </Button>
												</Card>
											</Col>
										</Row>
									</Card>
								</Col>
							</Row>
						</TabPane>
						<TabPane tabId="3" className="mx-auto">
							<Row>
								<Col sm="6" md="12" lg="12">
									<Card body className="mb-5">
										<Row>
											<Col lg="6" md="6" sm="12">
												<Card body>
													<img src={nurse} alt="" className="img-fluid" />
												</Card>
											</Col>
											<Col lg="6" md="6" sm="12">
												<Card body>
													<h3 className="text-capitalize text-center text-light mt-4 ">
														gynecology department
													</h3>
													<p className="text-light m-3">
														Lorem ipsum dolor sit amet consectetur adipisicing
														elit. Esse ipsam architecto animi sed consectetur
														ratione! Necessitatibus, dignissimos. Lorem ipsum
													</p>
													<Button btn>learn more </Button>
												</Card>
											</Col>
										</Row>
									</Card>
								</Col>
							</Row>
						</TabPane>
						<TabPane tabId="4">
							<Row>
								<Col sm="6" md="12" lg="12">
									<Card body className="mb-5">
										<Row>
											<Col lg="6" md="6" sm="12">
												<Card body>
													<img src={dentist} alt="" className="img-fluid" />
												</Card>
											</Col>
											<Col lg="6" md="6" sm="12">
												<Card body>
													<h3 className="text-capitalize text-center text-light mt-4 ">
														dental department
													</h3>
													<p className="text-light m-3">
														Lorem ipsum dolor sit amet consectetur adipisicing
														elit. Esse ipsam architecto animi sed consectetur
														ratione! Necessitatibus, dignissimos. Lorem ipsum
													</p>
													<Button btn>learn more </Button>
												</Card>
											</Col>
										</Row>
									</Card>
								</Col>
							</Row>
						</TabPane>
					</TabContent>
				</Row>
			</div>
		</DeptWrapper>
	);
};

export default Dept;

const DeptWrapper = styled.div`
	margin-top: 5rem;
	#title {
		color: white !important;
	}
	.dept {
		margin: 5rem;
		.nav-item {
			color: black;
			background: transparent;
		}
	}
`;
