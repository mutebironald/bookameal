import React from "react";

export default function Whoops404({ location }) {
  return (
    <div className="whoops-404">
      <h1>
        Resource not found at'{location.pathname}'
      </h1>
    </div>
  );
}
