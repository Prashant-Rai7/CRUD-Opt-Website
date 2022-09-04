// import logo from './logo.svg';
import './App.css';

//components added
import NavBar from './components/NavBar';
import CodeForInterview from './components/CodeForInterview';
import AllUser from './components/AllUser';
import AddUser from './components/AddUser';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import EditUser from './components/EditUser';


function App() {
  return (
      <BrowserRouter>
        <NavBar/>
        <Routes>
        <Route path="/" element={<CodeForInterview/>} />
        <Route path="/all" element={<AllUser/>} />
        <Route path="/add" element={<AddUser/>} />
        <Route path='/edit/:id' element={<EditUser/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
