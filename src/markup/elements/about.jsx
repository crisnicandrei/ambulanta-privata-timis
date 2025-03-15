import React, { Component } from 'react';

// Import Images
import aboutThumb1 from '../../images/ambulanta1.jpeg';
import aboutThumb2 from '../../images/ambulanta2.jpeg';
import aboutThumb3 from '../../images/ambulanta3.jpeg';
import logo from '../../images/logo.jpg';

import ptImg1 from '../../images/shap/wave-orange.png';
import ptImg2 from '../../images/shap/circle-small-blue.png';
import ptImg4 from '../../images/shap/square-dots-orange.png';
import ptImg5 from '../../images/shap/square-blue.png';

class AboutSection extends Component {
	render() {
		return (
			<>
				<section className="section-sp1 about-area" aria-label="Despre Jame Medical">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-6 mb-30">
								<div className="about-thumb-area">
									<ul>
										<li><img className="about-thumb1" src={aboutThumb1} alt="Ambulanță transport pacienți 1" /></li>
										<li><img className="about-thumb2" src={aboutThumb2} alt="Ambulanță transport pacienți 2" /></li>
										<li><img className="about-thumb3" src={aboutThumb3} alt="Ambulanță consult la domiciliu" /></li>
										<li><img className="about-thumb3" src={logo} alt="Sigla Jame Medical" /></li>
									</ul>
								</div>
							</div>
							<div className="col-lg-6 mb-30">
								<div className="heading-bx">
									<h1 className="title-ext text-secondary">Despre Noi</h1>
									<h2 className="text-primary">Cine suntem?</h2>
									<p>
										<strong>Jame Medical</strong>, înființată în 2023, dispune de <strong>4 ambulanțe</strong>:
										3 pentru transport pacienți și 1 pentru consult la domiciliu.
										Personalul nostru este experimentat, devotat și empatic, majoritatea având activitate și în sistemul de urgență.
									</p>
								</div>
							</div>
						</div>
					</div>
					<img className="pt-img1 animate-wave" src={ptImg1} alt="Decor undă portocalie" />
					<img className="pt-img2 animate2" src={ptImg2} alt="Decor cerc albastru mic" />
					<img className="pt-img3 animate-rotate" src={ptImg5} alt="Decor pătrat albastru" />
					<img className="pt-img4 animate-wave" src={ptImg4} alt="Decor puncte pătrat portocaliu" />
					<img className="pt-img5 animate2" src={ptImg5} alt="Decor pătrat albastru" />
				</section>
			</>
		);
	}
}

export default AboutSection;
