import { Route, Routes } from 'react-router-dom';
import { Home, ToastUIPage } from '../shared';
import { Crawl } from '../slash';
import { AtomInfo } from '../jotai';

const RouteMap = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/toastui" element={<ToastUIPage />} />
      <Route path="/slash" element={<Crawl />} />
      <Route path="/jotai" element={<AtomInfo />} />
    </Routes>
  );
};

export default RouteMap;