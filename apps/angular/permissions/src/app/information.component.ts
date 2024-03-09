import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HasRoleDirective } from './HasRole.directive';
import {
  User,
  admin,
  client,
  everyone,
  manager,
  reader,
  writer,
} from './user.model';
import { UserStore } from './user.store';

@Component({
  selector: 'app-information',
  standalone: true,
  imports: [CommonModule, HasRoleDirective],
  template: `
    <h2 class="mt-10 text-xl">Information Panel</h2>
    <!-- admin can see everything -->
    <div *hasRole="[adminRole]">visible only for super admin</div>
    <div *hasRole="[managerRole]">visible if manager</div>
    <div *hasRole="[managerRole, readerRole]">
      visible if manager and/or reader
    </div>
    <div *hasRole="[managerRole, writerRole]">
      visible if manager and/or writer
    </div>
    <div *hasRole="[clientRole]">visible if client</div>
    <div *hasRole="[everyoneRole]">visible for everyone</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InformationComponent {
  adminRole: User;
  readerRole: User;
  managerRole: User;
  writerRole: User;
  clientRole: User;
  everyoneRole: User;
  user$ = this.userStore.user$;
  constructor(private userStore: UserStore) {
    this.adminRole = admin;
    this.managerRole = manager;
    this.writerRole = writer;
    this.clientRole = client;
    this.readerRole = reader;
    this.everyoneRole = everyone;
  }
}
