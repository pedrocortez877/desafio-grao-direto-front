export type LoginCredentials = {
  email: string;
  password: string;
};

export type TokenObject = {
  access_token: string;
};

export type JwtPayload = {
  sub: string;
  email: string;
  firstName: string;
};
