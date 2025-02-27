import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CreatePhoto({ addPhoto }) {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPhoto = { title, url, thumbnailUrl: url, albumId: 1 };
    try {
      const response = await axios.post("https://jsonplaceholder.typicode.com/photos", newPhoto);
      addPhoto({ ...response.data, id: Math.random() });
      navigate("/");
    } catch (error) {
      console.error("Error adding photo:", error);
    }
  };

  return (
    <div>
      <h1>Add New Photo</h1>
      <button className="backBtn" onClick={() => navigate("/")}>Back to Home</button>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" placeholder="Image URL" value={url} onChange={(e) => setUrl(e.target.value)} required />
        <button type="submit">Add Photo</button>
      </form>
    </div>
  );
}

export default CreatePhoto;
