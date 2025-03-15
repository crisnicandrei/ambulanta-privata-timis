import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sticky from 'react-stickynode';

// Images
import logo from '../../images/ambulance_logo.jpg';
import logoWhite from '../../images/logo-white.png';

const Header = () => {

	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isSearchFormOpen, setIsSearchBtn] = useState(false);
	const quikSearchClose = () => setIsSearchBtn(false);
	const [activeItem, setActiveItem] = useState(null);
	const [isMobileView, setIsMobileView] = useState(false);

	const toggleSubmenu = (item) => {
		setActiveItem(item === activeItem ? null : item);
	};


	const handleMenuLinkClick = () => {
		if (window.innerWidth <= 991) {
			setIsMenuOpen(false);
		}
	};


	const handleMenuCloseClick = () => {
		setIsMenuOpen(false);
	};



	useEffect(() => {
		const handleResize = () => {
			setIsMobileView(window.innerWidth >= 768);
		};

		// Check the screen size on initial render and whenever the window is resized
		handleResize();

		window.addEventListener('resize', handleResize);

		// Clean up the event listener on component unmount
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const menuItems = [
		{
			id: 'home',
			name: 'Acasă',
			linkName: '#',
		},
		// {
		// 	id: 'pages',
		// 	name: 'Pages',
		// 	linkName: '#',

		// 	subItems: [
		// 		{
		// 			id: 'aboutus',
		// 			displayName: 'About Us',
		// 			linkName: 'about-us'
		// 		},
		// 		{
		// 			id: 'team',
		// 			displayName: 'Our Team',
		// 			linkName: 'team'
		// 		},
		// 		// {
		// 		// 	id: 'faq',
		// 		// 	displayName: "FAQ's",
		// 		// 	linkName: 'faq'
		// 		// },
		// 		// {
		// 		// 	id: 'booking',
		// 		// 	displayName: 'Booking',
		// 		// 	linkName: 'booking'
		// 		// },
		// 		// {
		// 		// 	id: 'error',
		// 		// 	displayName: 'Error 404',
		// 		// 	linkName: 'error-404'
		// 		// },
		// 		// {
		// 		// 	id: 'formLogin',
		// 		// 	displayName: 'Login / Register',
		// 		// 	linkName: 'form-login'
		// 		// },
		// 	]
		// },
		// {
		// 	id: 'services',
		// 	name: 'Services',
		// 	linkName: '',

		// 	subItems: [
		// 		{
		// 			id: 'services',
		// 			displayName: 'Service',
		// 			linkName: 'services'
		// 		},
		// 		// {
		// 		// 	id: 'serviceDetail',
		// 		// 	displayName: 'Service Detail',
		// 		// 	linkName: 'service-detail'
		// 		// },
		// 	]
		// },
		// {
		// 	id: 'blog',
		// 	name: 'Blog',
		// 	linkName: '#',

		// 	subItems: [
		// 		{
		// 			id: 'blogGrid',
		// 			displayName: 'Blogs',
		// 			linkName: 'blog-grid'
		// 		},
		// 		{
		// 			id: 'blogDetails',
		// 			displayName: 'Blog Details',
		// 			linkName: 'blog-details'
		// 		},
		// 	]
		// },
		{
			id: 'contactUs',
			name: 'Contact',
			linkName: 'contact'
		}
	];

	return (
		<header className="header  rs-nav">
			<Sticky enabled={true} className="sticky-header navbar-expand-lg">
				<div className="menu-bar clearfix">
					<div style={{ backgroundColor: '#c9c2c1' }} className="container-fluid clearfix">
						<div className="menu-logo menu-logo-main logo-dark">
							<Link to="/"><img src={logo} alt="" />
							</Link>
						</div>



						<div className="secondary-menu">
							<ul>
								<li className="num-bx"><a href="tel:0722170310"><i className="fas fa-phone-alt"></i> 0722170310</a></li>
								<li className="btn-area"><Link to="/contact-us" className="btn btn-primary shadow">CONTACT <i className="btn-icon-bx fas fa-chevron-right"></i></Link></li>
							</ul>
						</div>

						<div className={`menu-links navbar-collapse collapse justify-content-end ${isMenuOpen ? 'show' : ''}`} id="menuDropdown">
							<div className="menu-logo">
								<Link to="/"><img src={logoWhite} alt="" /></Link>
							</div>

							<ul className="nav navbar-nav">
								{menuItems.map((item) => (
									<li
										key={item.id}
										className={`${activeItem === item.id ? 'open' : ''}`}
										onClick={() => toggleSubmenu(item.id)}
									>
										{item.subItems ? (
											<Link to="#">
												{item.name}
												<i className={`fas fa-plus`}></i>
											</Link>
										) : (
											<Link to={`/${item.linkName}`} onClick={handleMenuLinkClick}>
												{item.name}
											</Link>
										)}
										{(isMobileView || activeItem === item.id) && item.subItems && (
											<ul className="sub-menu">
												{item.subItems.map((subItem, index) => (
													<li key={subItem.id}><Link to={`/${subItem.linkName}`} onClick={handleMenuLinkClick}><span>{subItem.displayName}</span></Link></li>
												))}
											</ul>
										)}
									</li>
								))}
							</ul>

							<ul className="social-media">
								<li><a target="_blank" rel="noreferrer" href="https://www.facebook.com/" className="btn btn-primary"><i className="fab fa-facebook-f"></i></a></li>
								<li><a target="_blank" rel="noreferrer" href="https://www.google.com/" className="btn btn-primary"><i className="fab fa-google"></i></a></li>
								<li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/" className="btn btn-primary"><i className="fab fa-linkedin-in"></i></a></li>
								<li><a target="_blank" rel="noreferrer" href="https://twitter.com/" className="btn btn-primary"><i className="fab fa-twitter"></i></a></li>
							</ul>

							<div className="menu-close" onClick={handleMenuCloseClick}>
								<i className="ti-close"></i>
							</div>

						</div>
					</div>
				</div>
			</Sticky>

			<div className={`nav-search-bar ${isSearchFormOpen ? 'show' : ''}`}>
				<form>
					<input type="text" className="form-control" placeholder="Type to search" />
					<span><i className="ti-search"></i></span>
				</form>
				<span id="searchRemove" onClick={quikSearchClose}><i className="ti-close"></i></span>
			</div>

		</header>

	);
}

export default Header;