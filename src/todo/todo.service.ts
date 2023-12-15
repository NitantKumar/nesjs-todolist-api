import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { todo } from './todo.model';
import { User } from 'src/auth/user.schema';

@Injectable()
export class TodoService {
    constructor(@InjectModel('todo') private readonly todoModel: Model<todo>) { }

    async getTasks(user: User) {
        const list_of_tasks = await this.todoModel.find({user: user._id});
        const result = new Object({ tasks: list_of_tasks });
        console.log(result);
        return result;
    }
    async create(name: string, user: User) {
        const newTask = new this.todoModel({ name: name, user: user._id, status: false });
        const result = await newTask.save();
        console.log(result);
        return result;
    }
    async updateStatus(user: User, param: { taskId: number }) {
        let currentTask = await this.todoModel.findById({user: user._id, _id: param.taskId});
        currentTask.status = !currentTask.status;
        console.log(currentTask);
        currentTask.save();
        return currentTask;
    }
}
