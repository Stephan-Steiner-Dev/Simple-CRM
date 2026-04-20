import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Firestore, doc, docData } from '@angular/fire/firestore';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MatIcon } from '@angular/material/icon';


@Component({
  selector: 'app-user-detail',
  imports: [MatCardModule, MatIcon, CommonModule],
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.scss',
})
export class UserDetail{
  firestore = inject(Firestore);
  route = inject(ActivatedRoute);
  userId: string | null = null;
  user$!: Observable<any>;

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');

    if (this.userId) {
      this.user$ = this.getUser(this.userId);
      console.log(this.user$)
    }
  }

  getUser(userId: string): Observable<any> {
    const userDocRef = doc(this.firestore, 'users', userId);
    return docData(userDocRef, { idField: 'id' }) as Observable<any>;
  }

  openAddressDialog() {}
}
