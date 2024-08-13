import { DeleteResult, UpdateResult } from "typeorm";
import { BaseService } from "../config/base.service";
import { PriorityDTO } from "../priority/DTOs/priority.dto";
import { PriorityEntity } from "../priority/entities/priority.entity";
import { bookEntity } from "../book/entities/book.entity";


export class bookService extends BaseService<bookEntity> {
  constructor() {
    super(bookEntity);
  }

  async findAllbooks(): Promise<bookEntity[]> {
    return (await this.execRepository).find();
  }
  async findbooksById(id: string): Promise<PriorityEntity | null> {
    return (await this.execRepository).findOneBy({ id });
  }
  async createbook(body: PriorityDTO): Promise<PriorityEntity> {
    return (await this.execRepository).save(body);
  }
  async deletebook(id: string): Promise<DeleteResult> {
    return (await this.execRepository).delete({ id });
  }
  async updatebook(
    id: string,
    infoUpdate: PriorityDTO
  ): Promise<UpdateResult> {
    return (await this.execRepository).update(id, infoUpdate);
  }
}