import { createSlice } from "@reduxjs/toolkit";
import data   from '../../../data.json';

type initialType={
    navBarItems:string[],
    Icon:string
}
const initialState:initialType={
    navBarItems:data.header.navBarItems,
    Icon:data.header.Icon
}

const HeaderSlice=createSlice({
    name: 'Header',
    initialState,
    reducers: {}
}) 

export default HeaderSlice.reducer
