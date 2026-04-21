import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { User } from './user/user';
import { DialogAddUser } from './dialog-add-user/dialog-add-user';
import { UserDetail } from './user-detail/user-detail';
import { DialogEditAddress } from './dialog-edit-address/dialog-edit-address';
import { DialogEditUser } from './dialog-edit-user/dialog-edit-user';

export const routes: Routes = [
  { path: '', component: Dashboard },
  { path: 'dashboard', component: Dashboard },
  { path: 'user', component: User },
  { path: 'user', component: DialogAddUser },
  { path: 'user/:id', component: UserDetail },
  { path: 'dialog-edit-address', component: DialogEditAddress },
  { path: 'dialog-edit-user', component: DialogEditUser }
];
