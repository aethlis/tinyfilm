import './App.css';
import Mainpage from "./routes/Mainpage";
import New from './routes/New';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Mainpage />}>
        </Route>
        <Route path="/new" element={<New />}>
         </Route>
      </Routes>
    </Router>
  );
}

export default App;
