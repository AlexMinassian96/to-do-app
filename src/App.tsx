import React from 'react';
import TodoCards from './components/TodoCards';

const header = () => <h1>Hello World</h1>;

const App: React.FC = (): JSX.Element => {
  return (
    <div className="App">
      <TodoCards children={header()}/>
    </div>
  );
}

export default App;

// TodoCards children={() => <h1>Hello World</h1}