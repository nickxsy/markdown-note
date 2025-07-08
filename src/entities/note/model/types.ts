export type Note = {
  id: string;
  title: string;
  content?: string;
  updatedAt: string;
  createdAt: string;
};

export type NotePartial = {
  id?: string;
  title?: string;
  content?: string;
  updatedAt?: string;
  createdAt?: string;
};

export type CreateNoteData = {
  id: string;
  title: string;
  content: string;
  updatedAt: string;
  createdAt: string;
};

export type UpdateNoteData = {
  id: string;
  title: string;
  content: string;
};

export type DeleteNoteData = {
  id: string;
};

export type NoteSchema = {
  data: Note[];
  isLoading: boolean;
  isError: boolean;
  error?: string;
};
