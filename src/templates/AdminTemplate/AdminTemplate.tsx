import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import AdminHeader from "../../components/AdminHeader/AdminHeader";
type Props = {};

export default function HomeMain({}: Props) {
  return (
    <>
      <AdminHeader />
    </>
  );
}