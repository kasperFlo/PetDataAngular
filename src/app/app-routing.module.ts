import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexMainComponent} from "./index-main/index-main.component";
import {DetailsPetsComponent} from "./details-pets/details-pets.component";
import {DetailsOwnersComponent} from "./details-owners/details-owners.component";
import {IndexPetsComponent} from "./index-pets/index-pets.component";
import {IndexOwnersComponent} from "./index-owners/index-owners.component";

const routes: Routes = [
  {path: '', component: IndexMainComponent},
  {path: 'index', component: IndexMainComponent},

  {path: 'petsList', component: IndexPetsComponent},
  {path: 'index/petsList/pet/:petID', component: DetailsPetsComponent},
  {path: 'index/petsList/pet/:petID/owner', component: DetailsOwnersComponent},


  {path: 'ownersList', component: IndexOwnersComponent},
  {path: 'index/ownersList/owner/:ownerID', component: DetailsOwnersComponent},
  {path: 'index/ownersList/owner/:ownerID/pets', component: DetailsPetsComponent},

  // {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
