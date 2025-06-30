import React from 'react';
import StatefulCounter from './components/StatefulCounter';
import StatelessMessage from './components/StatelessMessage';
import ClassCounter from './components/ClassCounter';

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <StatefulCounter />
      <br />
      <StatelessMessage message="Привет из статического компонента!" />
      <br />
      <ClassCounter />
    </div>
  );
}

export default App;