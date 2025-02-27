import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function PhotoDetails() {
  const { id } = useParams();
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then(response => setPhoto(response.data))
     .catch(error => console.log(error));
  }, [id]);

  if (!photo) return <h2>Loading...</h2>;

  return (
    <div>
      <h1>{photo.title}</h1>
      <img src={photo.url} alt={photo.title} width="300" />
      <p>Album ID: {photo.albumId}</p>
      <button className="backBtn" onClick={() => navigate("/src/pages/Home.jsx")}>Back to Home</button>
    </div>
  );
}

export default PhotoDetails;
