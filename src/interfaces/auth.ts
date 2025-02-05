export interface User {
  id: string;
  name: string;
  email: string;
  photoUrl: string;
}

export interface JWTDecodedUser {
  name: string;
  email: string;
  picture: string;
  exp: number;
}
