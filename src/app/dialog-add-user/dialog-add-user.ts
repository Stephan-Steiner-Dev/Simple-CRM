import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import { AddUser } from '../../models/user.class';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    FormsModule
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './dialog-add-user.html',
  styleUrls: ['./dialog-add-user.scss']
})
export class DialogAddUser {
  addUser = new AddUser();
  birthDate: Date | null = null;

  saveUser() {
  if (this.birthDate) {
    this.addUser.birthDate = this.birthDate.getTime();
  }
    console.log(this.addUser)
  }
}
