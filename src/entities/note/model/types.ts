export type NoteId = Brand<string, 'NoteId'>;

export type Note = {
  id: NoteId;
  title: string;
  content?: string;
  updatedAt: string;
  createdAt: string;
};

export type NotePartial = {
  id?: NoteId;
  title?: string;
  content?: string;
  updatedAt?: string;
  createdAt?: string;
};

export type CreateNoteData = {
  id: NoteId;
  title: string;
  content: string;
  updatedAt: string;
  createdAt: string;
};

export type UpdateNoteData = {
  id: NoteId;
  title: string;
  content?: string;
};

export type DeleteNoteData = {
  id: NoteId;
};

export type NoteSchema = {
  data: Note[];
  groupedData: Record<string, Note[]>;
  isLoading: boolean;
  isError: boolean;
  error?: string;
};
