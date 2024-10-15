import React, { useState, useEffect } from 'react';

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
  const [expandedUsers, setExpandedUsers] = useState<ExpandedUser[]>([]);

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

  return (
    <div>
      {users.map((user, index) => (
        <div key={index}>
          <img src={user.picture.medium} alt={`${user.name.first} ${user.name.last}`} />
          <h3>
            {`${user.name.title} 
            ${user.name.first} 
            ${user.name.last}`}
          </h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
)};

export default UserGrid;