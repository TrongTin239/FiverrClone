import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { http } from "../../util/tool";
import { AppDispatch } from '../configStore';

export interface Admin{
    
    id:               string;
    name:             string;
    email:            string;
    phone:            string;
    password:         string;
    birthday:         string;
    role:             string;
    certification:    string;
    gender:          boolean;
    skill:            string;

}
export interface EditUser {
  id: string;
  value: Admin;
}




const initialState:any =  {
    arrAdmin:[],
    user:{}
}

const adminReducer = createSlice({
  name: 'adminReducer',
  initialState,
  reducers: {
    getAdminAction:(state,action:PayloadAction<Admin[]>)=>{
        state.arrAdmin=action.payload;
    },
    getUpdateAction:(state,action:PayloadAction<Admin>)=>{
        state.user=action.payload;
    },
    searchUserAction:(state,action:PayloadAction<Admin[]>)=>{
        state.arrAdmin=action.payload;
  }
  }
});

export const {getAdminAction,getUpdateAction,searchUserAction} = adminReducer.actions

export default adminReducer.reducer

/* ------------ action api -------------------- */
export const getadmintApi = () => {
    return async (dispatch1: AppDispatch) => {
      // console.log(getState())
      try {
        const result = await http.get('/users');
        let arradmin:Admin[]=result.data.content;
        const action = getAdminAction(arradmin);
        
        dispatch1(action);
       
      } catch (err) {
        console.log({ err });
      }
    };
  };

export const deleteUseApi=(id: string)=>{
  return async(dispatch:AppDispatch)=>{
    try{
      const result=await http.delete(`/users?id=${id}`);
      console.log(result.data.message)
      dispatch(getadmintApi());
  }
  catch(err){
      console.log(err)
      alert('email da ton tai vui long dang ki lai')
  }

  }
}

export const addAdminApi = (values:string) => {
  return async (dispatch1: AppDispatch) => {
    // console.log(getState())
    try {
      const result = await http.post('/users',values);
      alert('them admin thanh cong');
      dispatch1(getadmintApi());
    } catch (err) {
      console.log({ err });
    }
  };
};

export const updateUserApi=(id:string)=>{
  return async (dispatch2: AppDispatch) => {
    try {
      let result = await http.get(`/users/${id}`);
      dispatch2(getUpdateAction(result.data.content));
    } catch (err) {
      console.log(err);
    }
  };
}
export const updateApi=(data: any) => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.put(`/users`, data.value);
      // customHistory.push('/admin/management-user');
      dispatch(addAdminApi(result.data.content));
      alert('update admin thanh cong');
    } catch (error) {
      console.log(error);
    }
  };
};

export const searchUserApi = (name: any) => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.get(`/users/search/${name}`);
      let seach:Admin[]=result.data.content;
      // console.log(seach)
      const action=searchUserAction(seach)
      dispatch(action);
      console.log(action)
    } catch (error) {
      console.log(error);
    }
  };
};