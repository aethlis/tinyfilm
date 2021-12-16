import './App.css';
import Mainpage from "./routes/Mainpage";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        {/* <Route path="/:id"  element={}>
        </Route> */}
        <Route path="/"  element={<Mainpage />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
