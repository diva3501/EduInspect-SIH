import React, { useState } from 'react';
import { getLoggedIn } from "../services/authService";
import { Link } from "react-router-dom";
import './VideoConference.css';

const VideoConference = () => {
  const loggedIn = getLoggedIn();
  const [selectedImages, setSelectedImages] = useState([]);
  const [showNotificationPopup, setShowNotificationPopup] = useState(false);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const imageUrls = files.map(file => URL.createObjectURL(file));
    setSelectedImages(prevImages => [...prevImages, ...imageUrls]);
  };

  const handleSubmitImages = () => {
    console.log('Images submitted:', selectedImages);
    setShowNotificationPopup(true);
    
    // Reload the page after 5 seconds
    setTimeout(() => {
      setSelectedImages([]); // Clear images
      setShowNotificationPopup(false);
      window.location.reload(); // Reload the page
    }, 5000);
  };

  return (
    <div className="container mt-5">
      {loggedIn ? (
        <div>
          {/* Instructions Card */}
          <div className="card mb-4 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Instructions for Uploading Images</h5>
              <p className="card-text">
                Please upload relevant images for the conference. You can select multiple images at once.
                After selecting, you'll be able to preview the images before submission. Ensure that the images are clear and represent your work effectively.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Upload Images for the Conference</h2>

          <div className="mb-4">
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageChange}
              className="form-control mb-4"
            />
          </div>

          <div className="row mb-4">
            {selectedImages.map((image, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <img src={image} alt={`Uploaded Preview ${index + 1}`} className="img-fluid rounded shadow" />
              </div>
            ))}
          </div>

          <div className="mb-6">
            <button
              className="btn btn-primary w-100"
              onClick={handleSubmitImages}
              disabled={selectedImages.length === 0}
            >
              Submit Images
            </button>
          </div>

          {showNotificationPopup && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-lg font-semibold mb-2 text-green-600">Submitted Successfully!</h3>
                <p className="text-gray-700">Your images have been submitted for the conference.</p>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">You're Not Logged In</h1>
          <p className="text-gray-600 mb-6">Please log in to access the image upload feature.</p>
          <Link to="/login" className="btn btn-dark">Login</Link>
        </div>
      )}
    </div>
  );
};

export default VideoConference;
