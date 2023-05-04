import { Route, Routes } from 'react-router-dom';
import { Home, ToastUIPage } from '../shared';
import { Crawl } from '../slash';

const RouteMap = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/toastui" element={<ToastUIPage />} />
      <Route path="/slash" element={<Crawl />} />
    </Routes>
  );
};

export default RouteMap;