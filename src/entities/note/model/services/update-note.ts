// import { createAsyncThunk } from "@reduxjs/toolkit";
// import type { UpdateNoteData } from "../types";
// import { noteRepository } from "../note.repository";

// export const updateNote = createAsyncThunk(
//   "notes/updateNote",
//   async (data: UpdateNoteData) => {
//     const note = await noteRepository.getNote(data.id);
//     if (!note) {
//       throw new Error();
//     }
//     const newNote = { ...note, ...data };
//     await noteRepository.updateNote(newNote);
//     return newNote;
//   },
// );
