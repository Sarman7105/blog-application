import React, {useEffect,useState} from 'react';
import BlogCard from './BlogCard';
import './Blogs.css';
const Blogs = ({blogs}) => {
    

    return (
        <div className="container">
            <div className="row">
                <col-md-8>
                    <div className='row'>
                        {
                            blogs.map((blog) => <BlogCard key={blog._id} blog={blog}/>)
                        }
                    </div>
                </col-md-8>
                <col-md-4>
                    <div></div>
                </col-md-4>
            </div>
        </div>
    );
};

export default Blogs;