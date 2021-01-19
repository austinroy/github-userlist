import './App.css';
import { useState, useEffect } from 'react';
import ListUsers from './components/ListUsers'

function App() {

  const [users, setUsers] = useState([])

  const loadUsers = async () => {
    const res = await fetch('https://api.github.com/users')
    const data = await res.json()
    setUsers(data)
    console.log(data)
  }

  useEffect(() => {
    loadUsers()
  },[])

  return (
    <div className="App">
      <header className="App-header">Github Users</header>
      <div className="content">
        <ListUsers users={users} />
      </div>
    </div>
  );
}

export default App;
