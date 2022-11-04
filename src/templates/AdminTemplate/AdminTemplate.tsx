import React,{useState} from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import AdminHeader from "../../components/AdminHeader/AdminHeader";

type Props = {
  children?: JSX.Element;
};
export default function HomeMain({}: Props) {
  // const [isOpenModalLogin, setOpenModalLogin] = useState(false);
  return (
    <>
      <AdminHeader />
    </>
  );
}