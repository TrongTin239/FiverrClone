import React, { useRef, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Form, FormControl } from "react-bootstrap";
import Chip from "@mui/material/Chip";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getJobList } from "../../redux/reducers/jobReducers";
import { PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../../redux/configStore";
import { setStore } from "../../util/tool";

type Props = {};

export default function Slider({}: Props) {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const [key, setKey] = useState("");

  const handleChange = (e: any) => {
    setKey(e.target.value);
    // console.log(key)
  };
  const getKeySearch = () => {
    const action = getJobList(key);
    dispatch(action);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();

   if(key) {
    setStore("keysearch", key);
    getKeySearch();
    navigate(`/detail/${key}`);
   }if (!key) {
    return
   }
  };

  
  return (
    <div className="slider">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src="./img/bg1.jpg"
            alt="..."
            style={{ height: "700px" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./img/bg2.png"
            alt="..."
            style={{ height: "700px" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./img/bg3.webp"
            alt="..."
            style={{ height: "700px" }}
          />
        </Carousel.Item>
      </Carousel>
      <div className="hn">
        <p className="title">
          Find the perfect freelance{" "}
          <i className="text">Services for your Business</i>
        </p>
        <Form onSubmit={handleSubmit}>
          <i className="fa-solid fa-magnifying-glass searchLogo"></i>
          <FormControl
            type="text"
            placeholder='Try "building mobile app"'
            className="mr-lg-0"
            style={{ borderColor: "none" }}
            onChange={handleChange}
          />
          <button className="btnn">Search</button>
        </Form>
        <div className="popular">
          Popular:
          <Chip
            className="Chip"
            variant="outlined"
            size="medium"
            label="Web Desgin"
            component="a"
            href="#chip"
            clickable
          />
          <Chip
            className="Chip"
            variant="outlined"
            size="medium"
            label="WordPress"
            component="a"
            href="#chip"
            clickable
          />
          <Chip
            className="Chip"
            variant="outlined"
            size="medium"
            label="Logo Design"
            component="a"
            href="#chip"
            clickable
          />
          <Chip
            className="Chip"
            variant="outlined"
            size="medium"
            label="Video Editing"
            component="a"
            href="#chip"
            clickable
          />
        </div>
      </div>
      <div className="trustBy">
        <div className="container">
          <span>Trusted by:</span>

          <ul>
            <li className="fb">
              <img src="img/facebook.31d5f92.png" alt="facebook" />
            </li>
            <li className="gg">
              <img src="img/google.png" alt="google" />
            </li>
            <li className="netflix">
              <img src="img/netflix.png" alt="netflix" />
            </li>
            <li className="png">
              <img src="img/png.png" alt="png" />
            </li>
            <li className="paypal">
              <img src="img/paypall.png" alt="paypal" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
