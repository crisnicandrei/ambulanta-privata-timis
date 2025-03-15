import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

// Import Images
import testShape from "../../images/testimonials/shape.png"
import testPic1 from "../../images/testimonials/pic1.jpg"
import testPic2 from "../../images/testimonials/pic2.jpg"
import testPic3 from "../../images/testimonials/pic3.jpg"
import testPic4 from "../../images/testimonials/pic4.jpg"
import testPic5 from "../../images/testimonials/pic5.jpg"
import testPic6 from "../../images/testimonials/pic6.jpg"
import plusOrange from "../../images/shap/plus-orange.png"
import squareBlue from "../../images/shap/square-blue.png"
import circleDots from "../../images/shap/circle-dots.png"
import circleOrange2 from "../../images/shap/circle-orange-2.png"

class testimonialSection extends Component {

	render() {

		const settings = {
			dots: false,
			infinite: true,
			speed: 1000,
			slidesToShow: 1,
			slidesToScroll: 1,
		};

		return (
			<>


				<section className="section-area section-sp3 testimonial-wraper">
					<div className="container">
						<div className="heading-bx text-center">
							<h2 className="title m-b0">Testimoniale</h2>
						</div>
						<div className="row align-items-center">
							<div className="col-lg-6 text-center">
								<div className="thumb-wraper">
									<img className="bg-img" src={testShape} alt="" />
									<ul>
										<li data-member="1"><Link to="#"><img src={testPic1} alt="" /></Link></li>
										<li data-member="2"><Link to="#"><img src={testPic2} alt="" /></Link></li>
										<li data-member="3"><Link to="#"><img src={testPic3} alt="" /></Link></li>
										<li data-member="4"><Link to="#"><img src={testPic4} alt="" /></Link></li>
										<li data-member="5"><Link to="#"><img src={testPic5} alt="" /></Link></li>
										<li data-member="6"><Link to="#"><img src={testPic6} alt="" /></Link></li>
									</ul>
								</div>
							</div>
							<div className="col-lg-6">
								<Slider {...settings} className="testimonial-slide">
									<div className="slider-item">
										<div className="testimonial-bx">
											<div className="testimonial-content">
												<p>Personalul de la Jame Medical a fost bine pregătit și atent la fiecare detaliu al îngrijirii mele. Am primit tratamentul de care aveam nevoie fără a fi nevoie să părăsesc casa mea</p>
											</div>
											<div className="client-info">
												<h5 className="name">Eugen</h5>
												<p>Pacient</p>
											</div>
											<div className="quote-icon">
												<i className="fas fa-quote-left"></i>
											</div>
										</div>
									</div>
									<div className="slider-item">
										<div className="testimonial-bx">
											<div className="testimonial-content">
												<p>Am ales serviciile Jame Medical pentru a îngriji tatăl meu și am fost încântați de experiență. Personalul lor profesionist și dedicat a oferit îngrijire de calitate în confortul casei noastre. În ciuda unor mici neclarități în comunicare, am văzut îmbunătățiri semnificative în starea de sănătate a tatălui meu. Recomandăm cu încredere serviciile lor pentru cei care au nevoie de îngrijire la domiciliu.</p>
											</div>
											<div className="client-info">
												<h5 className="name">Elena</h5>
												<p>Copil pacient</p>
											</div>
											<div className="quote-icon">
												<i className="fas fa-quote-left"></i>
											</div>
										</div>
									</div>
									<div className="slider-item">
										<div className="testimonial-bx">
											<div className="testimonial-content">
												<p>Am folosit serviciile de îngrijire medicală la domiciliu de la Jame Medical și am fost foarte mulțumit. Personalul a fost foarte profesionist și empatic, abordând nevoile mele de sănătate cu atenție și grijă.</p>
											</div>
											<div className="client-info">
												<h5 className="name">Vasile</h5>
												<p>Pacient</p>
											</div>
											<div className="quote-icon">
												<i className="fas fa-quote-left"></i>
											</div>
										</div>
									</div>
									<div className="slider-item">
										<div className="testimonial-bx">
											<div className="testimonial-content">
												<p>Am folosit serviciile de îngrijire medicală la domiciliu de la Jame Medical și am fost foarte mulțumit. Personalul a fost foarte profesionist și empatic, abordând nevoile mele de sănătate cu atenție și grijă.</p>
											</div>
											<div className="client-info">
												<h5 className="name">Margareta</h5>
												<p>Pacient</p>
											</div>
											<div className="quote-icon">
												<i className="fas fa-quote-left"></i>
											</div>
										</div>
									</div>
								</Slider>
							</div>
						</div>
					</div>
					<img className="pt-img1 animate1" src={plusOrange} alt="" />
					<img className="pt-img2 animate2" src={squareBlue} alt="" />
					<img className="pt-img3 animate3" src={circleDots} alt="" />
					<img className="pt-img4 animate4" src={circleOrange2} alt="" />
				</section>

			</>
		);
	}
}

export default testimonialSection;