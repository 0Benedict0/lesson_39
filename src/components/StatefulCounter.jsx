import React, { useState } from 'react';

function StatefulCounter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Сословный компонент (Stateful)</h2>
      <p>Счётчик: {count}</p>
      <button onClick={() => setCount(count + 1)}>Увеличить</button>
    </div>
  );
}

export default StatefulCounter;
