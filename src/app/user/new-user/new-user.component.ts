import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-new-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.css'
})
export class NewUserComponent {
  @Output() close = new EventEmitter();

  name = '';
  avatar= 'generic.jpg';
  private usersService = inject(UserService);

  onCancel(){    
    this.close.emit();
  }

  onSubmit() {
    this.usersService.addTask({
      id: '',
      name: this.name,
      avatar: this.avatar
    });
    this.close.emit();
  }

}
