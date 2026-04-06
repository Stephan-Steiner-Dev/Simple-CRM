import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes), provideFirebaseApp(() =>
      initializeApp({
        projectId: "simple-crm-d3ea2",
        appId: "1:531023713268:web:7caf5e49625d365a8bdfa1",
        storageBucket: "simple-crm-d3ea2.firebasestorage.app",
        apiKey: "AIzaSyBahaepWnCpKbCBf4EF69LT5HvQRl26Rmc",
        authDomain: "simple-crm-d3ea2.firebaseapp.com",
        messagingSenderId: "531023713268",
      })),
      provideDatabase(() => getDatabase()),
      provideFirestore(() => getFirestore())
  ]
};