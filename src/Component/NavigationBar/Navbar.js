import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container">
					<Link className="navbar-brand" to="/">
						Event maker
					</Link >
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
						<div className="navbar-nav">
							<Link  className="nav-link active" aria-current="page" to="/home">
								Home
							</Link >
							<Link  className="nav-link" to="/addBlog">
								AddBlog
							</Link >
							<Link  className="nav-link" to="/Blog">
								Blog
							</Link >
						</div>
					</div>
				</div>
			</nav>
        </div>
    );
};

export default Navbar;