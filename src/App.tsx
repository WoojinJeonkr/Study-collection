import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Counter from './component/Counter';
import Practice from './component/Practice';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/practice' element={<Practice />}>
          <Route path='counter' element={<Counter />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
