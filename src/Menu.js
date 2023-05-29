import React from "react";

const Menu = ({ onSelectVideo, videoValues }) => {
  const handleVideoChange = (event) => {
    const selectedVideo = event.target.value;
    onSelectVideo(selectedVideo);
  };

  return (
    <div className="menu">
      <label htmlFor="videoSelect">Select Video:</label>
      <select id="videoSelect" onChange={handleVideoChange}>
        {videoValues.map((video) => (
          <option key={video} value={video}>
            {video}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Menu;

