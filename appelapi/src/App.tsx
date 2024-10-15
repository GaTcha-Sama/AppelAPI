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

const.UserGrid: React.FC = () => {
  const [users, setUsers] = useState<User[]>([])}
  const [expendedUsers, setExpandedUsers] = useState<expandedUsers[]>([])

  useEffect(() => {
    fetchUsers();
  }, [])

const fetchUsers = async = () => {
  try {

  } catch(error) {console.log(error)}
}

function App() {

  return (
    <>
      <div>
        
      </div>
    </>
  )
}

export default App
