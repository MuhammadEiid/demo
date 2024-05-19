import BlogList from "./BlogList.jsx";
import UseFetch from "./useFetch.jsx";

const Home = () => {
  const {
    data: blogs,
    IsPending,
    error,
  } = UseFetch("https://jsonplaceholder.typicode.com/posts");

  //   const handleDelete = (id) => {
  //     const newBlogs = blogs.filter((blog) => blog.id !== id);
  //     setBlogs(newBlogs);
  //   };

  return (
    <div className="home p-4">
      <div className="container ">
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

        {blogs && <BlogList blogs={blogs} />}
      </div>
    </div>
  );
};

export default Home;
