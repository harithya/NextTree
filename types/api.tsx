export interface LoginResult {
  message: string;
  token: string;
  data: {
    name: string;
    email: string;
  };
}
