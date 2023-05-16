import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import DashBoard from './components/dashboard';
import Staff from "./components/staff";
import Subs from "./components/subscription";
import RemoveStaff from "./components/remove_staff";
import Review from "./components/review";
import AddScreen from "./components/add-screen";
import ForgetPass from "./components/forget-pass";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/subs" element={<Subs />} />
        <Route path="/remove-staff" element={<RemoveStaff />} />
        <Route path="/review" element={<Review />} />
        <Route path="/add" element={<AddScreen />} />
        <Route path="/for-pass" element={<ForgetPass />} />
      </Routes>
    </Router>
  );
}

export default App;
