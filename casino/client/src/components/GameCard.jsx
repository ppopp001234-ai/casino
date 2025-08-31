import React from "react";
import { useNavigate } from "react-router-dom";

const GameCard = ({ name, icon, route }) => {
  const navigate = useNavigate();
  return (
    <button
      className="bg-black bg-opacity-40 hover:bg-opacity-60 rounded-lg p-6 shadow-lg flex flex-col items-center justify-center transition-all"
      onClick={() => navigate(route)}
    >
      <div className="text-4xl mb-2">{icon}</div>
      <div className="text-lg font-semibold">{name}</div>
    </button>
  );
};

export default GameCard;
