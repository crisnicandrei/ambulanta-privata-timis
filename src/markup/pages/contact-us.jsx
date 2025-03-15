import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";
import icon1 from "../../images/icon/icon1.png";
import icon3 from "../../images/icon/icon3.png";
import animateWave from "../../images/shap/wave-blue.png";
import animate2 from "../../images/shap/circle-dots.png";
import animateRotate from "../../images/shap/plus-blue.png";


class ContactUs extends Component {

	render() {
		return (
			<>

				<div className="page-content bg-white">

					<div className="banner-wraper">
						<div className="page-banner banner-lg contact-banner" style={{ backgroundImage: "url(" + bnrImg1 + ")" }}>
							<div className="container">
								<div className="page-banner-entry text-center">
									<h1>Contact</h1>
									<nav aria-label="breadcrumb" className="breadcrumb-row">
										<ul className="breadcrumb">
											<li className="breadcrumb-item"><Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> Home</Link></li>
											<li className="breadcrumb-item active" aria-current="page">Contact</li>
										</ul>
									</nav>
								</div>
							</div>
							<img className="pt-img1 animate-wave" src={animateWave} alt="" />
							<img className="pt-img2 animate2" src={animate2} alt="" />
							<img className="pt-img3 animate-rotate" src={animateRotate} alt="" />
						</div>
					</div>

					<section className="section-area section-sp1">
						<div className="container">
							<div className="row">
								<div className="col-lg-4 col-md-6 mb-30">
									<div className="feature-container feature-bx4 feature4">
										<div className="icon-md feature-icon">
											<img src={icon1} alt="" />
										</div>
										<div className="icon-content">
											<h5 className="ttr-title">Numere de contact</h5>
											<p>0722 170 310</p>
											<p>0730 811 2130</p>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6 mb-30">
									<div className="feature-container feature-bx4 feature3">
										<div className="icon-md feature-icon">
											<img src={icon3} alt="" />
										</div>
										<div className="icon-content">
											<h5 className="ttr-title">Email</h5>
											<p>jame.medical@yahoo.com</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>

				</div>

			</>
		);
	}
}

export default ContactUs;