export type Note = {
  id: string;
  title: string;
  content: string;
  updatedAt?: Date;
  createdAt?: Date;
};

export type CreateNoteData = {
  title: string;
  content: string;
};

export type UpdateNoteData = {
  id: string;
  title: string;
  content: string;
};

export type DeleteNoteData = {
  id: string;
};
