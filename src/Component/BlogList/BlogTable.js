import React from 'react';

const BlogTable = ({ blogs }) => {
    // console.log(blogs);
    let index = 0;
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

                                <button className="btn btn-danger">Delete </button>
                                    
                            </td>
						</tr>
                        )
						
					})}
				</tbody>
			</table>
		</div>
	);
};

export default BlogTable;
