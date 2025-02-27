import { Link } from "react-router-dom";
import "./Home.css";

function Home({ photos, deletePhoto }) {
  return (
    <div>
      <h1 className="p-home">Photo Gallery</h1>
      <Link to="/add"><button className="a-btn">Add New Photo</button></Link>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
        {photos.map(photo => (
          <div key={photo.id} style={{ border: "1px solid #ddd", padding: "10px" }}>
            <Link to={`/photo/${photo.id}`}>
              <img src={photo.thumbnailUrl} alt={photo.title} width="100" height="100" />
              <p>{photo.title}</p>
            </Link>
            <button onClick={() => deletePhoto(photo.id)}>❌ Delete</button>
            <Link to={`/edit/${photo.id}`}><button>✏️ Edit</button></Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
