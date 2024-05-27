import AuthForm from "./components/AuthForm";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLandingPage from "./pages/LandingPages/MainLandingPage";
import MainLayout from "./Layouts/MainLayout";
// import DashboardPage from "./pages/DashboardPage";
// import UserProfilePage from "./pages/UserProfilePage";
import RenderPages from "./Layouts/RenderPages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/authentication" element={<AuthForm />} />
        <Route path="/landing" element={<MainLandingPage />} />
        <Route path="/layout" element={<MainLayout />} />
        {/* <Route path="/dashboard" element={<DashboardPage />} /> */}
        {/* <Route path="/user-profile" element={<UserProfilePage />} /> */}
        <Route path="*" element={<RenderPages />} />
      </Routes>
    </Router>
  );
}

export default App;
