import React from "react";
import Frame from "./Frame";

const VisualPreview = ({ source }) => (
  <Frame
    style={{
      backgroundColor: "white",
      flex: 1,
      width: "100%",
      outline: "none",
      border: "none"
    }}
  >
    <div dangerouslySetInnerHTML={{ __html: source }} />
  </Frame>
);

export default VisualPreview;
