import { createSlice } from "@reduxjs/toolkit";
import data   from '../../../data.json';

type initialType={
    upperSection:{
        text:string,
        btn:string
    },
    buttomSection:{
        info_section:{
            icon:string,
            text:string,
            socialMediaLink:string[]
        },
        Links_section:{
            columes:
                {
                    head:string,
                    links:string[]
                }[]
        }
    }
}
const initialState:initialType={
    upperSection:data.footer.upperSection,
    buttomSection:data.footer.buttomSection
}

const FooterSlice=createSlice({
    name: 'Footer',
    initialState,
    reducers: {}
}) 

export default FooterSlice.reducer