import { Request, Response } from "express";
import { bookService } from "../../services/book.service";


export class bookController {
    constructor(
        private readonly priorityService: bookService = new bookService()
    ) { }
    async getbook(req: Request, res: Response) {
        try {
            const data = await this.priorityService.findAllbooks();
            res.status(200).json(data);
        } catch (e) {
            console.error(e);
        }
    }
    async getbookById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const data = await this.priorityService.findbooksById(id);
            res.status(200).json(data);
        } catch (e) {
            console.error(e);
        }
    }
    async createbook(req: Request, res: Response) {
        try {
            const data = await this.priorityService.createbook(req.body);
            res.status(200).json(data);
        } catch (e) {
            console.error(e);
        }
    }
    async updatebook(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const data = await this.priorityService.updatebook(id, req.body);
            res.status(200).json(data);
        } catch (e) {
            console.error(e);
        }
    }
    async deletebook(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const data = await this.priorityService.deletebook(id);
            res.status(200).json(data);
        } catch (e) {
            console.error(e);
        }
    }
}