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

const initialState: any = {
  jobMenu: [],
  jobList: [],
  jobCate: [],
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
      setStoreJson("jobCate", state.jobCate)
    },
  },
});

export const { getJobMenuAction, getJobListaction, getJobCateAction } =
  jobReducers.actions;

export default jobReducers.reducer;

// call Api

export const getJobMenu = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.get("cong-viec/lay-menu-loai-cong-viec");
      let jobMenuArr: JobModel[] = result.data.content;
      const action = getJobMenuAction(jobMenuArr);
      dispatch(action);
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

      // console.log(action);

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
