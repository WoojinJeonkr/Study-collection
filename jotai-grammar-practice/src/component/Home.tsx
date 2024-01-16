import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const onMoveCounterPractice = () => {
    navigate('/practice/counter');
  }
  return (
    <div>
      Welcome to jotai Practice!
      <li>Counter Practice <button onClick={onMoveCounterPractice}>Go</button></li>
    </div>
  );
};

export default Home;