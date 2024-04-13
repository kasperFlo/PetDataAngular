import {Component, OnDestroy} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {OwnerDataService} from "../owner-data.service";
import {Observable, Subscription} from "rxjs";
import {Owner} from "../owner";
import {PetDataService} from "../pet-data.service";
import {Pet} from "../pet";

@Component({
  selector: 'app-details-owners',
  templateUrl: './details-owners.component.html',
  styleUrl: './details-owners.component.css'
})
export class DetailsOwnersComponent implements OnDestroy{

  owner: Owner | undefined;
  pet: Pet | undefined;
  petsList: Observable < Pet[] | undefined> | undefined;

  ownerSub : Subscription | undefined;
  petSub : Subscription | undefined;


  constructor( private route: ActivatedRoute, private ownerDataService: OwnerDataService , private petDataService: PetDataService
  ) {
      const petId: string | null = this.route.snapshot.paramMap.get('petID');
      const ownerId: string | null = this.route.snapshot.paramMap.get('ownerID');

      if (ownerId !== null) {
        this.ownerSub =
          this.ownerDataService.getOwnerById(ownerId).subscribe(owner => {
            this.owner = owner
          if(this.owner) {
            this.petsList = petDataService.getPetsByUrl(this.owner.linkPets);
            }
          });

      } else if (petId !== null) {
        this.petSub =
          this.petDataService.getPetById(petId).subscribe(pet => {
          this.pet = pet;

          console.log("trying to retrieve owner via pets URL :" + this.pet?.linkOwner);
          if(this.pet){
              this.ownerSub =
                this.ownerDataService.getOwnerByUrl(this.pet.linkOwner).subscribe(owner => {
                  this.owner = owner;

                  if(this.owner) {
                    this.petsList = petDataService.getPetsByUrl(this.owner.linkPets);
                  }
                });

            }

        });

      }
    }

  ngOnDestroy(){
    this.petSub?.unsubscribe();
    this.ownerSub?.unsubscribe();
  }
}
