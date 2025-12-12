import {NotesContainer,NotesEmptyContainer, NotesEmptyDesc, NotesEmptyHeading,NotesEmptyImage,NotesHeading,NotesInputContainer,NotesInput,NotesAddButton, NotesListContainer} from "./styledComponents"
import {useState} from "react"
import NoteItem from "../NoteItem/index"
import {v4 as uuidv4} from "uuid"
const Notes = () => {
    const [notes, setNotes] = useState([])
    const [title, setTitle] = useState("")
    const [note, setNote] = useState("")

    const renderEmptyNotes = () => {
        return (
            <NotesEmptyContainer>
                <NotesEmptyImage src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png" alt="" />
                <NotesEmptyHeading>No Notes Yet</NotesEmptyHeading>
                <NotesEmptyDesc>
                    Notes you add will appear here
                </NotesEmptyDesc>
            </NotesEmptyContainer>
        )
    }

    const renderNotesList = () => {
        return (
            <NotesListContainer>
                {notes.map(eachNote => <NoteItem key={eachNote.id} noteDetails={eachNote}/>)}
            </NotesListContainer>
        )
    }

    const handleAddBtn = () => {
        const newNote = {
            id : uuidv4(),
            title, 
            note
        }
        setNotes(prevNotes => {
            return ([...prevNotes, newNote])
        })
        setTitle("")
        setNote("")
    }
    
    const handleTitleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleNoteChange = (event) => {
        setNote(event.target.value)
    }

    return (
        <NotesContainer>
            <NotesHeading>Notes</NotesHeading>
            <NotesInputContainer>
                <NotesInput value={title} onChange={handleTitleChange}  type="text" placeholder="Title"/>
                <NotesInput value={note} onChange={handleNoteChange} type="text" placeholder="Take a Note..."/>
                <NotesAddButton  onClick={handleAddBtn}>Add</NotesAddButton>
            </NotesInputContainer>
            {notes.length === 0 ? renderEmptyNotes(): renderNotesList()}
        </NotesContainer>
    )
}

export default Notes