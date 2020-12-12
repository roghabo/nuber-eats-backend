import{ Request, Response, NextFunction} from "express";

export function jwtMiddleware(req:Request, res: Response, next:NextFunction) {
    console.log("middleware!!!");
    next(); //next를 꼭 호출해야함
}
