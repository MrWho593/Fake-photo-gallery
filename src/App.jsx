import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Home from "./pages/Home";
import PhotoDetails from "./pages/PhotoDetails";
import AddPhoto from "./pages/AddPhoto";
import EditPhoto from "./pages/EditPhoto";

function App() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/photos?_limit=10")
      .then(response => setPhotos(response.data))
      .catch(error => console.error("Error fetching photos:", error));
  }, []);

  const addPhoto = (newPhoto) => setPhotos([...photos, newPhoto]);
  const updatePhoto = (updatedPhoto) => {
    setPhotos(photos.map(photo => (photo.id === updatedPhoto.id ? updatedPhoto : photo)));
  };
  const deletePhoto = (id) => setPhotos(photos.filter(photo => photo.id !== id));

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home photos={photos} deletePhoto={deletePhoto} />} />
        <Route path="/photo/:id" element={<PhotoDetails />} />
        <Route path="/add" element={<AddPhoto addPhoto={addPhoto} />} />
        <Route path="/edit/:id" element={<EditPhoto photos={photos} updatePhoto={updatePhoto} />} />
      </Routes>
    </Router>
  );
}

export default App;
