import './App.css';
import Mainpage from "./routes/Mainpage";
import New from "./routes/New";
import Weekly from "./routes/Weekly";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { FetchAPIProvider } from "./contexts/FetchAPI"
import { HoverOverProvider } from './contexts/HoverContext';
import { SearchFilterProvider } from './contexts/SearchFilter';
import { FiltGenreProvider } from './contexts/FilterContext';
import { ApolloProvider } from '@apollo/client';
import client from './client';




function App() {
  return (
    <ApolloProvider client={client}>
      <HoverOverProvider>
        <SearchFilterProvider>
          <FetchAPIProvider>
            <FiltGenreProvider>

              <Router basename="/">
                <Routes>
                  <Route path="/" element={<Mainpage />}>
                  </Route>
                  <Route path="/weekly" element={<Weekly />}>
                  </Route>
                  <Route path="/new" element={<New />}>
                  </Route>
                </Routes>
              </Router>
              
            </FiltGenreProvider>
          </FetchAPIProvider>
        </SearchFilterProvider>
      </HoverOverProvider>
    </ApolloProvider>
  );
}

export default App;
