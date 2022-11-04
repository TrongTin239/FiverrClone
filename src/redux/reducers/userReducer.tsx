import { createSlice } from '@reduxjs/toolkit';
import { AppDispatch } from "../configStore";
import { history } from '../../index';
// import { history } from '../../index';
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
} from '../../util/tool';
// import { Modal } from 'antd';

const initialState = {
  userLogin: getStoreJson(USER_LOGIN),
  productFavoriteList: [],
};

const userReducer = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    getProfileAction: (state, action) => {
      state.userLogin = action.payload;
    },
    getProductFavoriteAction: (state, action) => {
      state.productFavoriteList = action.payload;
    },
  },
});

export const { getProfileAction, getProductFavoriteAction } =
  userReducer.actions;

export default userReducer.reducer;

export const loginApi = (userLogin:string) => {
  return async (dispatch:AppDispatch) => {
    try {
      const result = await http.post('auth/signin', userLogin);
      setCookie(ACCESS_TOKEN, result.data.content.accessToken, 15);
      setStore(ACCESS_TOKEN, result.data.content.accessToken);
      alert('dang nhap thanh cong')
      history.push('/home');
      console.log(result.data.content);
    //   dispatch(getProfileApi());
    } catch (err) {
      console.log(err);
      alert('Email hoặc password chưa đúng vui lòng đăng nhập lại')
      // history.push('/Page404');
    }
  };
};

export const signupApi=(values:string)=>{
  return async(dispatch:AppDispatch)=>{
      try{
          const result = await http.post('auth/signup', values);
          console.log(result.data.content);
          alert('dang ki thanh cong')
      }
      catch(err){
          console.log(err)
          alert('email da ton tai vui long dang ki lai')
      }
}
}