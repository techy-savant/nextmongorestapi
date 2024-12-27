import { isValidElement } from "react";

const validateToken = (token: any) => {
  const validToken = token.length;

  if(!token || !validToken){
    return false;
  }

  return true;
};

export function authMiddleware(request: Request): any {
  const token = request.headers.get("auhorization")?.split("")[1];

  return { isValid: validateToken(token) };
}
