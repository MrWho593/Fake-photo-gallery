import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./PhotoDetails.css";

function PhotoDetails() {
  const { id } = useParams();
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then((response) => setPhoto(response.data))
      .catch((error) => console.log(error));
  }, [id]);

  if (!photo) return <h2>Loading...</h2>;

  return (
    <div>
      <h1 className="p-details">{photo.title}</h1>
      <img src={photo.url} alt={photo.title} width="300" />
      <p>Album ID: {photo.albumId}</p>
      <Link to="/">
        <button className="b-btn-d">Back to Home</button>
      </Link>
    </div>
  );
}

export default PhotoDetails;
