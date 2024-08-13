import { validate } from "class-validator";
import { NextFunction, Request, Response } from "express";

import { HttpResponse } from "../../shared/response/http.response";
import { bookDTO } from "../DTOs/book.dto";


export class bookMiddleware {
    constructor(
        private readonly httpResponse: HttpResponse = new HttpResponse()
    ) { }
    bookValidator(req: Request, res: Response, next: NextFunction) {
        const { name, desc } = req.body;

        const valid: bookDTO = new bookDTO();
        valid.name = name;
        valid.desc = desc;

        validate(valid).then((err:any) => {
            if (err.length > 0) {
                return this.httpResponse.Error(res, err);
            } else {
                next();
            }
        });
    }
}