//jshint esversion:6
import React from 'react';

// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from 'headroom.js';
// reactstrap components
import {
	Button,
	UncontrolledCollapse,
	DropdownMenu,
	DropdownItem,
	DropdownToggle,
	UncontrolledDropdown,
	NavbarBrand,
	Navbar,
	NavItem,
	NavLink,
	Nav,
	Container,
	Row,
	Col,
	UncontrolledTooltip
} from 'reactstrap';
import logo from '../assets/img/logo.png';

class DemoNavbar extends React.Component {
	componentDidMount() {
		let headroom = new Headroom(document.getElementById('navbar-main'));
		// initialise
		headroom.init();
	}
	render() {
		return (
			<>
				<header className="header-global">
					<Navbar
						className="navbar-main navbar-transparent navbar-light headroom"
						expand="lg"
						id="navbar-main"
					>
						<Container>
							<NavbarBrand className="mr-lg-5">
								<div style={{ width: 'auto', marginLeft: 10 }}>
									<img src={logo} alt="" srcset="" className="ml-3" />
									<h4
										style={{ fontStyle: '', fontSize: 15, marginLeft: 0 }}
										className="text-success text-uppercase m-auto"
									>
										medicare
									</h4>
								</div>
							</NavbarBrand>
							<button className="navbar-toggler" id="navbar_global">
								<span className="navbar-toggler-icon" />
							</button>
							<UncontrolledCollapse navbar toggler="#navbar_global">
								<div className="navbar-collapse-header">
									<Row>
										<Col className="collapse-brand" xs="6"></Col>
										<Col className="collapse-close" xs="6">
											<button className="navbar-toggler" id="navbar_global">
												<span />
												<span />
											</button>
										</Col>
									</Row>
								</div>
								<Nav className="navbar-nav-hover align-items-lg-center" navbar>
									<UncontrolledDropdown nav>
										<DropdownToggle nav>
											<i className="ni ni-collection d-lg-none mr-1" />
											<span className="nav-link-inner--text text-uppercase">
												Pages
											</span>
										</DropdownToggle>
										<DropdownMenu>
											<DropdownItem to="/Home">Home</DropdownItem>
											<DropdownItem to="/About">About</DropdownItem>
											<DropdownItem to="/Gallery">Gallery</DropdownItem>
											<DropdownItem to="/Blog">Blog</DropdownItem>
										</DropdownMenu>
									</UncontrolledDropdown>
								</Nav>
								<Nav className="align-items-lg-center ml-lg-auto" navbar>
									<NavItem>
										<NavLink
											className="nav-link-icon"
											id="tooltip333589074"
											target="_blank"
										>
											<i className="fa fa-facebook-square" />
											<span className="nav-link-inner--text d-lg-none ml-2">
												Facebook
											</span>
										</NavLink>
										<UncontrolledTooltip delay={0} target="tooltip333589074">
											Like us on Facebook
										</UncontrolledTooltip>
									</NavItem>
									<NavItem>
										<NavLink
											className="nav-link-icon"
											id="tooltip356693867"
											target="_blank"
										>
											<i className="fa fa-instagram" />
											<span className="nav-link-inner--text d-lg-none ml-2">
												Instagram
											</span>
										</NavLink>
										<UncontrolledTooltip delay={0} target="tooltip356693867">
											Follow us on Instagram
										</UncontrolledTooltip>
									</NavItem>
									<NavItem>
										<NavLink
											className="nav-link-icon"
											id="tooltip184698705"
											target="_blank"
										>
											<i className="fa fa-twitter-square" />
											<span className="nav-link-inner--text d-lg-none ml-2">
												Twitter
											</span>
										</NavLink>
										<UncontrolledTooltip delay={0} target="tooltip184698705">
											Follow us on Twitter
										</UncontrolledTooltip>
									</NavItem>
									<NavItem className="d-none d-lg-block ml-lg-4">
										<Button
											className="btn-neutral btn-icon"
											color="default"
											href=""
											target="_blank"
										>
											<span className="nav-link-inner--text ml-1">
												Appointment
											</span>
										</Button>
									</NavItem>
								</Nav>
							</UncontrolledCollapse>
						</Container>
					</Navbar>
				</header>
			</>
		);
	}
}

export default DemoNavbar;
