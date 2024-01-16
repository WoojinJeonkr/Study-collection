import Layout from "components/layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  AdminRegisterForm,
  BoardDetail,
  BoardList,
  BoardRegisterForm,
  BoardRouter,
  BoardUpdateForm,
  FaqList,
  FaqRouter,
  LoginForm,
  Main,
  ManagementRouter,
  MemberRegisterForm,
  NoticeDetail,
  NoticeList,
  NoticeRegisterForm,
  NoticeRouter,
  NoticeUpdateForm,
  PolicyDetailForm,
  PolicyRegisterForm,
  PolicyRouter,
  PolicyView,
  Profile,
  QnaDetail,
  QnaList,
  QnaRegisterForm,
  QnaRouter,
  TermDetailForm,
  TermRegisterForm,
  TermRouter,
  TermView,
  UserList,
  UserRegisterForm,
} from "components";

export default function RoutesMap() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<UserRegisterForm />} />
          <Route path="/user/register" element={<MemberRegisterForm />} />
          <Route path="/admin/register" element={<AdminRegisterForm />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/management" element={<ManagementRouter />}>
            <Route path="" element={<UserList />} />
          </Route>
          <Route path="/board" element={<BoardRouter />}>
            <Route path="" element={<BoardList />} />
            <Route path="create" element={<BoardRegisterForm />} />
            <Route path="detail/:id" element={<BoardDetail />} />
            <Route path="update/:id" element={<BoardUpdateForm />} />
          </Route>
          <Route path="/notice" element={<NoticeRouter />}>
            <Route path="" element={<NoticeList />} />
            <Route path="create" element={<NoticeRegisterForm />} />
            <Route path="detail/:id" element={<NoticeDetail />} />
            <Route path="update/:id" element={<NoticeUpdateForm />} />
          </Route>
          <Route path="/faq" element={<FaqRouter />}>
            <Route path="" element={<FaqList />} />
          </Route>
          <Route path="/qna" element={<QnaRouter />}>
            <Route path="" element={<QnaList />} />
            <Route path="create" element={<QnaRegisterForm />} />
            <Route path="detail/:id" element={<QnaDetail />} />
          </Route>
          <Route path="/policy" element={<PolicyRouter />}>
            <Route path="" element={<PolicyView />} />
            <Route path="create" element={<PolicyRegisterForm />} />
            <Route path="detail/:id" element={<PolicyDetailForm />} />
          </Route>
          <Route path="/term" element={<TermRouter />}>
            <Route path="" element={<TermView />} />
            <Route path="create" element={<TermRegisterForm />} />
            <Route path="detail/:id" element={<TermDetailForm />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
