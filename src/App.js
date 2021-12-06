import { Routes, Route } from "react-router-dom";

import "./App.css";

import SignIn from "./components/signin/signin";
import SignUp from "./components/signup/signup";
import Landing from "./components/landing/landing";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="landing" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
