import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const BlogTable = ({ blogs}) => {
    // console.log(blogs);
    const url = `https://powerful-tor-41926.herokuapp.com/addBlog`;
	// const url = 'http://localhost:5055/addBlog';

    let index = 0;
    const history = useHistory();

    const handleClick=() => {
        history.push("/addBlog")
    }

    const handleDeleteBlog = (id) => {
        console.log(id);
        
        
        fetch(`http://localhost:5055/deleteBlog/${id}`, {
            method:'Delete'
        })
            .then(res => res.json())
            .then(result => {
                console.log("Deleted successfully");
        })
    }
	return (
		<div>
			<table className="table table-striped">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Title</th>
						<th scope="col">Action</th>
					</tr>
				</thead>
				<tbody>
                    {blogs.map((blog) => {
                        index++;
                        return (
                            <tr>
                                <th scope="row">{ index}</th>
							<td>{blog.title}</td>
                            <td>

                                <button onClick={()=>handleDeleteBlog(blog._id)} className="btn btn-danger">Delete </button>
                                    
                            </td>
						</tr>
                        )
						
					})}
				</tbody>
            </table>
            <button onClick={handleClick} className="btn btn-success">Create Blog</button>
		</div>
	);
};

export default BlogTable;
