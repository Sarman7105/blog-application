import React, { useEffect, useState } from 'react';
import './Blog.css';
import BrandLogo from '../BrandLogo/BrandLogo'
import { useParams } from 'react-router-dom';

const Blog = () => {
    const { _id } = useParams();
    // const url = `http://localhost:5055/blog?id=${_id}`;
    const url=`https://powerful-tor-41926.herokuapp.com/blog?id=${_id}`
    const [blog, setBlog] = useState([]);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setBlog(data);
                console.log(blog[0]);
            });
    },[_id])
    return (
        <div className="blog-container">

            <div className="container">
            <BrandLogo />
            <div className="row mt-5">
                <div className="col-md-12">
                    <div>
                        <img className="blog-img rounded mx-auto d-block" src={blog[0]?.url} alt="" />
                        <h3 className="mt-3">{blog[0]?.title}</h3>
                        <p className="mt-3">{ blog[0]?.details}</p>
                    </div>
                </div>
            </div>
        </div>

        </div>
    );
};

export default Blog;