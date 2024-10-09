import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Dashboard from "./Components/Dashboard";
import LoginSection from "./Components/LoginSection";
import { ProtectedRoute } from "./Components/ProtectedRoute";

function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
                <LoginSection />
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;
