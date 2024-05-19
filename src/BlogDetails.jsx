import { useNavigate, useParams } from "react-router-dom";
import UseFetch from "./useFetch.jsx";
import axios from "axios";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    data: blog,
    IsPending,
    error,
  } = UseFetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `https://jsonplaceholder.typicode.com/posts/${blog.id}`
      );

      console.log(response); // Log the response data
      navigate("/");
    } catch (error) {
      console.error("Error:", error); // Log any errors
      throw error; // Rethrow the error for handling at a higher level
    }
  };

  return (
    <div className="blog-details" style={{ padding: "8rem 0rem 4rem 0rem" }}>
      {error && (
        <div className="alert alert-danger text-center" role="alert">
          {error}, Please try again later.
        </div>
      )}
      {IsPending && (
        <div
          className="d-flex justify-content-center align-items-center  "
          style={{ minHeight: "80vh" }}
        >
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      {blog && (
        <article className="blog-preview container mt-4 d-flex flex-column">
          <h2 className="fs-2">{blog.title}</h2>
          <p className="my-3">{blog.body}</p>
          <div className="text-end">
            <button className="btn btn-danger" onClick={handleDelete}>
              Delete blog
            </button>
          </div>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
