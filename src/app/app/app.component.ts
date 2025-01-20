

import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { DUMMY_USERS } from '../../user/dummy-users';
import { UserComponent } from '../../user/user.component';
import { TasksComponent } from '../tasks/tasks.component';
import { TaskComponent } from '../tasks/task/task.component';

@Component({
selector: 'app-root',
imports: [HeaderComponent, UserComponent, TasksComponent,TaskComponent],
templateUrl: './app.component.html',
styleUrl: './app.component.css',
})
export class AppComponent {
users = DUMMY_USERS;
selectedUserId ?: string;

get selectedUser() {
return this.users.find((user) => user.id == this.selectedUserId)!;
}

onSelectUser(id: string) {
this.selectedUserId = id;
}
}