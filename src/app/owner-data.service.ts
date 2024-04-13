import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Owner} from "./owner";
import {DataJson, OwnerJson} from "./OwnerJson";
import {map, Observable, switchMap} from "rxjs";
import {Pet} from "./pet";
import {PetsJson} from "./PetsJson";
import {PetDataService} from "./pet-data.service";


@Injectable({
  providedIn: 'root'
})
export class OwnerDataService {

  constructor(private http: HttpClient ) {
  }
  private static imageFolder: string = 'http://localhost:8080/images/owners/';
  private static dataUrl: string = 'http://localhost:8080/api/owners';

  private static json2Owner(ownerJson: OwnerJson): Owner {
    const owner: Owner = new Owner();
    owner.id = ownerJson.id;
    owner.firstName = ownerJson.firstName;
    owner.lastName = ownerJson.lastName;
    owner.petCount = ownerJson.petCount;

    owner.linkSelf = ownerJson._links.self.href;
    owner.linkPets = ownerJson._links.pets.href;
    owner.linkOwner = ownerJson._links.owner.href;

    return owner;
  }

  public getAllOwners () : Observable<Owner[]> {
    return this.http.get<DataJson>(OwnerDataService.dataUrl)
      .pipe(
        map(data => data._embedded.owners
          .map(owner => OwnerDataService.json2Owner(owner)))
      )
  }

  public getOwnerById(id: string): Observable<Owner | undefined>{
    return this.http
      .get<OwnerJson> (`${OwnerDataService.dataUrl}/${id}`)
      .pipe(map(owner => OwnerDataService.json2Owner(owner)));
  }

  public getOwnerByUrl(url: string): Observable<Owner | undefined> {
    return this.http.get<OwnerJson>(url).pipe(
      map(owner => {
        return OwnerDataService.json2Owner(owner);
      })
    );
  }

}
