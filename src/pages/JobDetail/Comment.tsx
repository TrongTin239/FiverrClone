import { useSelect } from "@mui/base";
import axios from "axios";
import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { CommentModel } from "../../Model/CommentModel";
import { AppDispatch, RootState, store } from "../../redux/configStore";
import { Comment, getCommentApi } from "../../redux/reducers/jobReducers";
import {
  getStore,
  getStoreJson,
  http,
  setStore,
  setStoreJson,
} from "../../util/tool";

type Props = {};

export default function CommentComponent({}: Props) {
  const userComment = useRef({ comment: "" });
  const params = useParams();
  // console.log(params);
  const dispatch: AppDispatch = useDispatch();
  const comment = getStoreJson("comment");
  const id = Number(params.jobID);

  useEffect(() => {}, [params.jobID, comment.lenght]);
  const handleChange = (e: any) => {
    const text = e.target.value;
    userComment.current = text;
    console.log(userComment.current);
    
  };

  const data = new CommentModel();
  const dt = new Date();
  const day = dt.getFullYear() + "/" + (dt.getMonth() + 1) + "/" + dt.getDate();
  // console.log(day)
  const newData = {
    ...data,
    maCongViec: params.jobID,
    maNguoiBinhLuan: 1221,
    ngayBinhLuan: day,
    noiDung: userComment.current,
    saoBinhLuan: 5,
  };
  // console.log(newData);
  const getComment =  (id: number) => {
    const action =  getCommentApi(id);
    dispatch(action); 
  };

  const getCommentFromUser = async () => {
    try {
      const result = await axios({
        url: "https://fiverrnew.cybersoft.edu.vn/api/binh-luan",
        method: "post",
        data: newData,
        headers: {
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMjEiLCJlbWFpbCI6InRyb25ndGluMzMxMUBnbWFpbC5jb20iLCJyb2xlIjoiVVNFUiIsIm5iZiI6MTY2NjY4NjI2OCwiZXhwIjoxNjY3MjkxMDY4fQ.M3S75wqd_FWUGGuYBI1MG_FLVN3YsamiyZsMEOeD-bw",
          tokenCybersoft:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMCIsIkhldEhhblN0cmluZyI6IjE3LzAyLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY3NjU5MjAwMDAwMCIsIm5iZiI6MTY0ODIyNzYwMCwiZXhwIjoxNjc2NzM5NjAwfQ.aK-3RvHXQyu6H2-FFiafeSKR4UMCcRmnuDbTT-XIcUU",
        },
      });
      console.log(result);
      // alert(result.data.message)
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    getCommentFromUser();
  };
  const renderComment = () => {
    return comment?.map((comment: Comment, index: number) => {
      return (
        <div className="row" key={index}>
          <div className="col-2 ava">
            <div className="img">
              <img src={comment.avatar} alt="avt" />
            </div>
          </div>
          <div className="col-8 main-content">
            <div className="name">
              <p>{comment.tenNguoiBinhLuan}</p>
            </div>
            <div className="star-time">
              <ul>
                <li className="star">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <span>{comment.saoBinhLuan}</span>
                </li>
                <li className="line"></li>
                <li>{comment.ngayBinhLuan}</li>
              </ul>
            </div>
            <div className="comment-text">
              <span>{comment.noiDung}</span>
            </div>
            <div className="helpful">
              <p>
                <span> Helpful? </span>
                <span>
                  <i className="fa-sharp fa-solid fa-thumbs-up"></i>
                  <i className="fa-solid fa-thumbs-down"></i>
                </span>
              </p>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="comment">
      <div className="comment-content">{renderComment()}</div>
      <div className="add-comment">
        <form
          action=""
          onSubmit={(e) => {
            handleSubmit(e);
            getComment(id);
          }}
        >
          <input
            type="text-area"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <button type="submit">Add Comment</button>
        </form>
      </div>
    </div>
  );
}
