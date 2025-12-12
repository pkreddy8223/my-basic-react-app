import {styled} from "styled-components"

const NoteItemContainer = styled.li
`
    border-radius: 4px;
    padding : 10px;
    border : 1px solid #d8d8d8;
    list-style-type : none;
    width : 200px;
`

const NoteTitle = styled.h1
`
    font-size : 24px;
`

const NoteDesc = styled.p
`
    font-size : 16px;
`



export {NoteItemContainer,NoteTitle, NoteDesc}