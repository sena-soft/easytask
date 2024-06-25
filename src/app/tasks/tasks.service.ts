import { Injectable } from '@angular/core';
import { NewTask } from './new-task/new-task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Aprender Angular',
      summary: 'Aprender los conceptos básicos de Angular y como aplicarlos.',
      dueDate: '2021-10-09'
    },
    {
      id: 't2',
      userId: 'u1',
      title: 'Crear prototype',
      summary: 'Crear un mvp de un sitio en línea para compras',
      dueDate: '2024-09-12'
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Crear template para control de gastos',
      summary: 'Preparar un template en Excel para usarlo como control de gastos',
      dueDate: '2024-10-09'
    }
  ]
  constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string){
    return this.tasks.filter(task => task.userId === userId);
  }

  addTask(task: NewTask, userId: string){
    const newTask = {
      id: new Date().getTime().toString(),
      userId: userId,
      title: task.title,
      dueDate: task.date,
      summary: task.summary
    }
    this.tasks.unshift(newTask);
    this.saveTasks();
  }

  deleteTask(idTask: string) {
    this.tasks = this.tasks.filter(task => task.id !== idTask);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
