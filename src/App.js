import Dashboard from "./dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./login";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/*" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
