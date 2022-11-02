import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { http } from "../../util/tool";
import { AppDispatch } from '../configStore';


export interface Work{
    id: number ,
    tenCongViec: string,
    giaTien: number,
    danhGia: number,
    hoanThanh: boolean

}
const initialState:any = {
    arrWork:[],
    editWork:{}
}

const workReducer = createSlice({
  name: 'workReducer',
  initialState,
  reducers: {
    getWorkAction:(state,action:PayloadAction<Work[]>)=>{
        state.arrWork=action.payload;
    },
    getEditWorkAction:(state,action:PayloadAction<Work>)=>{
      state.editWork=action.payload;
  },
  }
});

export const {getWorkAction,getEditWorkAction} = workReducer.actions

export default workReducer.reducer

/* ------------ action api -------------------- */
export const getWorkApi = () => {
  return async (dispatch1: AppDispatch) => {
    // console.log(getState())
    try {
      const result = await http.get('/cong-viec');
      let arrwork:Work[]=result.data.content;
      const action = getWorkAction(arrwork);
      
      dispatch1(action);
     
    } catch (err) {
      console.log({ err });
    }
  };
}
export const addWorkApi = (values:string) => {
  return async (dispatch1: AppDispatch) => {
    // console.log(getState())
    try {
      const result = await http.post('/cong-viec',values);
      alert('them cong viec thanh cong');
      dispatch1(getWorkApi());
    } catch (err) {
      console.log({ err });
    }
  };
};



export const editWorkApi=(id:string)=>{
  return async (dispatch2: AppDispatch) => {
    try {
      let result = await http.get(`/cong-viec/${id}`);
      console.log(result.data.content);
      dispatch2(getEditWorkAction(result.data.content));
    } catch (err) {
      console.log(err);
    }
  };
}
export const deleteWorkApi=(id: number)=>{
  return async(dispatch:AppDispatch)=>{
    try{
      const result=await http.delete(`/cong-viec/${id}`);
      console.log(result.data.message)
      dispatch(getWorkApi());
    }
    catch(err){
        console.log(err)
        alert('xoa khong thanh cong')
    }
}
};