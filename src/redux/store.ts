import { configureStore } from "@reduxjs/toolkit";
import headerReducer from './header/headerSlice'
import {TypedUseSelectorHook,useSelector} from 'react-redux'
import homeSlice from "./Home/homeSlice";
import bodySlice from "./Body/bodySlice";
import footerSlice from "./Footer/footerSlice";


export const useAppSelector:TypedUseSelectorHook<RootState>=useSelector

export const store=configureStore({
    reducer:{
        header:headerReducer,
        home:homeSlice,
        body:bodySlice,
        footer:footerSlice
    }
})

export default store
export type RootState=ReturnType<typeof store.getState>