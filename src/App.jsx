import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import HomePage from "./pages/HomePage";
import AuthForm from "./components/AuthForm";
import MainLandingPage from "./pages/LandingPages/MainLandingPage";
import MainLayout from "./Layouts/MainLayout";
import RenderPages from "./Layouts/RenderPages";
import PrivateRoute from "./utils/PrivateRoute";
import { isUserLoggedIn } from "./Redux/Actions/LoginAction";

function App() {
  const login = useSelector((state) => state.login);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!login.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, [login.authenticate, dispatch]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/authentication" element={<AuthForm />} />
        <Route element={<PrivateRoute isAuthenticated={login.authenticate} />}>
          <Route path="/features" element={<MainLandingPage />} />
          <Route path="/layout" element={<MainLayout />} />
          <Route path="*" element={<RenderPages />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
