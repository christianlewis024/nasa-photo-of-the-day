import React from "react";

const Photo = props => {
  return (
    <html>
      <div
        className="photo-list"
        style={{
          backgroundImage: "url(" + props.url + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      >
        <img src={props.imgUrl} />
      </div>
    </html>
  );
};

export default Photo;
