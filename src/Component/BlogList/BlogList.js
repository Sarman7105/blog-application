import React, { useEffect, useState } from 'react';
import Login from '../NavigationBar/Login/Login';
import './BlogList.css';
import BlogTable from './BlogTable';

const BlogList = () => {
    const [blogs, setBlogs] = useState([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const[adminEmail,setAdminEmail]=useState('')
    const [adminPassword, setAdminPassword] = useState('')
    const [isAdmin, setIsAdmin] = useState(false);
    // const [isBlogChanged, setIsBlogChanged] = useState(false);
    
    useEffect(() => {
        const url = `https://powerful-tor-41926.herokuapp.com/blogs`;
        fetch(url).then(res => res.json()).then(data => setBlogs(data));
    }, [])
    useEffect(() => {
        const url = `https://powerful-tor-41926.herokuapp.com/admin`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data[0].email, "  ", data[0].password);
                setAdminEmail(data[0].email);
                setAdminPassword(data[0].password);
        });
    }, [])
    const handleSubmit = (event) => {
        console.log(email, "  ", password);
        console.log(adminEmail, "  ", adminPassword)
        
        if (email === adminEmail && password === adminPassword) {
            setIsAdmin(true);
            // console.log("this is admin");
        }
        else {
            // console.log("this is not admin")
            setIsAdmin(false);
        }
        event.preventDefault()
    }
    return (
        <div className="blog-list-container">
            <div className="container">
                {
                    isAdmin ? <BlogTable blogs={blogs} setBlog={setBlogs}></BlogTable> : 
                    <Login
                        handleSubmit={handleSubmit}
                        setEmail={setEmail}
                        setPassword={setPassword}
                    />
                }
            </div>
            

        </div>
    );
};

export default BlogList;