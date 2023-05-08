import { Route, Routes } from 'react-router-dom';
import { Home, ToastUIPage } from '../shared';
import { Crawl } from '../slash';
import { AtomInfo } from '../jotai';
import { ReactQuillEditorView } from '../quill';

const RouteMap = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/toastui" element={<ToastUIPage />} />
      <Route path="/slash" element={<Crawl />} />
      <Route path="/jotai" element={<AtomInfo />} />
      <Route path="/quill" element={<ReactQuillEditorView />} />
    </Routes>
  );
};

export default RouteMap;