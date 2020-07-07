import { Response, Request } from 'express';

export function checkToken(req: Request, res: Response, next: any): any {
  // after login setup,  work on check token
  // extract token from request headers -Authorization :Bearer token-
  // check token against our jwt secret
  // call next on success
  // res.status(401).send({})
  next();
}
