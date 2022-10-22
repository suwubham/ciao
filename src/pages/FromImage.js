import React, { useState } from "react";
import Process from "../components/Process";
import "../styles/FromImage.css";

export default function FromImage() {
  const [url, setUrl] = useState("");
  const handleImageUpload = (e) => {
    const [file] = e.target.files;
    setUrl(URL.createObjectURL(file));
  };

  return (
    <div className="wrapper-template">
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <div>FromImage</div>
      <Process src={url} />
    </div>
  );
}
