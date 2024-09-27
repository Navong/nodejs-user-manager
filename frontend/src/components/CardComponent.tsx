import React from "react";

interface Card {
  id: number;
  name: string;
  email: string;
}

interface CardProps {
  card: Card;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const CardComponent: React.FC<CardProps> = ({ card, onEdit, onDelete }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 m-4">
      <p className="text-gray-500 mb-4">ID: {card.id}</p>
      <h3 className="text-xl font-semibold mb-2">{card.name}</h3>
      <p className="text-gray-600 mb-2">{card.email}</p>
      <div className="flex justify-end space-x-2">
        <button
          onClick={() => onEdit(card.id)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(card.id)}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CardComponent;
