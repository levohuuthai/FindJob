import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "features/HomePage/HomePage";
import DetailCV from "features/Detail-CV/DetailCV";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail-cv" element={<DetailCV />} />
      </Routes>
    </Fragment>
  );
}

export default App;
