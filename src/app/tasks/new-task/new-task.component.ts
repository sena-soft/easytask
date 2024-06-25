import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTask } from './new-task.model';
import { TasksService } from '../tasks.service';


@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() close = new EventEmitter();
  @Input({ required: true }) userId!: string;

  // title = signal('');
  title = '';
  summary= '';
  date = '';
  private tasksService = inject(TasksService);

  onCancel(){    
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask({
      title: this.title,
      summary: this.summary,
      date: this.date
    }, this.userId);
    this.close.emit();
    // this.add.emit({
    //   title: this.title,
    //   summary: this.summary,
    //   date: this.date
    // })
  }

}
