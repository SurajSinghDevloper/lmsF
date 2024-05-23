import AuthForm from "./components/AuthForm";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/authentication" element={<AuthForm />} />
      </Routes>
    </Router>
  );
}

export default App;
