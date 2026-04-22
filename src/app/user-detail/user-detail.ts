import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Firestore, doc, docData } from '@angular/fire/firestore';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MatIcon } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditAddress } from '../dialog-edit-address/dialog-edit-address';
import { DialogEditUser } from '../dialog-edit-user/dialog-edit-user';

@Component({
  selector: 'app-user-detail',
  imports: [MatCardModule, MatIcon, CommonModule, MatMenuModule],
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.scss',
})
export class UserDetail {
  firestore = inject(Firestore);
  route = inject(ActivatedRoute);
  userId: string | null = null;
  user$!: Observable<any>;
  public dialog = inject(MatDialog);

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');

    if (this.userId) {
      this.user$ = this.getUser(this.userId);
      console.log(this.user$);
    }
  }

  getUser(userId: string): Observable<any> {
    const userDocRef = doc(this.firestore, 'users', userId);
    return docData(userDocRef, { idField: 'id' }) as Observable<any>;
  }

  editAddress() {
    this.dialog.open(DialogEditAddress, {
      data: {
        user$: this.user$,
        userId: this.userId
      },
    });
  }

  editUserDetail() {
    this.dialog.open(DialogEditUser, {
      data: {
        user$: this.user$,
        userId: this.userId
      },
    });
  }
}
