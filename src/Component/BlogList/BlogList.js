import React, { useEffect, useState } from 'react';
import './BlogList.css';
import BlogTable from './BlogTable';

const BlogList = () => {
    const [blogs, setBlogs] = useState([]);
    const url = `https://powerful-tor-41926.herokuapp.com/blogs`;
    useEffect(() => {
        fetch(url).then(res => res.json()).then(data => setBlogs(data));
    },[])
    return (
        <div className="blog-list-container">
            <div className="container">
                <BlogTable blogs={blogs}></BlogTable>
            </div>
            

        </div>
    );
};

export default BlogList;