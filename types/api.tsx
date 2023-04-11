export interface LoginResult {
  message: string;
  token: string;
  user: {
    name: string;
    email: string;
  };
}
