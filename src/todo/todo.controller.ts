import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
  Req
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('todo')
export default class TodoController {
  constructor(private todoService: TodoService) { }

  @Get()
  @UseGuards(AuthGuard())
  async getTasks(@Req() req) {
    return await this.todoService.getTasks(req.user);
  }

  @Post()
  @UseGuards(AuthGuard())
  async create(@Body('name') taskName: string, @Req() req) {
    return await this.todoService.create(taskName, req.user);
  }

  @Patch('/:taskId')
  @UseGuards(AuthGuard())
  async updateStatus(@Req() req, @Param() param: { taskId: number }) {
    return await this.todoService.updateStatus(req.user, param);
  }
}
