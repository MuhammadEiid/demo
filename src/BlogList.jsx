import { Link } from "react-router-dom";

const BlogList = ({ blogs }) => {
  return (
    <div className="blogList d-flex flex-wrap justify-content-between align-content-center text-center">
      {blogs.map((blog) => (
        <div className="blog-preview col-md-4" key={blog.id}>
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">{blog.title}</h2>
              <p className="card-text">{blog.body}</p>
              <Link to={`/blogs/${blog.id}`}>
                <button className="btn btn-primary">More Details</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
