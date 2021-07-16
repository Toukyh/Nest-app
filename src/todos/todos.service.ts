import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from } from 'rxjs';
import { Repository } from 'typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodosService {

  constructor(
    @InjectRepository(Todo)
    private readonly TodosRepository: Repository<Todo>,
  ) { }

  create(createTodoDto: CreateTodoDto) {
    return this.TodosRepository.save(createTodoDto);
  }

  findAll(): Promise<Todo[]> {
    return this.TodosRepository.find();
  }

  findOne(id: number): Promise<Todo> {
    return this.TodosRepository.findOne(id);
  }

  async update(id: number, updateTodoDto: UpdateTodoDto): Promise<Todo> {
    await this.TodosRepository.update({ id }, updateTodoDto);
    return this.TodosRepository.findOne(id);
  }

  async remove(id: number) {
    return from(this.TodosRepository.delete(id));
  }
}
