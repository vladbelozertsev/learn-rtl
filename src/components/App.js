import '../App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchTypes from './SearchTypes';
import SearchVariants from './SearchVariants';
import Nav from './Nav';

export default function App() {
  return (
    <Router>
      <div>
        <h2>Перейти к уроку</h2>
        <Nav />
        <Switch>
          <Route path="/search-types">
            <SearchTypes />
          </Route>
          <Route path="/search-variants">
            <SearchVariants />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
