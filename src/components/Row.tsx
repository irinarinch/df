import React from 'react';
import { IChair } from '../types';
import Chair from './Chair';

interface RowProps {
  row: number; // Номер текущего ряда
  chairs: IChair[]; // Все кресла
  onClick: ()=>void;
}

const Row = ({ row, chairs, onClick }: RowProps) => {
  // Фильтруем кресла для текущего ряда
  

  return (
    <div className="conf-step__row">
      {chairs.map((chair, place) => (
        <Chair
          key={`${row}-${place}`}
          chair={chair}
          onClick={onClick}
        />
      ))}
    </div>
  );
};

export default Row;