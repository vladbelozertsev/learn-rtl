import logo from '../logo.svg';
import { useState, useEffect } from 'react';

const getUser = () => Promise.resolve({ id: 1, name: 'Vasya' });

const Search = (props) => {
  return (
    <div className="inp-box">
      <label htmlFor="search">{props.children}</label>
      <input id="search" placeholder="search text..." type="text" value={props.value} onChange={props.onChange} />

      <button>Отправить</button>
    </div>
  );
};

const App = () => {
  const [search, setSearch] = useState('yoyo');
  const [user, setUser] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);
  };

  useEffect(() => {
    const loadUser = async () => {
      const user = await getUser();
      setUser(user);
    };
    loadUser();
  }, []);

  useEffect(() => {
    console.log(search);
  }, [search]);

  return (
    <form onSubmit={handleSubmit} aria-label="form">
      {user && <h2>Logged in as {user.name}</h2>}
      <img src={logo} alt="search image" />
      <Search value={search} onChange={handleChange}>
        Search:
      </Search>
      <p>Searches for {search ? search : '...'}</p>
    </form>
  );
};

export default App;
