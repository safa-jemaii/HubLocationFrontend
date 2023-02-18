import { EditAnnonceComponent } from './components/edit-annonce/edit-annonce.component';
import { AnnonceListComponent } from './components/annonce-list/annonce-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAnnonceComponent } from './components/add-annonce/add-annonce.component';
import { AnnonceDetailsComponent } from './components/annonce-details/annonce-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'annonces', pathMatch: 'full' },

  { path: 'annonces', component: AnnonceListComponent },
  { path: 'annonces/:id', component: AnnonceDetailsComponent },
  { path: 'add', component: AddAnnonceComponent },
  { path: 'edit', component: EditAnnonceComponent },
  { path: 'details/:id', component: AnnonceDetailsComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
