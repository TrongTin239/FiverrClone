import React, { JSXElementConstructor, ReactElement } from "react";

import { getDefaultMiddleware } from "@reduxjs/toolkit";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { http } from "../../util/tool";

// import { http } from "";

import {
  ACCESS_TOKEN,
  getStore,
  setCookie,
  setStore,
  getStoreJson,
  setStoreJson,
  USER_LOGIN,
} from "../../util/tool";
import { AppDispatch } from "../configStore";
import DetailJob from "../../templates/CategoreisHOC/DetailJob";
import Detail from "../../pages/Detail/Detail";
import JobFromDetail from "../../templates/HomeTemplate/JobFromDetail";

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});
export interface JobModel {
  id: number;
  tenLoaiCongViec: string;
  dsNhomChiTietLoai: JobListDetail[];
}

export interface JobListDetail {
  id: number;
  tenNhom: string;
  hinhAnh: string;
  maLoaiCongviec: number;
  dsChiTietLoai: ListDetailCate[];
}
export interface ListDetailCate {
  id: number;
  tenChiTiet: string;
}
export interface JobListModel {
  id: number;
  congViec: CongViec;
  tenLoaiCongViec: string;
  tenNhomChiTietLoai: string;
  tenChiTietLoai: string;
  tenNguoiTao: string;
  avatar: string;
}

export interface CongViec {
  id: number;
  tenCongViec: string;
  danhGia: number;
  giaTien: number;
  nguoiTao: number;
  hinhAnh: string;
  moTa: string;
  maChiTietLoaiCongViec: number;
  moTaNgan: string;
  saoCongViec: number;
}

export interface Comment {
  ngayBinhLuan?: string;
  noiDung?: string;
  saoBinhLuan?: number;
  tenNguoiBinhLuan?: string;
  avatar?: string;
}
const initialState: any = {
  jobMenu: [],
  jobList: [],
  jobCate: [],
  Component: <DetailJob />,
  jobFromDetail: [],
  DetailJob: [],
  Comment: [],
};

const jobReducers = createSlice({
  name: "jobReducer",
  initialState,
  reducers: {
    getJobMenuAction: (state, action: PayloadAction<JobModel[]>) => {
      state.jobMenu = action.payload;
    },
    getJobListaction: (state, action: PayloadAction<JobListModel[]>) => {
      state.jobList = action.payload;
      setStoreJson("joblist", state.jobList);
    },
    getJobCateAction: (state, action: PayloadAction<JobListModel[]>) => {
      state.jobCate = action.payload;
      setStoreJson("jobCate", state.jobCate);
    },
    getJobFromDetailAction: (state, action: PayloadAction<JobListModel[]>) => {
      state.jobFromDetail = action.payload;
      setStoreJson("jobFromDetail", state.jobFromDetail);
    },

    changeComponentFromDetail: (state, action: PayloadAction) => {
      state.Component = <JobFromDetail />;
    },
    changeComponent: (state, action: PayloadAction) => {
      state.Component = <DetailJob />;
    },
    getDetailJobAction: (state, action: PayloadAction<JobListModel>) => {
      state.DetailJob = action.payload;
      setStoreJson("detailJob", state.DetailJob);
    },
    getCommentAction: (state, action: PayloadAction<Comment>) => {
      state.Comment = action.payload;
      setStoreJson("comment",state.Comment)
    },
  },
});

export const {
  getJobMenuAction,
  getJobListaction,
  getJobCateAction,
  getJobFromDetailAction,
  changeComponentFromDetail,
  changeComponent,
  getDetailJobAction,
  getCommentAction,
} = jobReducers.actions;

export default jobReducers.reducer;

// call Api

export const getJobMenu = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.get("cong-viec/lay-menu-loai-cong-viec");
      let jobMenuArr: JobModel[] = result.data.content;
      const action = getJobMenuAction(jobMenuArr);
      dispatch(action);
      // console.log(action);
    } catch (err) {
      console.log(err);
    }
  };
};
export const getJobList = (key: string | null) => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await axios({
        url: `https://fiverrnew.cybersoft.edu.vn/api/cong-viec/lay-danh-sach-cong-viec-theo-ten/${key}`,
        method: "get",
        headers: {
          tokenCybersoft:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMCIsIkhldEhhblN0cmluZyI6IjE3LzAyLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY3NjU5MjAwMDAwMCIsIm5iZiI6MTY0ODIyNzYwMCwiZXhwIjoxNjc2NzM5NjAwfQ.aK-3RvHXQyu6H2-FFiafeSKR4UMCcRmnuDbTT-XIcUU",
        },
      });
      const jobListArr: JobListModel[] = result.data.content;
      const action = getJobListaction(jobListArr);

     

      dispatch(action);
    } catch (err) {
      console.log(err);
    }
  };
};
export const getJobCateApi = (id: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.get(
        `cong-viec/lay-chi-tiet-loai-cong-viec/${id}`
      );
      const action = getJobCateAction(result.data.content);
      dispatch(action);
      // console.log(action)
    } catch (err) {}
  };
};

export const getJobFromDetailApi = (id: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await axios({
        url: `https://fiverrnew.cybersoft.edu.vn/api/cong-viec/lay-cong-viec-theo-chi-tiet-loai/${id}`,
        method: "get",
        headers: {
          tokenCybersoft:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMCIsIkhldEhhblN0cmluZyI6IjE3LzAyLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY3NjU5MjAwMDAwMCIsIm5iZiI6MTY0ODIyNzYwMCwiZXhwIjoxNjc2NzM5NjAwfQ.aK-3RvHXQyu6H2-FFiafeSKR4UMCcRmnuDbTT-XIcUU",
        },
      });
      const action = getJobFromDetailAction(result.data.content);
      dispatch(action);
      // console.log(action);
    } catch (err) {
      console.log(err);
    }
  };
};

export const getDetailJobApi = (id: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.get(`cong-viec/lay-cong-viec-chi-tiet/${id}`);
      let detailJobArr: JobListModel = result.data.content;
      const action = getDetailJobAction(detailJobArr);
      dispatch(action);
      // console.log(action);
    } catch (err) {
      console.log(err);
    }
  };
};

export const getCommentApi =  (id: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.get(
        `binh-luan/lay-binh-luan-theo-cong-viec/${id}`
      );
      const comment: Comment = result.data.content;
      const action = getCommentAction(comment)
      dispatch(action)
      // console.log(action)
    } catch (err) {
      console.log(err);
      setStoreJson("comment",[])
    
    }
  };
};
