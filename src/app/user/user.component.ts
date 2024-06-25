import { Component, EventEmitter, Input, Output, computed, input } from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";


@Component({
    selector: 'app-user',
    standalone: true,
    templateUrl: './user.component.html',
    styleUrl: './user.component.css',
    imports: [CardComponent]
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  // @Input({required: true}) avatar!: string;
  // avatar = input.required<string>();
  // @Input({required: true}) name!: string;
  @Output() select = new EventEmitter<string>();

  // imagePath = computed(()=> {
  //   return '/assets/users/' + this.avatar;
  // });
  get imagePath () {
    return '/assets/users/' + this.user.avatar;
  }
  onSelectUser() { 
    this.select.emit(this.user.id);
  }
}
