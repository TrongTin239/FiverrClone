import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { http } from "../../util/tool";
import { AppDispatch } from '../configStore';


export interface TypeWork{
    id: number ,
    tenNhom: string,
    hinhAnh: string,
    maLoaiCongviec: string,
    dsChiTietLoai:{}

}
const initialState:any = {
    arrTypeWork:[],
    editService:{}
}

const typerWorkReducer = createSlice({
  name: 'typeworkReducer',
  initialState,
  reducers: {
    getTypeWorkAction:(state,action:PayloadAction<TypeWork[]>)=>{
        state.arrTypeWork=action.payload;
    },
    getEditTypeWorkAction:(state,action:PayloadAction<TypeWork>)=>{
      state.editService=action.payload;
  },
  }
});

export const {getTypeWorkAction,getEditTypeWorkAction} = typerWorkReducer.actions

export default typerWorkReducer.reducer

/* ------------ action api -------------------- */
export const getTypeWorkApi = () => {
    return async (dispatch1: AppDispatch) => {
      // console.log(getState())
      try {
        const result = await http.get('/chi-tiet-loai-cong-viec');
        let arrTypeWork:TypeWork[]=result.data.content;
        const action = getTypeWorkAction(arrTypeWork);
        
        dispatch1(action);
       
      } catch (err) {
        console.log({ err });
      }
    };
  }
  export const addServiceApi = (values:string) => {
    return async (dispatch1: AppDispatch) => {
      // console.log(getState())
      try {
        const result = await http.post('/chi-tiet-loai-cong-viec',values);
        alert('them cong viec thanh cong');
        dispatch1(getTypeWorkApi());
      } catch (err) {
        console.log({ err });
      }
    };
  };
  export const deletTypeWorkApi=(id: number)=>{
    return async(dispatch:AppDispatch)=>{
      try{
        const result=await http.delete(`/chi-tiet-loai-cong-viec/${id}`);
        console.log(result.data.message)
        dispatch(getTypeWorkApi());
      }
      catch(err){
          console.log(err)
          alert('xoa khong thanh cong')
      }
  }
  };

  export const editServiceApi=(id:string)=>{
    return async (dispatch2: AppDispatch) => {
      try {
        let result = await http.get(`/chi-tiet-loai-cong-viec/${id}`);
        console.log(result.data.content);
        dispatch2(getEditTypeWorkAction(result.data.content));
      } catch (err) {
        console.log(err);
      }
    };
  }
  export const updateServiceApi=(data: any) => {
    return async (dispatch: AppDispatch) => {
      try {
        const result = await http.post('/chi-tiet-loai-cong-viec', data);
        // customHistory.push('/admin/management-user');
        dispatch(getTypeWorkApi());
        console.log(result.data.content)
        alert('update admin thanh cong');
      } catch (error) {
        console.log(error);
      }
    };
  };