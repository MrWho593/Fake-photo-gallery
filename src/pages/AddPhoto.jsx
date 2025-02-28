import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AddPhoto.css";

function AddPhoto({ addPhoto }) {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPhoto = { title, url, thumbnailUrl: url, albumId: 1 };
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/photos",
        newPhoto
      );
      addPhoto({ ...response.data, id: Math.random() });
      navigate("/");
    } catch (error) {
      console.error("Error adding photo:", error);
    }
  };

  return (
    <div>
      <h1 className="n-photo">Add New Photo</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
        <button className="s-btn" type="submit">
          Add Photo
        </button>
        <button className="b-btn" onClick={() => navigate("/")}>
          Back to Home
        </button>
      </form>
    </div>
  );
}

export default AddPhoto;
