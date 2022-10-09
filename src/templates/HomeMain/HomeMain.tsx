import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import HeaderMain from "../../components/Header/HeaderMain";
type Props = {};

export default function HomeMain({}: Props) {
  return (
    <>
      <HeaderMain />
      <Outlet/>
      <Footer/>
    </>
  );
}
