import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { CardComponent } from "./shared/card/card.component";
import { NewTaskComponent } from "./tasks/new-task/new-task.component";
import { UserService } from './user.service';
import { NewUserComponent } from "./user/new-user/new-user.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent, CardComponent, NewTaskComponent, NewUserComponent]
})
export class AppComponent {
  title = 'angular-essentials';
  private userService = inject(UserService);
  users = this.userService.getUsers();
  selectedUserId?: string;
  isAddingUser: boolean = false;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
    
  }
  onStartAddUser(){
    this.isAddingUser = true;

  }
  onCloseAddUser(){
    this.isAddingUser = false;

  }
}
