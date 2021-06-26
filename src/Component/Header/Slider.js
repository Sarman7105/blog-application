import React from 'react';
import './Slider.css';

const Slider = () => {
	return (
		<div className="container slider-container">
			<div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
				<div className="carousel-inner">
					<div className="carousel-item active" data-bs-interval="2500">
						<img
							className="img-fluid slider-image"
							src="https://i.ibb.co/hCJs9vr/slider.jpg"
							alt="slider2-1"
							border="0"
						/>

					</div>
					<div className="carousel-item" data-bs-interval="2500">
						<img
							className="img-fluid slider-image"
							src="https://i.ibb.co/sQYx1hT/618-369x246.jpg"
							alt="slider1-1"
							border="0"
						/>
	
					</div>
					<div className="carousel-item" data-bs-interval="2500">
						<img
							className="img-fluid slider-image"
							src="https://i.ibb.co/ck6dxxR/girl-back-leaf-369x246.jpg"
							alt="slider3-1"
							border="0"
						/>
					</div>
				</div>
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleInterval"
					data-bs-slide="prev"
				>
					<span className="carousel-control-prev-icon" aria-hidden="true" />
					<span className="visually-hidden">Previous</span>
				</button>
				<button
					className="carousel-control-next"
					type="button"
					data-bs-target="#carouselExampleInterval"
					data-bs-slide="next"
				>
					<span className="carousel-control-next-icon" aria-hidden="true" />
					<span className="visually-hidden">Next</span>
				</button>
			</div>
		</div>
	);
};

export default Slider;
