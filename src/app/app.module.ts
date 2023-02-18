import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddAnnonceComponent } from './components/add-annonce/add-annonce.component';
import { AnnonceDetailsComponent } from './components/annonce-details/annonce-details.component';
import { AnnonceListComponent } from './components/annonce-list/annonce-list.component';
import { EditAnnonceComponent } from './components/edit-annonce/edit-annonce.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAnnonceComponent,
    AnnonceDetailsComponent,
    AnnonceListComponent,
    EditAnnonceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
