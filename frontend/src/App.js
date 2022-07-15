import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import './App.css';
import {PATHS} from "./shared/paths";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={PATHS.LANDING_PAGE} exact element={<LandingPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
