import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Images
import Logo from '../../images/logo1.png';
import footerBg from '../../images/background/footer.jpg';
import ptImg1 from '../../images/shap/wave-blue.png';
import ptImg2 from '../../images/shap/circle-dots.png';
import ptImg3 from '../../images/shap/plus-blue.png';
import ptImg4 from '../../images/shap/wave-blue.png';

// Social Images

class aboutSection extends Component {
	render() {
		return (
			<>

				<footer className="footer" style={{ backgroundImage: "url(" + footerBg + ")" }}>
					<div className="footer-top">
						<div style={{
							backgroundColor: 'white'
						}} className="container">
							<div className="row">
								<div className="col-xl-3 col-lg-3 col-md-6">
									<div className="widget widget_info">
										<div className="footer-logo">
											<Link to="/"><img src={Logo} alt="" /></Link>
										</div>
										<div className="ft-contact">
											<p>Ambulanta privata Timis</p>
											<div className="contact-bx">
												<div className="icon"><i className="fas fa-phone-alt"></i></div>
												<div className="contact-number">
													<span>Contact</span>
													<h4 className="number">0722170310</h4>
													<h4>Marius Cioclu</h4>
													<h4 className="number">0730811213</h4>
													<h4>Dr. Avram Claudiu</h4>
												</div>
											</div>
										</div>
									</div>
								</div>



							</div>
						</div>
					</div>
					<img className="pt-img1 animate-wave" src={ptImg1} alt="" />
					<img className="pt-img2 animate1" src={ptImg2} alt="" />
					<img className="pt-img3 animate-rotate" src={ptImg3} alt="" />
					<img className="pt-img4 animate-wave" src={ptImg4} alt="" />
				</footer>

			</>
		);
	}
}

export default aboutSection;