export interface LoginResult {
  message: string;
  token: string;
  data: {
    name: string;
    email: string;
  };
}

export interface LinkResult {
  id: string;
  title: string;
  url: string;
  image?: any;
  is_active: number;
  users_id: string;
}
