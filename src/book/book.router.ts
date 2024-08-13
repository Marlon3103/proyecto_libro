
import { BaseRoutres } from "../shared/routes/router";
import { bookController } from "./controllers/book.controller";
import { bookMiddleware } from "./middlewares/book.middleware";

export class bookRouter extends BaseRoutres<bookController, bookMiddleware> {
    constructor() {
        super(bookController, bookMiddleware);
    }

    routes(): void {
        this.router.get("/book", (req:any, res:any) => this.controller.getbook(req, res));
        this.router.get("/book/:id", (req:any, res:any) =>  
            this.controller.getbookById(req, res)
        );
        this.router.post("/createbook", (req:any, res:any, next:any) => [this.middelware.bookValidator(req, res, next)], (req:any, res:any) =>
            this.controller.createbook(req, res)
        );
        this.router.put("/updatePriority/:id", (req:any, res:any) =>
            this.controller.updatebook(req, res)
        );
        this.router.delete("/deletebook/:id", (req:any, res:any) =>
            this.controller.deletebook(req, res)
        );
    }
}