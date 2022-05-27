import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Main from "./views/Main";
import Login from "./views/Login";
import Register from "./views/Register";
import { UserProvider } from "./contexts/userContext";
import Libros from "./views/Libros";
import Detail from "./views/Detail";
import Create from "./views/Create";
import Edit from "./views/Edit";
import Listar from "./views/Listar";
import Search from "./views/Search";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Router>
          <ul className="menu1">
            {/* <div>
              <Link to="/">Main</Link>
            </div> */}
           {/*  <div>
              <Link to="/login">Login</Link>
            </div>
            <div>
              <Link to="/registro">Registro</Link>
            </div> */}
          </ul>

          <Routes>
            <Route path="/" element={<Main /> } />
            <Route path="/login" element={<Login></Login>} />
            <Route path="/registro" element={<Register></Register>} />
            <Route path="/libros" element={<Libros />} />
            <Route path="/libros/:id" element={<Detail></Detail>} />
            <Route path="/libros/new" element={<Create/>} />
            <Route path="/libro/edit/:id" element={<Edit/>} />
            <Route path="/listar/:id" element={<Listar/>} />
            <Route path="/listarBusqueda/:id" element={<Search/>} />

          </Routes>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;