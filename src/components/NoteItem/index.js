import {NoteItemContainer,NoteTitle, NoteDesc} from "./styledComponents"

const NoteItem  = (props) => {
    console.log(props)

    const {title, note} = props.noteDetails
    return (
        <NoteItemContainer>
            <NoteTitle>{title}</NoteTitle>
            <NoteDesc>{note}</NoteDesc>
        </NoteItemContainer>
    )
}

export default NoteItem