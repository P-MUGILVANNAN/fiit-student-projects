import { useState, useEffect } from 'react';

const NoteForm = ({ addNote, updateNote, editingNote, setEditingNote }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title);
      setContent(editingNote.content);
    } else {
      setTitle('');
      setContent('');
    }
  }, [editingNote]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const note = { title, content };
    
    if (editingNote) {
      updateNote({ ...note, id: editingNote.id });
    } else {
      addNote(note);
    }

    setTitle('');
    setContent('');
  };

  return (
    <div className="card mt-4">
      <div className="card-body">
        <h2 className="card-title">{editingNote ? 'Edit Note' : 'Add New Note'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="noteTitle" className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              id="noteTitle"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="noteContent" className="form-label">Content</label>
            <textarea
              className="form-control"
              id="noteContent"
              rows="3"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
          <div className="d-flex justify-content-end">
            {editingNote && (
              <button
                type="button"
                className="btn btn-outline-secondary me-2"
                onClick={() => setEditingNote(null)}
              >
                Cancel
              </button>
            )}
            <button type="submit" className="btn btn-primary">
              {editingNote ? 'Update Note' : 'Add Note'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NoteForm;