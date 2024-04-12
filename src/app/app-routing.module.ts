import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexMainComponent} from "./index-main/index-main.component";
import {DetailsPetsComponent} from "./details-pets/details-pets.component";
import {DetailsOwnersComponent} from "./details-owners/details-owners.component";
import {IndexPetsComponent} from "./index-pets/index-pets.component";
import {IndexOwnersComponent} from "./index-owners/index-owners.component";

const routes: Routes = [
  {path: '', component: IndexMainComponent},

  {path: 'index/petsList', component: IndexPetsComponent},
  {path: 'index/ownersList', component: IndexOwnersComponent},

  {path: 'pets/:petID', component: DetailsPetsComponent},
  {path: 'owners/:ownerID', component: DetailsOwnersComponent},

  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
