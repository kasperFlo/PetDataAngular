import { Injectable } from '@angular/core';
import {Pet} from "./pet";
import {DataJson, PetsJson} from "./PetsJson";
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Owner} from "./owner";
import {OwnerJson} from "./OwnerJson";
import {OwnerDataService} from "./owner-data.service";


@Injectable({
  providedIn: 'root'
})
export class PetDataService {


  constructor(private http: HttpClient , private ownerDataService: OwnerDataService) {
  }

  private static imageFolder: string = 'http://localhost:8080/images/pets/';
  private static dataUrl: string = 'http://localhost:8080/api/pets';


  private static json2Pet(petsJson: PetsJson): Pet {
    const pet: Pet = new Pet();
    pet.id = petsJson.id;
    pet.name = petsJson.name;
    pet.petKind = petsJson.petKind;
    pet.age = petsJson.age;
    pet.ownerId =  petsJson.ownerId;
    pet.imageSrc = PetDataService.imageFolder + petsJson.image;

    pet.linkSelf = petsJson._links.self.href;
    pet.linkPet = petsJson._links.pet.href;
    pet.linkOwner =  petsJson._links.owner.href;

    return pet;
  }

  public getAllPets () : Observable<Pet[]> {
      return this.http.get<DataJson>(PetDataService.dataUrl)
        .pipe(
          map(data => data._embedded.pets
            .map(pet => PetDataService.json2Pet(pet)))
        )
  }

  public getPetById(id: string): Observable<Pet | undefined>{
    return this.http.get<PetsJson> (`${PetDataService.dataUrl}/${id}`)
      .pipe(
        map(pet => PetDataService.json2Pet(pet))
      );
  }

  public getPetsByUrl(url: string): Observable<Pet[] | undefined> {
    return this.http.get<DataJson>(url)
      .pipe(
        map(data => data._embedded.pets
          .map(pet => PetDataService.json2Pet(pet)))
      );
  }

}
