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

export interface ThemeResult {
  id: string;
  name: string;
  image: string;
  bg?: string;
  bg_image?: string;
  colors: ThemeColorResult;
  attributes: ThemeAttributeResult;
}

export interface ThemeColorResult {
  id: string;
  title: string;
  background: string;
  button: string;
  text_button: string;
  themes_id: string;
  border_button: string;
}

export interface ThemeAttributeResult {
  id: string;
  themes_id: string;
  button_radius: string;
  avatar_mask: string;
}
