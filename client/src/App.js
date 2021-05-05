import axios from 'axios';
import { useState } from 'react';

import './App.css';

const App = () => {

  const [usernameFromServer, setUsernameFromServer] = useState([]);
  const [username, setUsername] = useState('');
  const [names, setNames] = useState([]);

  const getUsername = () => {
    axios.get('/api/get-names')
    .then(res => {
      console.log(res);
      setNames(res.data);
    })
    .catch(err => {
      console.log(err);
    });
  };

  const sendUsername = () => {
    const user = {
      username
    };

    axios.post('/api/validate-username', user)
    .then(res => {
      console.log(res);
      setUsernameFromServer(res.data);
    })
    .catch(err => {
      console.log(err);
    });
  };

  return (
    <div className="App">
      <input
        onChange={(e) => setUsername(e.target.value)}
        type='text'
        value={username}
      />
      <button
        onClick={sendUsername}
      >
        SEND USERNAME TO NODE.JS
      </button>
      <button
        onClick={getUsername}
      >
        GET USERNAME FROM NODE.JS
      </button>
      <div>
        {usernameFromServer}
      </div>
      <div>
        {names}
      </div>
    </div>
  );
}

export default App;
