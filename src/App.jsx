import AuthForm from "./components/AuthForm";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLandingPage from "./pages/LandingPages/MainLandingPage";
import MainLayout from "./Layouts/MainLayout";
import RenderPages from "./Layouts/RenderPages";
import PrivateRoute from "./utils/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn } from "./Redux/Actions/LoginAction";
import { useEffect } from "react";

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
        {/* <Route path="/landing" element={<MainLandingPage />} /> */}
        <Route path="/layout" element={<MainLayout />} />
        <Route path="*" element={<RenderPages />} />

        <Route element={<PrivateRoute isAuthenticated={login.authenticate} />}>
          <Route path="/landing" element={<MainLandingPage />} />
          {/* Add more protected routes here */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
