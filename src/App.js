import './App.css';
import Mainpage from "./routes/Mainpage";
import New from './routes/New';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {FetchAPIProvider} from "./contexts/FetchAPI"

function App() {
  return (
    <FetchAPIProvider>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Mainpage />}>
          </Route>
          <Route path="/new" element={<New />}>
          </Route>
        </Routes>
      </Router>
    </FetchAPIProvider>
  );
}

export default App;
