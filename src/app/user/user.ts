import { Component, inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { DialogAddUser } from '../dialog-add-user/dialog-add-user';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatTooltipModule, MatDialogModule],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User {
  public dialog = inject(MatDialog)

  openDialog() {
    this.dialog.open(DialogAddUser)
  }
}
