import logo from './logo.svg';
import './App.css';
import AddPatient from './components/AddPatient';
import AddVisitor from './components/AddVisitor';
import SearchPatient from './components/SearchPatient';
import SearchVisitor from './components/SearchVisitor';
import HospitalNavbar from './components/HospitalNavbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
  <Routes>
<Route path='/' element={<AddPatient/>} />
<Route path='/vis' element={<AddVisitor/>} />
<Route path='/sp' element={<SearchPatient/>} />
<Route path='/sv' element={<SearchVisitor/>} />



  </Routes>
  
  
  
  
  </BrowserRouter>
  );
}

export default App;
