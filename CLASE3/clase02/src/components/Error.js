import React from "react";
const Error = ({ message }) => {
  return (
    <div className="alert alert-danger">
      <p>{message}</p>
    </div>
  );
};

export default Error;
