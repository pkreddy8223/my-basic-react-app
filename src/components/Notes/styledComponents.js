import {styled} from "styled-components"

const NotesContainer = styled.div
`
    padding : 10px;
`

const NotesHeading = styled.h1
`
    text-align : center;
    font-family : "Bree Serif";
    color : #4c63b6;
`

const NotesInputContainer = styled.div
`
    display : flex;
    flex-direction : column;
    align-items : flex-start;
    padding : 10px;
    box-shadow : 1px 2px 6px #475569;
    border-radius : 2px;
    gap : 20px
`

const NotesInput = styled.input
`
    width : 100%;
    border :none;
    outline : none;
    font-size : 16px;
    color : black;
`

const NotesAddButton  = styled.button
`
    align-self : flex-end;
    margin-right : 20px;
    border : none;
    border-radius : 4px;
    background-color : #4c63b6;
    color : white;
    padding : 8px;
    width : 80px;


`

const NotesEmptyContainer = styled.div
`
    margin-top : 20px;
    padding : 10px;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
`

const NotesEmptyImage = styled.img
`
    width : 120px;
    margin-bottom : 0px;
`

const NotesEmptyHeading = styled.h1
`
    font-size : 24px;
    margin-bottom : 0px;
`

const NotesEmptyDesc = styled.p
`
    font-size : 16px;
    margin-bottom : 0px;
`

const NotesListContainer = styled.ul
`
    padding : 0px;
    display : flex;
    flex-wrap : wrap;
    gap : 10px;
`

export {NotesContainer,NotesEmptyContainer, NotesEmptyDesc, NotesEmptyHeading,NotesEmptyImage,NotesHeading,NotesInputContainer,NotesInput,NotesAddButton, NotesListContainer}