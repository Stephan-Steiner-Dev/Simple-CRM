import { Component, inject } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { AddUser } from '../../models/user.class';
import {provideNativeDateAdapter} from '@angular/material/core';

interface DialogEditUserData {
  user$: Observable<AddUser>;
}

@Component({
  selector: 'app-dialog-edit-user',
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    FormsModule,
    MatProgressBarModule,
    CommonModule
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './dialog-edit-user.html',
  styleUrl: './dialog-edit-user.scss',
})
export class DialogEditUser {
  public user$ = inject<DialogEditUserData>(MAT_DIALOG_DATA).user$;
  private dialogRef = inject(MatDialogRef);
  public loading = false;

  closeDialog() {
    this.dialogRef.close();
  }
  saveUser() {}
}
