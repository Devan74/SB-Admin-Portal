import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../src/sb-admin-2.css';
import '../src/fontawesome-free/css/all.min.css';
import Topbar from './Topbar';
import Dashboard from './Dashboard';
import User from './User';
import Footer from './Footer';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <Topbar />
          <Routes>
            <Route path="/dashboard" element={<Dashboard/>}>   </Route>
            <Route path="/users" element={<User/>}>   </Route>
          </Routes>
          
          
        </div>
        <Footer/>
      </div>
    </div>
    
    </BrowserRouter>
    
  );
}

export default App;
