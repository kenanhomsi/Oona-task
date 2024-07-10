import { createSlice } from "@reduxjs/toolkit";
import data   from '../../../data.json';

type initialType={
    hero:{
        H1_text1:string,
        H1_text2:string,
        p:string,
        hero_img:string,
        btn:string
    },
    clients:{
        sectionHeader:string,
        sectionParagraph:string,
        Icons:string[]
    },
    Community:{
        sectionHeader:string,
        sectionParagraph:string,
        community_types:
            {
                icon:string,
                title:string,
                description:string
            }[]
        
    }
}
const initialState:initialType={
    hero:data.Home.hero,
    clients:data.Home.clients,
    Community:data.Home.Community
}

const HomeSlice=createSlice({
    name: 'Home',
    initialState,
    reducers: {}
}) 

export default HomeSlice.reducer