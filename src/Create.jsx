import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userID, setUserID] = useState("1");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);
    const blog = {
      title,
      body,
      userID,
    };
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        blog
      );

      if (response.status === 200 || response.status === 201) {
        setIsPending(false);

        console.log("Blog posted successfully");
        setBody("");
        setTitle("");
        setUserID("1");
      }
      navigate("/"); // Navigate to the home page after form submission

      return response.data;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };

  return (
    <div className="create" style={{ padding: "6rem 0rem 4rem 0rem" }}>
      <div className="container">
        <h2 className="text-center">Add New Blog</h2>
        <form className="pt-5" onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-6">
              <label htmlFor="blogTitle" className="form-label">
                Blog Title:
              </label>
              <input
                type="text"
                className="form-control"
                id="blogTitle"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="userId" className="form-label">
                User ID:
              </label>
              <select
                className="form-select"
                id="userId"
                value={userID}
                onChange={(e) => setUserID(e.target.value)}
              >
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
            <div className="col-12">
              <label htmlFor="blogBody" className="form-label">
                Blog Body:
              </label>
              <textarea
                className="form-control"
                id="blogBody"
                rows="3"
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
              ></textarea>
            </div>
            <div className="col-12 text-end">
              {!isPending && (
                <button type="submit" className="btn btn-primary">
                  Add Blog
                </button>
              )}
              {isPending && (
                <button type="submit" className="btn btn-success">
                  Adding Blog
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
