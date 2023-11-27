import './styles/popup.css@v=0.0.2.css';
import './styles/actions-promo.css@v=0.0.5.css';
import './styles/PopupCard.css';
import { Route, Routes } from 'react-router-dom'; // Import BrowserRouter and necessary components
import Main from './components/Main';
import Admin from './components/Admin'
import Auth from './components/authAdmin'
import CreateUser from './components/CreatUser'
import Delete from "./components/Delete";
import BlogAdmin from "./components/BlogAdmin"
import DeleteBlog from "./components/DeleteBlog";
import Blog from "./components/Blog";

function App() {
  return (
    <body data-theme="light-02">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/auth" element={<Auth />} />
          <Route path="/admin/createuser" element={<CreateUser />} />
          <Route path="/admin/delete" element={<Delete />} />
          <Route path="/admin/blog" element={<BlogAdmin />} />
          <Route path="/admin/blog/delete" element={<DeleteBlog />} />


        </Routes>
    </body>
  );
}

export default App;
