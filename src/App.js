import './styles/popup.css@v=0.0.2.css';
import './styles/actions-promo.css@v=0.0.5.css';
import './styles/PopupCard.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter and necessary components
import Main from './components/Main';
import Admin from './components/Admin'
import Auth from './components/authAdmin'
import CreateUser from './components/CreatUser'

function App() {
  return (
    <body data-theme="light-02">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/auth" element={<Auth />} />
          <Route path="/admin/createuser" element={<CreateUser />} />

        </Routes>
      </Router>
    </body>
  );
}

export default App;
