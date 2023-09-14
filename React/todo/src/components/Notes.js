import React, { useState, useContext, useEffect, useRef } from 'react'
import NoteContext from '../context/notes/NoteContext';
import NoteItem from './NoteItem';
import { useNavigate } from 'react-router-dom'

const Notes = (props) => {
    const context = useContext(NoteContext);
    const { notes, getNotes, editNote } = context;
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('token')) {
            getNotes()
        }
        else{
            navigate("/login")
        }
        // eslint-disable-next-line
    }, [])
    const ref = useRef(null)
    const refClose = useRef(null)
    const [note, setNote] = useState({ eid: "", etitle: "", edescription: "", etag: "default" })

    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({ eid: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })
    }

    const handleClick = (e) => {
        e.preventDefault();
        editNote(note.eid, note.etitle, note.edescription, note.etag)
        refClose.current.click()
        props.showAlert("Note Updated Successfully", "Success")
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <div className='my-5 mx-3 p-2'>
            {/* Open the modal using ID.showModal() method */}
            <button className="btn hidden" ref={ref} onClick={() => window.my_modal_1.showModal()}>open modal</button>
            <dialog id="my_modal_1" className="modal px-14 py-10 w-[50%] rounded-xl">
                <h3 className="font-bold text-3xl text-gray-700">Edit Note</h3>
                <hr className='my-2' />
                <form method="dialog" className="modal-box">
                    <div className='mb-5 flex flex-col space-y-2'>
                        <label htmlFor="etitle" className='text-xl font-semibold text-gray-700'>Title</label>
                        <input type="text" id='etitle' name='etitle' className='w-full border border-slate-400 p-2 text-lg outline-slate-400' placeholder='add a title' onChange={onChange} value={note.etitle} />
                    </div>
                    <div className='mb-5 flex flex-col space-y-2'>
                        <label htmlFor="edescription" className='text-xl font-semibold text-gray-700'>Description</label>
                        <input type="text" id='edescription' name='edescription' className='w-full border border-slate-400 p-2 text-lg outline-slate-400' placeholder='add a description' onChange={onChange} value={note.edescription} />
                    </div>
                    <div className='mb-5 flex flex-col space-y-2'>
                        <label htmlFor="etag" className='text-xl font-semibold text-gray-700'>Tag</label>
                        <input type="text" id='etag' name='etag' className='w-full border border-slate-400 p-2 text-lg outline-slate-400' placeholder='add a tag' onChange={onChange} value={note.etag} />
                    </div>
                    <div className="modal-action flex space-x-2 justify-end">
                        {/* <button className="btn py-2 px-5 font-medium text-xl bg-red-700 text-gray-200 hover:text-white rounded-md">Close</button> */}
                        <button className=" absolute right-5 top-5 text-2xl bg-gray-200 rounded-full py-1 px-3 text-gray-700 hover:bg-gray-300" ref={refClose}>✕</button>
                        <button disabled={note.etitle.length < 3 || note.edescription.length < 5} className="btn py-2 px-5 font-medium text-xl bg-gray-700 hover:bg-gray-800 text-gray-200 hover:text-white rounded-md disabled:opacity-80 disabled:cursor-not-allowed" onClick={handleClick}>Save</button>
                    </div>
                </form>
            </dialog>

            <h1 className='text-3xl font-semibold text-gray-700'>Your Notes</h1>
            <div className='grid grid-flow-row grid-cols-3 2xl:grid-cols-4 gap-5 mt-5'>
                {notes.length === 0 && <div className='mx-1 text-lg'>No Notes To Desplay</div>}
                {notes.map((note) => {
                    return <NoteItem note={note} updateNote={updateNote} showAlert={props.showAlert} key={note._id} />;
                })}
            </div>
        </div>
    )
}

export default Notes