import React from 'react';
import FoodWheel from './components/FoodWheel';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-8">Modern_network สุ่มอาหาร </h1>
      <h1>by Ceo yoyo</h1>
      <FoodWheel />
    </div>
  );
};

export default Home;
