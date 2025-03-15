import React, { Component } from 'react';

// Import Images
import bg1 from '../../images/main-banner/bg1.jpg';
import ambulanceImg from '../../images/ambulanta5.jpeg';

import ptImg1 from '../../images/shap/trangle-orange.png';
import ptImg2 from '../../images/shap/square-blue.png';
import ptImg3 from '../../images/shap/chicle-blue-2.png';
import ptImg4 from '../../images/shap/plus-orange.png';
import ptImg5 from '../../images/shap/wave-orange.png';


class aboutSection extends Component {
	render() {
		return (
			<>

				<div className="main-banner" style={{ backgroundImage: "url(" + bg1 + ")" }}>
					<div className="container inner-content">
						<div className="row align-items-center">
							<div className="col-lg-7 col-md-6 col-sm-7">
								<h6 className="title-ext text-primary">Transport Ambulanțier</h6>
								<h1>Alege profesioniștii.</h1>
								<h1>Viața are prioritate.</h1>
							</div>
							<div className="col-lg-5 col-md-6 col-sm-5">
								<div className="banner-img">
									<img src={ambulanceImg} alt="" />
								</div>
							</div>
						</div>
					</div>
					<img className="pt-img1 animate1" src={ptImg1} alt="" />
					<img className="pt-img2 animate2" src={ptImg2} alt="" />
					<img className="pt-img3 animate3" src={ptImg3} alt="" />
					<img className="pt-img4 animate4" src={ptImg4} alt="" />
					<img className="pt-img5 animate-wave" src={ptImg5} alt="" />
				</div>

			</>
		);
	}
}

export default aboutSection;