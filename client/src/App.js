import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './views/authentication/Register';
import Login from './views/authentication/Login'
import CollectionCard from './components/shared/CollectionCard/CollectionCard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
            <Route element={<Register />} path="/register" />
            <Route element={<Login />} path="/login" />
            <Route element={<CollectionCard />} path='/test' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
