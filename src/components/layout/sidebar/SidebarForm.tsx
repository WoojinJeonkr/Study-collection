/* eslint-disable no-nested-ternary */
import { AdminSidebar, MemberSidebar, NonMemberSidebar } from "components";

export default function Sidebar(props: { auth: string }) {
  const { auth } = props;
  return auth === "ROLE_USER" ? (
    <MemberSidebar />
  ) : auth === "ROLE_ADMIN" ? (
    <AdminSidebar />
  ) : (
    <NonMemberSidebar />
  );
}
