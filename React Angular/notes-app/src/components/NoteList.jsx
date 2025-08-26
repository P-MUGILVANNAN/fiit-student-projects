import { useEffect } from 'react';

const NoteList = ({ notes, deleteNote, setEditingNote }) => {
  useEffect(() => {
    if (notes.length === 0) {
      document.getElementById('no-notes-message').classList.add('show');
    } else {
      document.getElementById('no-notes-message').classList.remove('show');
    }
  }, [notes]);

  return (
    <div className="mt-4">
      <h2>Your Notes</h2>
      <div id="no-notes-message" className="alert alert-info">
        No notes yet. Add your first note above!
      </div>
      <div className="row">
        {notes.map(note => (
          <div key={note.id} className="col-md-6 mb-3">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{note.title}</h5>
                <p className="card-text">{note.content}</p>
                <div className="d-flex justify-content-end">
                  <button 
                    onClick={() => setEditingNote(note)}
                    className="btn btn-sm btn-outline-primary me-2"
                  >
                    Edit
                  </button>
                  <button 
                    onClick={() => deleteNote(note.id)}
                    className="btn btn-sm btn-outline-danger"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoteList;