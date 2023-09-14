import React, { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext';

const NoteItem = (props) => {
    const context = useContext(NoteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;

    const handleClick = () => {
        deleteNote(note._id);
        props.showAlert("Note Deleted Successfully", "Success")
    }

    return (
        <div className=''>
            <div className='border py-2 px-5'>
                <h5 className='text-xl font-semibold text-gray-700'>{note.title}</h5>
                <p className='text-gray-700'>{note.description}</p>
                <p className='text-gray-700'>{note.tag}</p>
                {/* <button href="/" className='bg-black text-gray-200 hover:text-white py-2 rounded-lg font-semibold px-5 my-2'>Edit Note</button> */}
                <div className='flex justify-end'>
                    <i className="fa-solid fa-trash text-2xl m-2 cursor-pointer text-gray-700 hover:text-gray-800" onClick={handleClick}></i>
                    <i className="fa-solid fa-pen-to-square text-2xl m-2 cursor-pointer text-gray-700 hover:text-gray-800" onClick={() => { updateNote(note) }}></i>
                </div>
            </div>
        </div>
    )
}

export default NoteItem
