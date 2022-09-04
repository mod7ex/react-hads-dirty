import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function Redirect() {
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      <h3>the not allowed page (click to render the navigate component so it can send you somewhere else (home)) </h3>

      <button onClick={() => setShow(true)}>click to quit (using a component 'Navigate') </button>

      <button onClick={() => navigate("/")}>click to quit (using a navigation function) </button>

      {show && <Navigate to="/" />}
    </>
  );
}
