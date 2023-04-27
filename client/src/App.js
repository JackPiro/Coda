import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Register from './views/authentication/Register';
// import Login from './views/authentication/Login'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    </div>
  );
}

export default App;
