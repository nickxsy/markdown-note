export type User = {
  id: string;
  name: string;
  fullName: string;
  email: string;
  login: string;
  password: string;
  avatar: string;
};

export type UserPartial = {
  name?: string;
  fullName?: string;
  email?: string;
  login?: string;
  password?: string;
  avatar?: string;
};
