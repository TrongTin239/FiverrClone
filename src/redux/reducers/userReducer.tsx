import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../configStore";
import { history } from "../../index";
// import { history } from '../../index';
import { useNavigate } from "react-router-dom";
import {
  ACCESS_TOKEN,
  eraseCookie,
  eraseStore,
  getStore,
  getStoreJson,
  http,
  setCookie,
  setStore,
  setStoreJson,
  USER_LOGIN,
  USER_ID,
} from "../../util/tool";
import { Modal } from 'antd';
import User from "../../pages/Admin/User/User";
// import { Modal } from 'antd';
export interface User{   
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
  value: User;
}

const initialState:any = {
  userLogin: getStoreJson(USER_LOGIN),
  arrUser:{},
  productFavoriteList: [],
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    getProfileAction: (state, action) => {
      state.userLogin = action.payload;
    },
    getProductFavoriteAction: (state, action) => {
      state.productFavoriteList = action.payload;
    },
    getUserAction: (state, action:PayloadAction<User>) => {
      state.arrUser=action.payload
    },
  },
});

export const { getProfileAction, getProductFavoriteAction,getUserAction } =
  userReducer.actions;

export default userReducer.reducer;

export const loginApi = (userLogin: string) => {
  return async (dispatch: AppDispatch) => {
    
    try {
      const result = await http.post("auth/signin", userLogin);
      setCookie(ACCESS_TOKEN, result.data.content.token, 15);
      setStore(ACCESS_TOKEN, result.data.content.token);
      setStoreJson(USER_LOGIN, result.data.content.user);
      // dispatch(getProfileApi(result.data.content.user.id))
      setStore(USER_ID, result.data.content.user.id)
      alert("dang nhap thanh cong");
      console.log(result.data.content);
      // let arruser:User[]=result.data.content;
      // const action = getUserAction(arruser);
      // console.log(arruser)
      // dispatch(getProfileApi());
     
      // window.location.reload() 
    } catch (err) {
      console.log(err);
      alert("Email hoặc password chưa đúng vui lòng đăng nhập lại");
      // history.push('/Page404');
    }
    history.push('/');

  };
};

export const signupApi = (values: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.post("auth/signup", values);
      console.log(result.data.content);
      alert("dang ki thanh cong");
    } catch (err) {
      console.log(err);
      alert("email da ton tai vui long dang ki lai");
    }
  };
};

export const getProfileApi = (id:any) => {
  return async (dispatch:AppDispatch) => {
    try {
      const result = await http.get(`/users/${id}`);
      //Lấy thông tin profile => đưa lên redux
      const action = getProfileAction(result.data.content);
      dispatch(action);
      dispatch(getUserAction(result.data.content))
      console.log('abc',result.data.content)
      //Lưu vào storage
      // setStoreJson(USER_LOGIN, result.data.content);
      // history.push('/profile');
    } catch (error) {
      console.log(error);
    }
  };
};
export const updateProfileApi = (data:any) => {
  return async (dispatch:AppDispatch) => {
    try {
      const result = await http.put(`/users/${data.id}`, data.value);
      const success = () => {
        Modal.success({
          content: `Update profile ${result.data.content} !`,
        });
      };
      setStoreJson(USER_LOGIN, result.data.content);
      success();
    } catch (error) {
      console.log(error);
    }
  };
};