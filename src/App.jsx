import AuthForm from "./components/AuthForm";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLandingPage from "./pages/MainLandingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/authentication" element={<AuthForm />} />
        <Route path="/landing" element={<MainLandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
