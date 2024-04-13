import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Owner} from "../owner";
import {OwnerDataService} from "../owner-data.service";

@Component({
  selector: 'app-index-owners',
  templateUrl: './index-owners.component.html',
  styleUrl: './index-owners.component.css'
})
export class IndexOwnersComponent {

  ownersList: Observable<Owner[]>;

  constructor(ownerDataService: OwnerDataService) {
    this.ownersList = ownerDataService.getAllOwners();
  }

}
