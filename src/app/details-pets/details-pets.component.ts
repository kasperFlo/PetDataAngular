import {Component, OnDestroy} from '@angular/core';
import {PetDataService} from "../pet-data.service";
import {ActivatedRoute} from "@angular/router";
import {Observable, Subscription} from "rxjs";
import {Pet} from "../pet";

@Component({
  selector: 'app-details-pets',
  templateUrl: './details-pets.component.html',
  styleUrl: './details-pets.component.css'
})
export class DetailsPetsComponent implements OnDestroy {

  pet: Pet | undefined;
  private petSub: Subscription | undefined;

  constructor(petDataService: PetDataService, activatedRoute: ActivatedRoute) {
    const id: string | null = activatedRoute.snapshot.paramMap.get('petID');
    if(id != null){
      this.petSub =
        petDataService.getPetById(id).subscribe(pet => this.pet = pet);
    }
  }

  ngOnDestroy(){
    this.petSub?.unsubscribe();
  }
}
