import React, { useState } from 'react';
import axios from 'axios';
import './AddBlog.css';

const AddBlog = () => {

    const [blogImg, setBlogImg] = useState('');
    const [isDisable, setIsDisable] = useState(true);
	const [title, setTitle] = useState('');
	const [blogDetails, setBlogDetails] = useState('');
	
    const handleSubmit = (event) => {
        console.log('submitting');
		
		const blogData = {
			title: title,
			details: blogDetails,
			url: blogImg,
		};
		console.log(blogData);
		postData(blogData);

		event.preventDefault();
    };
	const handleOnBlur = (event) => {
		console.log(event.target.name, ' ', event.target.value);
		if (event.target.name === 'title') {
			setTitle(event.target.value);
		}
        if (event.target.name === 'description') {
			setBlogDetails(event.target.value);
		}
	};
	
	const postData = (blogData) => {
		const url = `https://powerful-tor-41926.herokuapp.com/addBlog`;
		// const url = 'http://localhost:5055/addBlog';

		// console.log(eventData);
		fetch(url, {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(blogData)
		}).then((res) => console.log('server side response', res));
	};

    const handlePhoto = (event) => {
		console.log('file changed');
		console.log(event.target.files[0]);
		const imageData = new FormData();
		imageData.set('key', '717503597ea03f1a0b2ff6dad139c297');
		imageData.append('image', event.target.files[0]);
		// console.log({ imageData });
		axios
			.post('https://api.imgbb.com/1/upload', imageData)
			.then(function(response) {
				console.log(response.data.data.display_url);
                setBlogImg(response.data.data.display_url);
                setIsDisable(false);
			})
			.catch(function(error) {
				console.log(error);
			});
	};


    return (
        <div className="container">
			<form onSubmit={handleSubmit}>
				
				<div className="mb-3">
							<label className="form-label">
								Blog Title
							</label>
							<input
								type="text"
								className="form-control"
								name="title"
								placeholder="Blog Title"
								onBlur={handleOnBlur}
							/>
						</div>
						
						<div className="mb-3">
							<input type="file" className="form-control" onChange={handlePhoto} />
						</div>
						<div className="mb-3">
							<label className="form-label">
								Example textarea
							</label>
							<textarea className="form-control" name="description" onBlur={handleOnBlur} rows="3" />
						</div>
						<div className="mb-3">
                    	
							<button className="submit-button" disabled={isDisable}> Submit </button>
						</div>
			</form>
						
        </div>
    )
};

export default AddBlog;