import React from 'react';

function StatelessMessage({ message }) {
  return (
    <div>
      <h2>Бессословный компонент (Stateless)</h2>
      <p>{message}</p>
    </div>
  );
}

export default StatelessMessage;
