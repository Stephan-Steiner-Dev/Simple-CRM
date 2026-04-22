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
import { Firestore, doc, updateDoc } from '@angular/fire/firestore';

interface DialogEditAddressData {
  user$: Observable<AddUser>;
  userId: string;
}

@Component({
  selector: 'app-dialog-edit-address',
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
  templateUrl: './dialog-edit-address.html',
  styleUrl: './dialog-edit-address.scss',
})
export class DialogEditAddress {
  private data = inject<DialogEditAddressData>(MAT_DIALOG_DATA);
  public user$ = this.data.user$;
  private userId = this.data.userId;
  dialogRef = inject(MatDialogRef);
  public loading = false;
  firestore = inject(Firestore);
  user!: AddUser;

  ngOnInit() {
    this.user$.subscribe((u) => {
      this.user = Object.assign(new AddUser(), u);
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }

  saveUser() {
    const userRef = doc(this.firestore, 'users', this.userId);
this.loading = true;
    updateDoc(userRef, {
      address: this.user.address,
      zipCode: this.user.zipCode,
      city: this.user.city,
    });
    this.loading = false
    this.closeDialog()
  }
}
