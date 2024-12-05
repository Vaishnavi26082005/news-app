import React from 'react';
import image from '../Newsitem/news.jpg'; // assuming your image is in the 'src/assets' folder

const Newsitem = ({ title, description, src, url }) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: "320px" }}>
      <img src={src?src:image} style={{ height: "200px", width: "304px" }} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">{description ? description.slice(0, 110) : "Hi This news will be coming soon"}</p>
        <a href={url} className="btn btn-primary">Read More</a>
      </div>
    </div>
  );
};

export default Newsitem;
