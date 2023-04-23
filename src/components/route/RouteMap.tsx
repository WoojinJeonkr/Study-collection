import { Route, Routes } from 'react-router-dom';
import { Home, ToastUIPage } from '../shared';

const RouteMap = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/toastui" element={<ToastUIPage />} />
    </Routes>
  );
};

export default RouteMap;