import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "features/HomePage/HomePage";
import DetailCV from "features/Detail-CV/DetailCV";
import { Fragment } from "react";
import Auth from "features/Auth/Auth";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail-cv" element={<DetailCV />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Fragment>
  );
}

export default App;
