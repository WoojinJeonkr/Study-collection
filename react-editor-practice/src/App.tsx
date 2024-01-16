import React from 'react';
import { RouteMap } from './components';
import { Provider } from 'jotai';

function App() {
  return (
    <Provider>
      <RouteMap />
    </Provider>
  );
}

export default App;
