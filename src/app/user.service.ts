import { Injectable } from '@angular/core';
import { User } from './user/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users = [
    {
      id: 'u1',
      name: 'Jasmin blake',
      avatar: 'user-1.jpg',
    },
    {
      id: 'u2',
      name: 'Emily Thompson',
      avatar: 'user-2.jpg',
    },
    {
      id: 'u3',
      name: 'Marcus Johnson',
      avatar: 'user-3.jpg',
    },
    {
      id: 'u5',
      name: 'Rebeca Solis',
      avatar: 'user-5.jpg',
    },
    {
      id: 'u6',
      name: 'Angel Iglesias',
      avatar: 'user-4.jpg',
    },
  ];
  constructor() {
    const users = localStorage.getItem('users');
    if (users) {
      this.users = JSON.parse(users);
    }
  }

  getUsers(){
    return this.users;
  }

  addTask(user: User){
    const newTask = {
      id: new Date().getTime().toString(),
      name: user.name,
      avatar: user.avatar
    }
    this.users.unshift(newTask);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('users', JSON.stringify(this.users));
  }
}
