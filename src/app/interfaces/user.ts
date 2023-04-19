export interface IUserFirebase {
  email?: string;
  name?: string | undefined | null;
  ok: boolean;
  photoURL?: string | undefined | null;
  uid?: string;
  errorMessage?: string;
}

export interface IUserLoged {
  isLoged: boolean;
  email: string;
  uid?: string;
}

export interface IUser {
  email: string;
  password: string;
}
