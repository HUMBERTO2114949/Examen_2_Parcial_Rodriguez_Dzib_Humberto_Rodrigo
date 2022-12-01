import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/home";
import Acercade from './pages/acercade';
import Show from './pages/heroe/Show';
import Edit from './pages/heroe/Edit';

function App() {
  return (
    <div className="App">    
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="heroes" element={<Show />} />
          <Route path="Edit/:id" element={<Edit />} />
          <Route path="acercade" element={<Acercade />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;