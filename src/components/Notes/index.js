import {NotesContainer,NotesEmptyContainer, NotesEmptyDesc, NotesEmptyHeading,NotesEmptyImage,NotesHeading,NotesInputContainer,NotesInput,NotesAddButton, NotesListContainer} from "./styledComponents"
import {useRef, useState} from "react"
import NoteItem from "../NoteItem/index"
import {v4 as uuidv4} from "uuid"
import { useContext } from "react"
import  ThemeContext  from "../../context/ThemeContext"

const Notes = () => {
    const [notes, setNotes] = useState([])
    const [title, setTitle] = useState("")
    const [note, setNote] = useState("")


    const titleInputRef = useRef(null)
    const noteInputRef = useRef(null)

    const {theme, toggleTheme} = useContext(ThemeContext)



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
        if (title === "" && note === ""){
            console.log("This excuted")
            titleInputRef.current.focus()
        }
        else if (title == ""){
            titleInputRef.current.focus()
        }
        else if (note == ""){
            noteInputRef.current.focus()
        }
        else {
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
        
    }
    
    const handleTitleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleNoteChange = (event) => {
        setNote(event.target.value)
    }

    return (
        <NotesContainer theme={theme}>
            <NotesHeading>Notes</NotesHeading>
            <NotesInputContainer>
                <NotesInput required ref={titleInputRef} value={title} onChange={handleTitleChange}  type="text" placeholder="Title"/>
                <NotesInput required ref={noteInputRef} value={note} onChange={handleNoteChange} type="text" placeholder="Take a Note..."/>
                <NotesAddButton  onClick={handleAddBtn}>Add</NotesAddButton>
                <NotesAddButton onClick={toggleTheme}>Toggle Theme</NotesAddButton>
            </NotesInputContainer>
            {notes.length === 0 ? renderEmptyNotes(): renderNotesList()}
        </NotesContainer>
    )
}

export default Notes