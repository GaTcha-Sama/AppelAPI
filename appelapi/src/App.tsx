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

function App() {

  return (
    <>
      <div>
        
      </div>
    </>
  )
}

export default App
