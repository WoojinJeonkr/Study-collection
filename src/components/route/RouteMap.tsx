import { Route, Routes } from 'react-router-dom';
import { Home } from '../shared';

const RouteMap = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default RouteMap;