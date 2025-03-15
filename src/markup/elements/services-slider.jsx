import React, { Component } from 'react';
import Slider from "react-slick";

// Import Images
import lineCircleBlue from "../../images/shap/line-circle-blue.png";
import squareDotsOrange from "../../images/shap/square-dots-orange.png";
import waveBlue from "../../images/shap/wave-blue.png";
import squareRotate from "../../images/shap/square-rotate.png";
import medicallAsist from '../../images/medical-assistance.png';
import logo from '../../images/logo1.png';



class ServicesSliderSection extends Component {
	render() {

		const settings = {
			dots: true,
			infinite: true,
			speed: 1000,
			slidesToShow: 3,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 991,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 591,
					settings: {
						slidesToShow: 1,
					}
				}
			]
		};

		return (
			<>

				<section className="section-area section-sp1 service-wraper">
					<div className="row align-items-center">
						<div className="col-xl-4 col-lg-7 mb-30">
							<div className="heading-bx">
								<h6 className="title-ext text-secondary">Servicii</h6>
								<h2 className="title">Gamă completă de servicii de transport medical</h2>
							</div>
						</div>
						<div className="col-xl-8 mb-15">
							<Slider {...settings} className="service-slide slick-arrow-none">
								<div className="slider-item">
									<div className="feature-container feature-bx2 feature1">
										<div className="feature-box-xl mb-30"
											style={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
											<span className="icon-cell">
												<img src={medicallAsist} alt="" />
											</span>
										</div>
										<div className="icon-content">
											<h3 className="ttr-title">Transport sanitar asistat cu medic intern si international</h3>
											<p>Asigurăm transport medical intern și internațional cu echipaj complet format din medici și asistenți specializați.</p>
										</div>
									</div>
								</div>
								<div className="slider-item">
									<div className="feature-container feature-bx2 feature2">
										<div className="feature-box-xl mb-30"
											style={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
											<span className="icon-cell">
												<img src={logo} alt="" />
											</span>
										</div>
										<div className="icon-content">
											<h3 className="ttr-title">Transport sanitar neasistat</h3>
											<p>Serviciu destinat pacienților care nu necesită monitorizare medicală pe durata transportului.</p>

										</div>
									</div>
								</div>
								<div className="slider-item">
									<div className="feature-container feature-bx2 feature3">
										<div className="feature-box-xl mb-30"
											style={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
											<span className="icon-cell">
												<img src={logo} alt="" />
											</span>
										</div>
										<div className="icon-content">
											<h3 className="ttr-title">Transport sanitar programat</h3>
											<p>Ideal pentru consultații, internări, externări, dializă și alte investigații medicale.</p>										</div>
									</div>
								</div>
								<div className="slider-item">
									<div className="feature-container feature-bx2 feature1">
										<div className="feature-box-xl mb-30"
											style={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
											<span className="icon-cell">
												<img src={logo} alt="" />
											</span>
										</div>
										<div className="icon-content">
											<h3 className="ttr-title">Servicii medicale la domiciliu</h3>
											<a href='https://jame-medical.ro/'>https://jame-medical.ro/</a>
										</div>
									</div>
								</div>
								<div className="slider-item">
									<div className="feature-container feature-bx2 feature2">
										<div className="feature-box-xl mb-30"
											style={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
											<span className="icon-cell">
												<img src={logo} alt="" />
											</span>
										</div>
										<div className="icon-content">
											<h3 className="ttr-title">Echipaj medical de urgență pentru evenimente</h3>
											<p>Evenimente private, competiții sportive, concerte, festivaluri etc.</p>
										</div>
									</div>
								</div>
							</Slider>
							<div className='sliders-phone'>
								<div className="slider-item">
									<div className="feature-container feature-bx2 feature1">
										<div className="feature-box-xl mb-30"
											style={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
											<span className="icon-cell">
												<img src={medicallAsist} alt="" />
											</span>
										</div>
										<div className="icon-content">
											<h3 className="ttr-title">Transport sanitar asistat cu medic intern si international</h3>
											<p>Pentru pacientii care necesita monitorizare pe durata transportului, se asigura transport cu personal medical complet.</p>
										</div>
									</div>
								</div>
								<div className="slider-item">
									<div className="feature-container feature-bx2 feature2">
										<div className="feature-box-xl mb-30"
											style={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
											<span className="icon-cell">
												<img src={logo} alt="" />
											</span>
										</div>
										<div className="icon-content">
											<h3 className="ttr-title">Transport sanitar neasistat</h3>
											<p>Pentru pacientii care nu necesita monitorizarea functiilor vitale pe durata transportului cu ambulanta.</p>
										</div>
									</div>
								</div>
								<div className="slider-item">
									<div className="feature-container feature-bx2 feature3">
										<div className="feature-box-xl mb-30"
											style={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
											<span className="icon-cell">
												<img src={logo} alt="" />
											</span>
										</div>
										<div className="icon-content">
											<h3 className="ttr-title">Transport sanitar programat</h3>
											<p>Acesta se face la cererea pacientului pentru deplasarea la consultatii, investigatii medicale, internari, externari, dializa si altele</p>
										</div>
									</div>
								</div>
								<div className="slider-item">
									<div className="feature-container feature-bx2 feature1">
										<div className="feature-box-xl mb-30"
											style={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
											<span className="icon-cell">
												<img src={logo} alt="" />
											</span>
										</div>
										<div className="icon-content">
											<h3 className="ttr-title">Servicii medicale la domiciliu</h3>
											<a href='https://jame-medical.ro/'>https://jame-medical.ro/</a>
										</div>
									</div>
								</div>
								<div className="slider-item">
									<div className="feature-container feature-bx2 feature2">
										<div className="feature-box-xl mb-30"
											style={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
											<span className="icon-cell">
												<img src={logo} alt="" />
											</span>
										</div>
										<div className="icon-content">
											<h3 className="ttr-title">Echipaj medical de urgenta pentru evenimente</h3>
											<p>Evenimente private, competitii sportive, concerte, festivaluri etc.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div >
					<img className="pt-img1 animate-rotate" src={lineCircleBlue} alt="" />
					<img className="pt-img2 animate2" src={squareDotsOrange} alt="" />
					<img className="pt-img3 animate-wave" src={waveBlue} alt="" />
					<img className="pt-img4 animate1" src={squareRotate} alt="" />
				</section >

			</>
		);
	}
}

export default ServicesSliderSection;