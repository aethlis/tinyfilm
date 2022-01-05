import './App.css';
import Mainpage from "./routes/Mainpage";
import New from "./routes/New";
import Weekly from "./routes/Weekly";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FetchAPIProvider } from "./contexts/FetchAPI"
import { HoverOverProvider } from './contexts/HoverContext';
import { SearchFilterProvider } from './contexts/SearchFilter';
import { FiltGenreProvider } from './contexts/FilterContext';

function App() {
  return (
    <FiltGenreProvider>
      <HoverOverProvider>
        <SearchFilterProvider>
          <FetchAPIProvider>
            <Router basename={process.env.PUBLIC_URL}>
              <Routes>
                <Route path="/" element={<Mainpage />}>
                </Route>
                <Route path="/weekly" element={<Weekly />}>
                </Route>
                <Route path="/new" element={<New />}>
                </Route>
              </Routes>
            </Router>
          </FetchAPIProvider>
        </SearchFilterProvider>
      </HoverOverProvider>
    </FiltGenreProvider>
  );
}

export default App;
