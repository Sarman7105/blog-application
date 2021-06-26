import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({blog}) => {
    const { _id, url, details, title } = blog;
    console.log(url);
    return (
        <div className="col-md-6">
            <div>
                <div className="card">
                    
                    <img src={url} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to={`/blog/${_id}`} className="btn btn-primary">Go somewhere</Link>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default BlogCard;