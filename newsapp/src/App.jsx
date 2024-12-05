import React, { useState } from 'react';
import Navbar from './Component/Navbar/Navbar';
import Newboard from './Component/NewsBoard/Newboard';

const App = () => {
  const [category, setCategory] = useState("technology");
  return (
    <div>
      <Navbar setCategory={setCategory} />
      <Newboard category={category} /> 
    </div>
  );
};

export default App;
