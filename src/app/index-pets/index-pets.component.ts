import {Component, OnDestroy} from '@angular/core';
import {Pet} from "../pet";
import {Observable, Subscription} from "rxjs";
import {PetDataService} from "../pet-data.service";

@Component({
  selector: 'app-index-pets',
  templateUrl: './index-pets.component.html',
  styleUrl: './index-pets.component.css'
})
export class IndexPetsComponent implements OnDestroy {

  petsList: Pet[] = [];
  petsSub : Subscription | undefined;
  displayedColumns: string[] = ['image', 'name', 'age', 'petKind'];

  constructor(petDataService: PetDataService) {
    this.petsSub = petDataService.getAllPets().subscribe(petsList => this.petsList = petsList);
  }

  ngOnDestroy() {
    this.petsSub?.unsubscribe();
  }

}

