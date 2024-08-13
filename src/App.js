import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReservePage from './components/ReservePage';
import ConfirmedBooking from './components/ConfirmedBooking';

function App() {
  return (
    <Router>
      <div className='container'>
        <Routes>
        <Route path="/" element={<Main />} /> 
          <Route path="/home" element={<Main />} /> 
          <Route path="/reserve-table" element={<ReservePage />} /> 
          <Route path="/booking-confirmed" element={<ConfirmedBooking/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
