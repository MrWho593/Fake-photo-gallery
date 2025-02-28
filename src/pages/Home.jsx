import { Link } from "react-router-dom";
import "./Home.css";

function Home({ photos, deletePhoto }) {
  return (
    <div>
      <h1 style={{textAlign: "center", fontSize:"60px"}} className="p-home">Photo Gallery</h1>
      <Link to="/add"><button style={{marginLeft:"20px", backgroundColor:"#007bff", color:"white"}} className="a-btn">Add New Photo</button></Link>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
        {photos.map(photo => (
          <div key={photo.id} style={{ border: "1px solid #ddd", borderRadius: "10px", padding: "10px" }}>

            <Link style={{textAlign:"center"}} to={`/photo/${photo.id}`}>
              <img src={photo.thumbnailUrl} alt={photo.title} width="100" height="100" />
              <p >{photo.title}</p>
            </Link>

            <div className="button-group">
              <button className="d-btn" onClick={() => deletePhoto(photo.id)}>Delete</button>
              <Link to={`/edit/${photo.id}`}><button className="e-btn">✏️ Edit</button></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
