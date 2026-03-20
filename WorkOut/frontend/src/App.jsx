import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "./hooks/UseAuthContext";

// Components and Pages
import Home from './Pages/Home';
import Navbar from "./Component/Navbar";
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import About from './Pages/About';
import Footer from "./Component/Footer";

function App() {
  const { user } = useAuthContext();
  const location = useLocation();

  const hideLayout = ['/login', '/signup'].includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col">
      {!hideLayout && <Navbar />}

      <main className="flex-1">
        <Routes>
          <Route
            path="/home"
            element={user ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/login"
            element={user ? <Navigate to="/home" /> : <Login />}
          />
          <Route
            path="/signup"
            element={!user ? <SignUp /> : <Navigate to="/home" />}
          />
          <Route
            path="/"
            element={<Navigate to={user ? "/home" : "/login"} />}
          />
        </Routes>
      </main>

      {!hideLayout && <Footer />}
    </div>
  );
}

export default App;