import {Component, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs";
import {Owner} from "../owner";
import {OwnerDataService} from "../owner-data.service";

@Component({
  selector: 'app-index-owners',
  templateUrl: './index-owners.component.html',
  styleUrl: './index-owners.component.css'
})
export class IndexOwnersComponent implements OnDestroy{

  ownersList: Owner[] = [];
  ownerSub: Subscription;
  displayedColumns: string[] = ['firstName', 'lastName', 'petCount', 'details'];

  constructor(ownerDataService: OwnerDataService) {
    this.ownerSub = ownerDataService.getAllOwners().subscribe(ownersList => this.ownersList = ownersList);
  }

  ngOnDestroy() {
    this.ownerSub?.unsubscribe();
  }
}
