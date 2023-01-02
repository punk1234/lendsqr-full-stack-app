import './App.css';

import Login from "./pages/Login/Login";
import Error from "./pages/__Error__/Error";
import UsersDashboardPage from './pages/UsersDashboard/UsersDashboard';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/users-dashboard" element={<UsersDashboardPage />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
