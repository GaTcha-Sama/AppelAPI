import React, { useState, useEffect } from 'react';
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
  const [users, setUsers] = useState<User[]>([]);
  const [expandedUsers, setExpandedUsers] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/?results=10');
      const data = await response.json();
      setUsers(data.results);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const toggleExpanded = (index: number) => {
    setExpandedUsers(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className='user-grid'>
      {users.map((user, index) => (
        <div key={index} className='user-card'>
          <img src={user.picture.medium} alt={`${user.name.first} ${user.name.last}`} />
          <h3>
            {`${user.name.title} 
            ${user.name.first} 
            ${user.name.last}`}
          </h3>
          <p>{user.email}</p>
          <button className='toggle-button' onClick={() => toggleExpanded(index)}>
            {expandedUsers[index] ? '-' : '+'}
          </button>
          {expandedUsers[index] && (
            <div className='expandeduser-card'>
              <p>Address: {user.location.street.number}</p>
              <p>Street: {user.location.street.name}</p>
              <p>City: {user.location.city}</p>
              <p>State: {user.location.state}</p>
              <p>Country: {user.location.country}</p>
              <p>Postcode: {user.location.postcode}</p>          
              <p>Phone: {user.phone}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default UserGrid;