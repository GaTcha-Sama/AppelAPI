import React, { useState } from 'react';
import './App.css'
import { useFetch } from './useFetch';

type ApiResponse = {
  results: User[];
  infos: any
}
type User = {
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
  const{error, loading, results} = useFetch<ApiResponse>({url : 'https://randomuser.me/api/?results=10'})
  const [expandedUsers, setExpandedUsers] = useState<{ [key: number]: boolean }>({});

 if(loading) {
  return <div>
      Loading : en cours de chargement
    </div>
 }

 if(error) {
  return <div>
    Error : {error}
  </div>
 }

  const toggleExpanded = (index: number) => {
    setExpandedUsers(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };
  if(!results) return;

  return (
    <div className='user-grid'>
      {results.results.map((user, index) => (
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