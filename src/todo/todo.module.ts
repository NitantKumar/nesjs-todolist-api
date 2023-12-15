import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import TodoController from './todo.controller';
import { TodoService } from './todo.service';
import { todoSchema } from './todo.model';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'todo', schema: todoSchema }]),
    AuthModule
  ],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
