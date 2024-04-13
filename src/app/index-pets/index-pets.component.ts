import { Component } from '@angular/core';
import {Pet} from "../pet";
import {Observable} from "rxjs";
import {PetDataService} from "../pet-data.service";

@Component({
  selector: 'app-index-pets',
  templateUrl: './index-pets.component.html',
  styleUrl: './index-pets.component.css'
})
export class IndexPetsComponent {

  petsList: Observable<Pet[]>;

  constructor(petDataService: PetDataService) {
    this.petsList = petDataService.getAllPets();
  }

}
