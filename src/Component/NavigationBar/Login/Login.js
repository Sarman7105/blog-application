import React, { useState } from 'react';

const Login = ({ handleSubmit, setEmail, setPassword }) => {
    const handleOnChange = (event) => {
        // console.log(event.target.name, "  ", event.target.value);
        if (event.target.name === "Email")
        {
            setEmail(event.target.value);
        }
        if (event.target.name === "Password")
        {
            setPassword(event.target.value);
        }
    }
	return (
		<div>
			<form className="row g-3">
				<div className="col-auto">
					<label className="visually-hidden">
						Email
					</label>
					<input
						type="text"
						className="form-control"
						id="staticEmail2"
                        name="Email"
                        onChange={handleOnChange}
					/>
				</div>
				<div className="col-auto">
					<label className="visually-hidden">
						Password
					</label>
					<input type="password" className="form-control" name="Password" onChange={handleOnChange} placeholder="Password" />
				</div>
				<div className="col-auto">
					<button onClick={handleSubmit} className="btn btn-primary mb-3">
						Confirm identity
					</button>
				</div>
			</form>
		</div>
	);
};

export default Login;
