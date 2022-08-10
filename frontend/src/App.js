import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import "./App.css";
import { PATHS } from "./shared/paths";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={PATHS.LANDING_PAGE} exact element={<LandingPage />} />
        <Route path={PATHS.PROFILE_PAGE} exact element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
