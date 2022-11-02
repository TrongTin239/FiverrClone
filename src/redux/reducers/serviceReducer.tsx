import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { http } from "../../util/tool";
import { AppDispatch } from '../configStore';


export interface Service{
    id: number ,
    maCongViec: number,
    maNguoiThue: number,
    ngayThue: string,
    hoanThanh: boolean
}
export interface ServiceModel{
  id?: number ,
  maCongViec: number,
  maNguoiThue: number,
  ngayThue: string,
  hoanThanh: boolean
}

const initialState:any = {
    arrService:[],
    editService:{}
}

const servicerReducer = createSlice({
  name: 'serviceReducer',
  initialState,
  reducers: {
    getServicerAction:(state,action:PayloadAction<Service[]>)=>{
        state.arrService=action.payload;
    },
    getEditServiceAction:(state,action:PayloadAction<Service>)=>{
      state.editService=action.payload;
  },
  searchServiceAction:(state,action:PayloadAction<Service[]>)=>{
    state.arrService=action.payload;
}
  }
});

export const {getServicerAction,getEditServiceAction,searchServiceAction} = servicerReducer.actions

export default servicerReducer.reducer

/* ------------ action api -------------------- */
export const getServiceApi = () => {
    return async (dispatch1: AppDispatch) => {
      // console.log(getState())
      try {
        const result = await http.get('/thue-cong-viec');
        let arradmin:Service[]=result.data.content;
        const action = getServicerAction(arradmin);
        
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
        const result = await http.post('/thue-cong-viec',values);
        alert('them cong viec thanh cong');
        dispatch1(getServiceApi());
      } catch (err) {
        console.log({ err });
      }
    };
  };


  export const editServiceApi=(id:string)=>{
    return async (dispatch2: AppDispatch) => {
      try {
        let result = await http.get(`/thue-cong-viec/${id}`);
        console.log(result.data.content);
        dispatch2(getEditServiceAction(result.data.content));
      } catch (err) {
        console.log(err);
      }
    };
  }
  export const updateServiceApi=(data: ServiceModel) => {
    return async (dispatch: AppDispatch) => {
      try {
        const result = await http.post('/thue-cong-viec/', data);
        // customHistory.push('/admin/management-user');
        dispatch(getServiceApi());
        console.log(result.data.content)
        alert('update admin thanh cong');
      } catch (error) {
        console.log(error);
      }
    };
  };
  export const deleteServiceApi=(id: number)=>{
    return async(dispatch:AppDispatch)=>{
      try{
        const result=await http.delete(`/thue-cong-viec/${id}`);
        console.log(result.data.message)
        dispatch(getServiceApi());
      }
      catch(err){
          console.log(err)
          alert('xoa khong thanh cong')
      }
  }
};
  export const searcServiceApi = (Keywork: any) => {
    return async (dispatch: AppDispatch) => {
      try {
        const result = await http.get(`/thue-cong-viec/phan-trang-tim-kiem?keyword=${Keywork}`);
        let seach:Service[]=result.data.content;
        // console.log(seach)
        const action=searchServiceAction(seach)
        dispatch(action);
        console.log(action)
      } catch (error) {
        console.log(error);
      }
    };
  };