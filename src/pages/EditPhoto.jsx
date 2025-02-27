import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditPhoto({ photos, updatePhoto }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const existingPhoto = photos.find(photo => photo.id.toString() === id);

  const [title, setTitle] = useState(existingPhoto?.title || "");
  const [url, setUrl] = useState(existingPhoto?.url || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePhoto({ id: Number(id), title, url, thumbnailUrl: url, albumId: 1 });
    navigate("/");
  };

  return (
    <div>
      <h1>Edit Photo</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} required />
        <button type="submit">Update</button>
        <button className="backBtn" onClick={() => navigate("/")}>Back to Home</button>
      </form>
    </div>
  );
}

export default EditPhoto;
