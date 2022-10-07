import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { http } from "../../util/tool";
// import { http } from "";
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

const initialState: any = {
  jobMenu: [],
};

const jobReducers = createSlice({
  name: "jobReducer",
  initialState,
  reducers: {
    getJobMenuAction: (state, action: PayloadAction<JobModel[]>) => {
      state.jobMenu = action.payload;
    },
  },
});

export const { getJobMenuAction } = jobReducers.actions;

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
