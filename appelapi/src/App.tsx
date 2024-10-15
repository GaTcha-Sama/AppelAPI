import { useState, useEffect } from 'react'
import './App.css'

interface User {
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  picture: {
    medium: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: string;
  };
  phone: string;
}

const UserGrid: React.FC = () => {
  const [users, setUsers] = useState<User[]>([])}
  const [expandedUsers, setExpandedUsers] = useState<ExpandedUsers[]>([])

  useEffect(() => {
    fetchUsers();
  }, [])

const fetchUsers = async = () => {
  try {
    const response = await fetch('https://randomeuser.me');
    const data = await response.json();
    setUsers(data.results);

  } catch(error) {console.log('Error fetching users', error)}
}

  return (
      <div>
        <img />
        <h2>nom prenom</h2>
        <h1>email</h1>
        <button onClick={}>
          
        </button>
      </div>
  )

export default UserGrid
