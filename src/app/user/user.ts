import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { DialogAddUser } from '../dialog-add-user/dialog-add-user';
import { AddUser } from '../../models/user.class';
import { MatCardModule } from '@angular/material/card';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    MatCardModule,
    CommonModule,
    RouterLink
  ],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User {
  public dialog = inject(MatDialog);
  public firestore = inject(Firestore);
  public allUsers: any[] = [];

  openDialog() {
    this.dialog.open(DialogAddUser);
  }

  ngOnInit(): void {
    const usersRef = collection(this.firestore, 'users');
    collectionData(usersRef, {idField: 'firebaseId'}).subscribe((changes) => {
      this.allUsers = changes as User[];
      console.log(this.allUsers)
    });
  }
}
