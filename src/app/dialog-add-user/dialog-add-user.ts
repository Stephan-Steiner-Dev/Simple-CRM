import { Component, inject } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { AddUser } from '../../models/user.class';
import { FormsModule } from '@angular/forms';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';

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
    FormsModule,
    MatProgressBarModule,
    CommonModule,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './dialog-add-user.html',
  styleUrls: ['./dialog-add-user.scss'],
})
export class DialogAddUser {
  addUser = new AddUser();
  birthDate: Date | null = null;
  public firestore = inject(Firestore);
  private usersRef = collection(this.firestore, 'users');
  public loading = false;
  private dialogRef = inject(MatDialogRef);

  saveUser() {
    if (this.birthDate) {
      this.addUser.birthDate = this.birthDate.getTime();
    }
    this.loading = true;
    addDoc(this.usersRef, this.addUser.toJSON()).then((result: any) => {
      this.loading = false;
      this.dialogRef.close();
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
