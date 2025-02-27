import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./EditPhoto.css";

function EditPhoto({ photos, updatePhoto }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const existingPhoto = photos.find(photo => photo.id.toString() === id);

  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [isChanged, setIsChanged] = useState(false);

  useEffect(() => {
    if (existingPhoto) {
      setTitle(existingPhoto.title);
      setUrl(existingPhoto.url);
    } else {
      navigate("/"); // Redirect if photo not found
    }
  }, [existingPhoto, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isChanged) return;

    updatePhoto({ id: Number(id), title, url, thumbnailUrl: url, albumId: 1 });
    navigate("/");
  };

  return (
    <div className="edit-photo-container">
      <h1 className="e-photo">Edit Photo</h1>
      <button className="b-btn" onClick={() => navigate("/")}>Back to Home</button>
      
      <form onSubmit={handleSubmit} className="edit-photo-form">
        <label htmlFor="title">Title</label>
        <input 
          id="title"
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            setIsChanged(true);
          }}
          required 
        />

        <label htmlFor="url">Image URL</label>
        <input 
          id="url"
          type="text"
          value={url}
          onChange={(e) => {
            setUrl(e.target.value);
            setIsChanged(true);
          }}
          required 
        />

        <button className="s-btn" type="submit" disabled={!isChanged}>Update</button>
      </form>
    </div>
  );
}

export default EditPhoto;
