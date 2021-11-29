// import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login, Register, NotFound, Dashboard, Profile, History } from './views';

const App = () => {
  return (
    <Router>
        <Main />
    </Router>
  )
}

const Main = () => {
  return(
      <main className="main">
          <Routes>
              <Route exact path="/" element={<Login />} />
              <Route exact path="/register" element={<Register />} />
              <Route exact path="/notfound" element={<NotFound />} />
              <Route exact path="/home" element={<Dashboard />} />
              <Route exact path="/profile" element={<Profile />} />
              <Route exact path="/history" element={<History />} />
          </Routes>
      </main>
  );
}

export default App;
