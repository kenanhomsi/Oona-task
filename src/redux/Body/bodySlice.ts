import { createSlice } from "@reduxjs/toolkit";
import data   from '../../../data.json';

type initialType={
    unlock:{
        sectionText:string,
        sectionParagraph:string,
        btn:string,
        unlock_img:string
    }
    ,achievements:{
        sectionText1:string,
        sectionText2:string,
        sectionParagraph:string,
        achievements_items:
            {
                icon:string,
                text:string,
                number:string
            }[]
    },
    calender:{
        sectionText:string,
        sectionParagraph:string,
        btn:string,
        unlock_img:string
    }
    ,customers:{
        sectionParagraph:string,
        Writer:string,
        WriterPosition:string,
        customer_img:string
    }
    , community_updates:{
        sectionHeader:string,
        sectionParagraph:string,
        items:
            {
                img:string,
                text:string
            }[]
        
    }
}
const initialState:initialType={
    unlock:data.body.unlock,
    achievements:data.body.achievements,
    calender:data.body.calender,
    customers:data.body.customers,
    community_updates:data.body.community_updates
}

const BodySlice=createSlice({
    name: 'Body',
    initialState,
    reducers: {}
}) 

export default BodySlice.reducer