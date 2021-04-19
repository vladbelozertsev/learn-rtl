import { useState, useEffect } from 'react';
import './App.css';

const Search = (props) => {
  return (
    <div>
      <label htmlFor="search">{props.children}</label>
      <input type="text" id="search" defaultValue={props.value} onChange={props.onChange} />
    </div>
  );
};

const App = () => {
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    console.log(search);
  }, [search]);

  return (
    <div>
      <Search value={search} onChange={handleChange}>
        Search:
      </Search>
      <p>Searches for {search ? search : '...'}</p>
    </div>
  );
};

export default App;
