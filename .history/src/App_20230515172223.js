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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Orders from './components/Orders';
import Emergency from './components/Emergency';
import SubService from './components/SubService';
import Service from './components/Service';
import Sentiments from './components/Pages/Sentiments';
import Payment from './components/Pages/Payment';
import Contact from './components/Pages/Contact';
import Terms from './components/Pages/Terms';
import Privacy from './components/Pages/Privacy';
import Notification from './components/Pages/Notification';
import Banner from './components/Pages/Banner';
import ConciergService from './components/Pages/ConciergService';
import Customer from './components/Pages/Customer';

function App() {
  return (
    <>
    <ToastContainer />
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
        <Route path='/order' element={<Orders />} />
        <Route path='/emergency-service' element={<Emergency />} />
        <Route path='/sub-service' element={<SubService />} />
        <Route path='/service' element={<Service />} />
        <Route path='/sentiments' element={<Sentiments />} />

        <Route path='/payment' element={<Payment />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/terms' element={<Terms />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/notification' element={<Notification />} />
        <Route path='/banner' element={<Banner />} />
        <Route path='/concierg-service' element={<ConciergService />} />
        <Route path='/customer' element={<Customer />} />
      </Routes>
    </Router>
    </>

  );
}

export default App;
