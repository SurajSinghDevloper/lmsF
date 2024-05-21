import AuthForm from "./components/AuthForm";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/authentication" element={<AuthForm />} />
          <Outlet />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
