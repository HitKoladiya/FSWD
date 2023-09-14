import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Login from './components/Login';
import Register from './components/Register';
import { useState } from 'react';

function App() {
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert alert={alert}/>
          <div className='py-5 px-10'>
            <Routes>
              <Route path="/login" element={<Login showAlert={showAlert}/>} />
              <Route path="/register" element={<Register showAlert={showAlert}/>} />
              <Route path="/" element={<Home showAlert={showAlert}/>}></Route>
              <Route path="/about" element={<About />}></Route>
            </Routes>
          </div>
        </Router>
      </NoteState >
    </>
  );
}

export default App;
