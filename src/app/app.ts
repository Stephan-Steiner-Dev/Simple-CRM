import { Component, signal, inject } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, MatToolbarModule, MatSidenavModule, MatButtonModule, MatIconModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  firestore: Firestore = inject(Firestore);
  protected readonly title = signal('simple-crm');
  public showFiller = true;
}
