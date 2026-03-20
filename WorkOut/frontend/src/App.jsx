import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "./hooks/UseAuthContext";

// Components
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";

// Pages
import Landing from './Pages/Landing';
import Home from './Pages/Landing';
import Profile from './Pages/Profile';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import About from './Pages/About';

function App() {
  const { user } = useAuthContext();
  const location = useLocation();

  const hideLayout = ['/login', '/signup'].includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col">
      {!hideLayout && <Navbar />}

      <main className="flex-1">
        <Routes>
          {/* Public landing page */}
          <Route
            path="/"
            element={user ? <Navigate to="/home" /> : <Landing />}
          />

          {/* Dashboard - workouts list + add form */}
          <Route
            path="/home"
            element={user ? <Home /> : <Navigate to="/login" />}
          />

          {/* Profile - user stats & info */}
          <Route
            path="/profile"
            element={user ? <Profile /> : <Navigate to="/login" />}
          />

          {/* About page */}
          <Route
            path="/about"
            element={<About />}
          />

          {/* Auth pages */}
          <Route
            path="/login"
            element={user ? <Navigate to="/home" /> : <Login />}
          />
          <Route
            path="/signup"
            element={!user ? <SignUp /> : <Navigate to="/home" />}
          />

          {/* Fallback */}
          <Route
            path="*"
            element={<Navigate to={user ? "/home" : "/"} />}
          />
        </Routes>
      </main>

      {!hideLayout && <Footer />}
    </div>
  );
}

export default App;